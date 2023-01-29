const whoisinfo = require("whois-json");

async function WhoIs(req, res) {
  try {
    const domain = req.query.domain;
    const zone = req.query.zone;
    const results = await whoisinfo(domain + "." + zone);
    if (results) {
      return res.status(200).send(results);
    } else {
      return res.status(404).send({ message: "this domain not found" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  WhoIs,
};