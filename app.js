// MODULE
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

// Routes
weatherApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "pages/home.html",
        controller: "homeController"
      })
      .when("/forecast", {
        templateUrl: "pages/forecast.html",
        controller: "forecastController"
      });
  }
]);

// SERVICES
weatherApp.service("cityService", function() {
  this.city = "";
});

// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "cityService",
  function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch("city", function(newValue, oldValue) {
      cityService.city = newValue;
    });
  }
]);

weatherApp.controller("forecastController", [
  "$scope",
  "cityService",
  function($scope, cityService) {
    $scope.city = cityService.city;
  }
]);
