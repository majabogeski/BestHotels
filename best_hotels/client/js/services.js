app.service("HotelService", function($http){
  return{
    getHotels: function(){
      return $http.get("/api/hotels");
    },
    addHotel: function(hotel){
      return $http.post("/api/hotels", hotel);
    },
    editHotel: function(hotel){
      return $http.put('/api/hotels/' + hotel._id, hotel);
    },
    getHotel: function(id) {
      return  $http.get('/api/hotels/' + id);
    },
    deleteHotel: function(id) {
      return  $http.delete('/api/hotels/' + id);
    }
  };
});