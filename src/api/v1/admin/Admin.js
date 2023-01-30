const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
// const AdminBroMongoose = require('admin-bro-mongoose')
// const mongoose = require('mongoose')
const mongooseAdminBro = require("@admin-bro/mongoose");
// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//   databases: [mongoose],
//   rootPath: '/admin',
// })
const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_PASS,
} = require("../../../config/swagger/config");

const ADMIN = {
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
};
// Modeles
const User = require("../models/User");
const Order = require("../models/Order");
const Contact = require("../models/Contact");
const Pochta = require("../models/Pochta");
const Hosting = require("../models/Hosting");
AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = {
  resources: [
    User,
    Pochta,
    {
      resource: Order,
      options: {
        parent: { name: "Admin" },
        properties: {
          _id: { isVisible: false },
          isOrdered: {
            type: "textarea",
          },
        },
      },
    },
    Hosting,
    {
      resource: Contact,
      options: {
        properties: {
          message: {
            type: "richtext",
          },
        },
      },
    },
  ],
  branding: {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6p-sWBRDuG53fSWVREq_FCNcEAmcAezXfXA&usqp=CAU",
    companyName: "Optimum dev",
    softwareBrothers: false, // if Software Brothers logos should be shown in the sidebar footer
  },
};

const adminBro = new AdminBro(AdminBroOptions);
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword:
    ADMIN_COOKIE_PASS ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (ADMIN_EMAIL === email && ADMIN_PASSWORD === password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
