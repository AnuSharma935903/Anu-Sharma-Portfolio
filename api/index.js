const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), "index.html");

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(fs.readFileSync(filePath, "utf8"));
};
