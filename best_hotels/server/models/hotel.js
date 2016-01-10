
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
  phone:{
    type: Number,
    required: true,
  },
  starHotel:{
    type: String,
    required:  true
  },
  bathrooms:{
    type: Number,
    required: true
  },
  hotelemail:{
    type: String,
    required: true
  },
  hotelDescription:{
    type: String,
    required: true
  },
  bedType:{
    type: String,
    required: true
  },
  bedNumber:{
    type: Number,
    required: true
  },
  roomType:{
    type: String,
    required: true
  },
  amenities:[{
    amenitie:{
      type: String
    }
  }],
  aditionalAmenities:[{
    aditionalAmenitie:{
      type: String
    }
  }],
  specialFutures:[{
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