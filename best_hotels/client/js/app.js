var app = angular.module("hotelApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider,$httpProvider){

  $routeProvider
    .when('/',{
      templateUrl: "templates/index.html",
      controller: "HotelsController"
    })
    .when('/hotels/new',{
      templateUrl: "templates/new.html",
      controller: "NewHotelController"
    })
    .when('/hotels/:id/edit',{
      templateUrl: "templates/edit.html",
      controller: "EditHotelController"
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
});

