var app = angular.module("hotelsApp", ['ngRoute','ngAnimate','ui.slider','ng-uploadcare','satellizer']);

app.config(function($routeProvider, $locationProvider, $httpProvider, $authProvider){

  $routeProvider
    .when('/login', {
      controller: "LoginController",
      templateUrl: "templates/auth/login.html",
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/signup', {
      controller: "SignupController",
      templateUrl: "templates/auth/signup.html",
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/logout', {
      template: null,
      controller: 'LogoutController'
    })
    .when('/hotels',{
      templateUrl: "templates/hotels/index.html",
      controller: "HotelsController"
    })
    .when('/hotels/new',{
      templateUrl: "templates/hotels/new.html",
      controller: "NewHotelController",
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/hotels/:id',{
      templateUrl: "templates/hotels/show.html",
      controller: "ShowHotelController"
    })
    .when('/hotels/:id/edit',{
      templateUrl: "templates/hotels/edit.html",
      controller: "EditHotelController"
    })
    .when('/',{
      templateUrl: "templates/hotels/home.html",
      controller: "SliderController"
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

  $authProvider.facebook({
      clientId: '815761801886143',
      url: '/auth/facebook'
    });

    function skipIfLoggedIn($q, $auth, $location) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          $location.path('/hotels/new');
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }

      function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }
});

