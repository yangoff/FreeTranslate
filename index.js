require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || process.env.APIPORT || 50001;

require("./src/route")(app);
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
