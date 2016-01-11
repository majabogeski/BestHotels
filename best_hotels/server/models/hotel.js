
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
  starHotel:{
    type: String,
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
    type: Number,
    required: true,
  },
  bathrooms:{
    type: Number,
    required: true
  },
  hotelDescription:{
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
  amenities:[{
    amenitie:{
      type: String
    }
  }],
  propertyType:[{
    specialFuture:{
      type: String
    }
  }],
  photos:[{
    photo:{
      type: String
    }
  }],
  hotelSafety:[{
    safety:{
      type: String
    }
  }]
});

var Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;