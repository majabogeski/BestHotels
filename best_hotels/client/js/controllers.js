app.controller("HotelsController", function($scope, HotelService){
  HotelService.getHotels().then(function(hotels){
    $scope.hotels = hotels.data;
  }).catch(function(err){
    $scope.errors = err; 
  });
});

app.controller("NewHotelController", function($scope, $location, HotelService){
  $scope.addHotel = function(hotel){
    HotelService.addHotel(hotel).then(function(res) {
      $location.path('/hotels');
    }, function(reserror) {
      console.log(reserror);
      $scope.errors = Object.keys(reserror.data.error.errors).map(function(el){
       return reserror.data.error.errors[el].message;
      });
    });
  };
});

  // $scope.hotel = {};
  // $scope.hotel.amenities = {};
  // $scope.hotel.amenities.wirelessInternet = true;

  // $scope.showHotel = function() {
  //   console.log($scope.hotel);
  // };


app.controller("EditHotelController", function($scope, $location, $routeParams,HotelService){
  HotelService.getHotel($routeParams.id).then(function(hotel){
    $scope.hotel = hotel.data;
  });

  $scope.editTodo = function(hotel){
    HotelService.editTodo(hotel).then(function(){
      $location.path('/hotels');
    });
  };

  $scope.deleteHotel = function(hotel){
    HotelService.deleteHotel(hotel._id).then(function(data){
      $location.path('/hotels');
    });
  };
});