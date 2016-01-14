var app = angular.module("hotelsApp", ['ngRoute','ngAnimate','ui.slider']);

app.config(function($routeProvider, $locationProvider,$httpProvider){

  $routeProvider
    .when('/hotels',{
      templateUrl: "templates/hotels/index.html",
      controller: "HotelsController"
    })
    .when('/hotels/new',{
      templateUrl: "templates/hotels/new.html",
      controller: "NewHotelController"
    })
    .when('/hotels/search',{
      templateUrl: "templates/hotels/search.html",
      //controller: "NewHotelController"
    })
    .when('/hotels/:id/edit',{
      templateUrl: "templates/hotels/edit.html",
      controller: "EditHotelController"
    })
    .when('/',{
      templateUrl: "templates/hotels/home.html",
      controller: "SliderController"
    })
    .otherwise({redirectTo: '/hotels'});

  $locationProvider.html5Mode(true);
});

