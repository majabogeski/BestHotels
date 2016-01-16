app.controller("HotelsController", function($scope, HotelService,$location){
  // console.log($location.search());
  HotelService.getHotels($location.search().destination).then(function(hotels){
    console.log(hotels);
    $scope.hotels = hotels.data;
  }).catch(function(err){
    $scope.errors = err; 
  });
});

app.controller("NewHotelController", function($scope, $location, HotelService){
  $scope.onUCUploadComplete = function(info){
   console.log(info);
   $scope.hotel.photos=[];
   for (var i = 0; i < info.count; i++){
    $scope.hotel.photos.push(info.cdnUrl + "nth/"+i+"/");
   }
   // console.log($scope.photos);
  };
  
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

// app.controller("DisplayImagesController",function($scope, $location, $routeParams,HotelService){
//     $scope.images = ["/images/beach.jpg","/images/beach1.jpg","/images/beach2.jpg","/images/gg.jpg","/images/ny.jpg","/images/sf.jpeg","/images/sf1.jpeg","/images/sf2.jpg","/images/sf3.jpg"];
// });
app.controller('SliderController', function($scope,$location,$auth) {
  // Get user information from the token
  if ($auth.getPayload()) {
    $scope.user = $auth.getPayload().user;
  }

  $scope.searchHotel = function(location){
   $scope.location={};
   $location.url("/hotels?destination="+ encodeURIComponent(location.search));
  };

  $scope.options = [
    {name: '1 Guest'},
    {name: '2 Guests'},
    {name: '3 Guests'},
    {name: '4 Guests'},
    {name: '5 Guests'},
    {name: '6 Guests'},
    {name: '7 Guests'},
    {name: '8 Guests'},
    {name: '9 Guests'},
    {name: '10+ Guests'}
  ];
  $scope.images = [{
    src: "yosemite.jpg",
    title: 'Pic 3'
  }, {
    src: "bahamas.jpg",
    title: 'Pic 1'
  }, {
    src: "Mountains.jpg",
    title: 'Pic 2'
  }, {
    src: "1.jpg",
    title: 'Pic 3'
  }, {
    src: "ggb.jpg",
    title: 'Pic 4'
  }, {
    src: "ny.jpg",
    title: 'Pic 5'
  }];
});

app.controller("LoginController", function($scope, $auth, $location){
  $scope.login = function() {
    $auth.login($scope.user)
      .then(function(response) {
        $auth.setToken(response);
        $location.path('/hotels/new');
        console.log('You have successfully signed-in');
      })
      .catch(function(response) {
        console.log(response.data.message);
      });
  };
  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        console.log('You have successfully signed in with ' + provider + '!');
        $location.path('/hotels/new');
      })
      .catch(function(error) {
        if (error.error) {
          // Popup error - invalid redirect_uri, pressed cancel button, etc.
          console.log(error.error);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };
});


app.controller('LogoutController', function($location, $auth) {
  if (!$auth.isAuthenticated()) { return; }
  $auth.logout()
    .then(function() {
      console.log('You have been logged out');
      $location.path('/');
    });
});


app.controller('SignupController', function($scope, $location, $auth) {
  $scope.signup = function() {
    $auth.signup($scope.user)
      .then(function(response) {
        $auth.setToken(response);
        $location.path('/hotels/new');
        console.log('You have successfully created a new account and have been signed-in');
      })
      .catch(function(response) {
        console.log(response.data.message);
      });
  };
  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        console.log('You have successfully signed in with ' + provider + '!');
        $location.path('/hotels/new');
      })
      .catch(function(error) {
        if (error.error) {
          // Popup error - invalid redirect_uri, pressed cancel button, etc.
          console.log(error.error);
        } else if (error.data) {
          // HTTP response error from server
          console.log(error.data.message, error.status);
        } else {
          console.log(error);
        }
      });
  };
});