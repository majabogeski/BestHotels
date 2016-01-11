var app = angular.module("hotelsApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider,$httpProvider){

  $routeProvider
    .when('/',{
      templateUrl: "templates/hotels/index.html",
      controller: "HotelsController"
    })
    .when('/hotels/new',{
      templateUrl: "templates/hotels/new.html",
      controller: "NewHotelController"
    })
    .when('/hotels/:id/edit',{
      templateUrl: "templates/hotels/edit.html",
      controller: "EditHotelController"
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
});

