const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = parseFloat(req.body.weight); //using decimals
  var height = parseFloat(req.body.height); //using decimals
  var bmi = weight/Math.pow(height, 2);
  console.log(bmi);
  res.send("BMI: " + bmi.toFixed(2)); //2 decimals
});

app.listen(3000, function() {
  console.log("Server up and running!");
});
