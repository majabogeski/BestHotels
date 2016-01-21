var mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/hotels2");



module.exports.Hotel = require("./hotel");
module.exports.User = require("./user");



