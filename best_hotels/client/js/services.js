app.service("HotelService", function($http){
  return{
    getAllHotels: function(){
      return $http.get("/api/hotels").then(function(resp){
        return resp.data;
      });
    },
    addHotel: function(hotel){
      return $http.post("/api/hotels,hotel").then(function(resp){
        return resp.data;
      });
    },
    editHotel: function(hotel){
      return $http.put('/api/hotels/' + hotel._id, hotel).then(function(resp){
        return resp.data;
      });
    },
    getHotel: function(id) {
      return  $http.get('/api/hotels/' + id).then(function(resp){
        return resp.data;
      });
    },
    deleteHotel: function(id) {
      return  $http.delete('/api/hotels/' + id).then(function(resp){
        return resp.data;
      });
    },
  };
});