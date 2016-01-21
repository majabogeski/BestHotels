app.controller("HotelsController", function($scope, $auth, HotelService,$location){
   $scope.userNav = false;
   if ($auth.getPayload()) {
    $scope.user = $auth.getPayload().user;
    $scope.userNav = true;
  }
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

  $scope.searchHotel = function(location){
   $scope.location={};
   $location.url("/hotels?destination="+ encodeURIComponent(location.search));
  };

  if ($location.search().destination) {
    HotelService.getHotels($location.search().destination).then(function(res){
      console.log(res.data);
      // console.log(hotels.data[0].hotelname);
      // console.log(hotels.data[1].hotelname);
      // console.log(hotels.data[0].photos[0]);
      // console.log(hotels.data[0].address);
      $scope.hotels = res.data;
      initMap();
    }).catch(function(err){
      $scope.errors = err; 
    });

    var initMap = function() {
      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 10
      });

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': $location.search().destination}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
      $scope.hotels.forEach(function(hotel){
        geocoder.geocode( { 'address': hotel.address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      });
    };
  }
});

app.controller("NewHotelController", function($scope, $location,$routeParams, $auth, HotelService){
 

  // Get user information from the token
  $scope.userNav = false;
  if ($auth.getPayload()) {
    $scope.user = $auth.getPayload().user;
    $scope.userNav = true;
  }

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
 // creating a new hotel accommodates option
  $scope.accommodates = [
    {name: '1 Guests'},
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
//creating a new hotel HOTEL ROOM TYPES
  $scope.roomtypes = [
    {name: 'SINGLE ROOM'},
    {name: 'DOUBLE ROOM'},
    {name: 'TWIN ROOM'},
    {name: 'INTERCONNECTING ROOMS'},
    {name: 'ADJOINING ROOMS'},
    {name: 'HOLLYWOOD TWIN ROOM'},
    {name: 'DUPLEX'},
    {name: 'CABANA'},
    {name: 'STUDIO ROOM'},
    {name: 'KING BEDROOM'},
    {name: 'QUEEN BEDROOM'}
  ];
  //bedsNumber
  $scope.bednumbers = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
    {name: '6'}
  ];
});


app.controller("ShowHotelController", function($scope, $auth, $location, $routeParams, HotelService){
  // Get user information from the token
  $scope.userNav = false;
  if ($auth.getPayload()) {
    $scope.user = $auth.getPayload().user;
    $scope.userNav = true;
  }

  HotelService.getHotel($routeParams.id).then(function(hotel){
    console.log($scope.hotel);
    $scope.hotel = hotel.data;
  });
  // $scope.getHotel = function(hotel){
  //   $location.path('/');
  // };
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
  $scope.months = [
    {name: 'Jan'},
    {name: 'Feb'},
    {name: 'Mar'},
    {name: 'Apr'},
    {name: 'May'},
    {name: 'Jun'},
    {name: 'July'},
    {name: 'Aug'},
    {name: 'Sep'},
    {name: 'Oct'},
    {name: 'Nov'},
    {name: 'Dec'}
  ];
    $scope.years = [
    {name: '2015'},
    {name: '2016'},
    {name: '2017'},
    {name: '2018'},
    {name: '2018'}
  ];

   $scope.deleteHotel = function(hotel){
    console.log("controller");
    HotelService.deleteHotel(hotel._id).then(function(data){
      $location.path('/');
    });
  };
});


app.controller("EditHotelController", function($scope, $location, $routeParams,HotelService){
  HotelService.getHotel($routeParams.id).then(function(hotel){
    $scope.hotel = hotel.data;
  });
 
  $scope.editHotel = function(hotel){
    HotelService.editHotel(hotel).then(function(){
      $location.path('/hotels/'+hotel._id);
    });
  };
  $scope.accommodates = [
    {name: '1 Guests'},
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
//creating a new hotel HOTEL ROOM TYPES
  $scope.roomtypes = [
    {name: 'SINGLE ROOM'},
    {name: 'DOUBLE ROOM'},
    {name: 'TWIN ROOM'},
    {name: 'INTERCONNECTING ROOMS'},
    {name: 'ADJOINING ROOMS'},
    {name: 'HOLLYWOOD TWIN ROOM'},
    {name: 'DUPLEX'},
    {name: 'CABANA'},
    {name: 'STUDIO ROOM'},
    {name: 'KING BEDROOM'},
    {name: 'QUEEN BEDROOM'}
  ];
  //bedsNumber
  $scope.bednumbers = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
    {name: '6'}
  ];
  $scope.onUCUploadComplete = function(info){
   console.log(info);
   $scope.hotel.photos=[];
   for (var i = 0; i < info.count; i++){
    $scope.hotel.photos.push(info.cdnUrl + "nth/"+i+"/");
   }
   // console.log($scope.photos);
  };
});

// app.controller("DisplayImagesController",function($scope, $location, $routeParams,HotelService){
//     $scope.images = ["/images/beach.jpg","/images/beach1.jpg","/images/beach2.jpg","/images/gg.jpg","/images/ny.jpg","/images/sf.jpeg","/images/sf1.jpeg","/images/sf2.jpg","/images/sf3.jpg"];
// });
app.controller('SliderController', function($scope,$location,$auth) {
  // Get user information from the token
  $scope.userNav = false;
  if ($auth.getPayload()) {
    $scope.user = $auth.getPayload().user;
    $scope.userNav = true;
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
  $scope.user = {};
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
        // if you're a host, load hotels/new otherwise go to home page
        if ($auth.getPayload().user.host) {
          $location.path('/hotels/new');
        } else {
          $location.path('/');
        }
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
