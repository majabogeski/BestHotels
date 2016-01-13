var mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/hotelsTest");



module.exports.Hotel = require("./hotel");



