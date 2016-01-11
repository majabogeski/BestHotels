
var mongoose = require("mongoose");

var hotelSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  hotelname:{
    type: String,
    required: true,
    unique: true
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
  zipcode:{
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
  bathrooms:{
    type: Number,
    required: true
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
  // amenities:[{
  //   amenitie:{
  //     type: String
  //   }
  // }],
  
    amenities:{
      wirelessInternet: false,
      pool: false,
      kitchen: false,
      hourCheckIn: false,
      airConditioning: false,
      breakfast: false,
      buzzer: false,
      cableTv: false,
      jacuzzi: false,
      doorman: false,
      dryer: false,
      elevator: false,
      essentials: false,
      family: false,
      tv: false,
      events: false,
      parking: false,
      gym: false,
      hangers: false,
      hotTub: false,
      hairDryer: false,
      heating: false,
      fireplace: false,
      internet: false,
      iron: false,
      pets: false,
      wheelchair: false,
      shampoo: false,
      washer: false,
      smoking: false
  },
  // propertyType:[{
  //   specialFuture:{
  //     type: String
  //   }
  // }],
  hotelSafety:{
      smokeDetector: false,
      carbon: false,
      aidKit: false,
      safetyCard: false,
      fireExtinguisher: false,
  },
  propertyType:{
    hotel: false,
    house: false,
    breakfast: false,
    boat: false,
    bungalow: false,
    cabin: false,
    camper: false, 
    cave: false,
    chalet: false,
    condominium: false,
    lighthouse: false,
    loft: false,
    treehouse: false,
  },
  photos:[{
    photo:{
      type: String
    }
  }],
 
});

var Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;