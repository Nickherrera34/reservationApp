// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 1000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reservation Tables (DATA)
// =============================================================
var reservationList = [
  {
    name: "Nick Herrera",
    phone: "913-221-4104",
    email: "nickherrera34@gmail.com",
    id: "551"
  },
  {
    name: "Yoda Master",
    phone: "224 112 4321",
    email: "jedimaster@aol.com",
    id:"Force"
  },
  {
    name: "Mike Jones",
    phone: "2813308004",
    email: "hitupmike@gmail.com",
    id: "Who Is Mike Jones"
  },
  {
    name: "Jeffy",
    phone: "332-5466",
    email: "jeffylikesapples@aol.com",
    id: "Apples"
  }
  
];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/list", function(req, res) {
  res.sendFile(path.join(__dirname, "list.html"));
});



app.get("/api", function(req, res) {
  res.json(reservationList);
});



app.post("/api/", function(req, res) {
var newRes = req.body;

console.log(newRes);

reservationList.push(newRes);

res.json(reservationList);
});



// Starts the server to begin listening
// =============================================================

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});