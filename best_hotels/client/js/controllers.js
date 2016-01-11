app.controller("HotelsController", function($scope, HotelService){
  HotelService.getHotels().then(function(hotels){
    $scope.hotels = hotels.data;
  }).catch(function(err){
    $scope.errors = err;
  });
});

app.controller("NewHotelController", function($scope, $location,HotelService){
  $scope.addHotel = function(hotel){
    HotelService.addHotel(hotel).then(function(){
      $location.path('/hotels');
    });
  };
});

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