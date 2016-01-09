var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bestHotels");

mongoose.set("debug",true);

//var databaseName = process.env.AUTH_DB_NAME || "angular_auth";
//mongoose.connect("mongodb://localhost/" + bestHotels);


//var user = require("./user");
//var hotel = require("./hotel");

//module.exports.User = user;

//module.exports.Hotel = hotel;
module.exports.Hotel = require("./hotel");



