var mongoose = require("mongoose");

var hotelSchema = new mongoose.Schema({
  hotelname:{
    type: String,
    required: true,
  },
  starRating:{
    type: Number,
    required:  true
  },
  address:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  state:{
    type: String,
    required: true,
  },
  zip:{
    type: Number,
    required: true,
  },
  hotelemail:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  accommodates:{
      type: Number,
      required: true
  },
  hotelroomtypes:{
    type: String,
    required: true
  },
  bedNumber:{
    type: Number,
    required: true
  },

  
    amenities:{
      wirelessInternet: {type: Boolean, default: false},
      pool: {type: Boolean, default: false},
      kitchen: {type: Boolean, default: false},
      hourCheckIn: {type: Boolean, default: false},
      airConditioning: {type: Boolean, default: false},
      breakfast: {type: Boolean, default: false},
      buzzer: {type: Boolean, default: false},
      cableTv: {type: Boolean, default: false},
      jacuzzi: {type: Boolean, default: false},
      doorman: {type: Boolean, default: false},
      dryer: {type: Boolean, default: false},
      elevator: {type: Boolean, default: false},
      essentials: {type: Boolean, default: false},
      family: {type: Boolean, default: false},
      tv: {type: Boolean, default: false},
      events: {type: Boolean, default: false},
      parking: {type: Boolean, default: false},
      gym: {type: Boolean, default: false},
      hangers: {type: Boolean, default: false},
      hotTub: {type: Boolean, default: false},
      hairDryer: {type: Boolean, default: false},
      heating: {type: Boolean, default: false},
      fireplace: {type: Boolean, default: false},
      internet: {type: Boolean, default: false},
      iron: {type: Boolean, default: false},
      pets: {type: Boolean, default: false},
      wheelchair: {type: Boolean, default: false},
      shampoo: {type: Boolean, default: false},
      washer: {type: Boolean, default: false},
      smoking: {type: Boolean, default: false}
  },
 
  hotelSafety:{
      smokeDetector: {type: Boolean, default: false},
      carbon: {type: Boolean, default: false},
      aidKit: {type: Boolean, default: false},
      safetyCard: {type: Boolean, default: false},
      fireExtinguisher: {type: Boolean, default: false}
  },
  propertyType:{
    hotel:{type: Boolean, default: false} ,
    house:{type: Boolean, default: false} ,
    breakfast:{type: Boolean, default: false} ,
    boat:{type: Boolean, default: false} ,
    bungalow:{type: Boolean, default: false} ,
    cabin:{type: Boolean, default: false} ,
    camper:{type: Boolean, default: false} , 
    cave:{type: Boolean, default: false} ,
    chalet:{type: Boolean, default: false} ,
    condominium:{type: Boolean, default: false} ,
    lighthouse:{type: Boolean, default: false} ,
    loft:{type: Boolean, default: false} ,
    treehouse:{type: Boolean, default: false} 
  },
  photos:[{
    
      type: String,
      required: true
  }],
  // user: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "User",
  //         required: true
  //       }
 
 })
.index({          //http://stackoverflow.com/questions/24714166/full-text-search-with-weight-in-mongoose
  'city':'text'
});

var Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;