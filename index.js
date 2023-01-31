// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// const stylePath = __dirname + "/public";

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// app.use("/public", express.static(stylePath));

// http://expressjs.com/en/starter/basic-routing.html
app.use("/", function (req, res) {
  res.sendFile(__dirname + "/public/style.css");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Get Unix and UTC time if input is null
app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date?", function (req, res) {
  var date = req.params.date;
  var dateObj;
  if (!date) {
    dateObj = new Date();
  } else if (!isNaN(date)) {
    dateObj = new Date(parseInt(date));
  } else {
    dateObj = new Date(date);
  }
  if (dateObj.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    var unix = dateObj.getTime();
    var utc = dateObj.toUTCString();
    res.json({ unix: unix, utc: utc });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
