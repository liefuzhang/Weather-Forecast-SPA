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
    "$resource",
    "$routeParams",
    "cityService",
    function($scope, $resource, $routeParams, cityService) {
      $scope.city = cityService.city;
      $scope.days = $routeParams.days || "2";
  
      $scope.weatherAPI = $resource(
        "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3ba8d599d762cb632daacd86b2cabddd",
        {
          callback: "JSON_CALLBACK"
        },
        { get: { method: "JSONP" } }
      );
  
      $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days
      });
  
      $scope.convertToCelsius = function(degK) {
        return Math.round(degK - 273.15);
      };
  
      $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
      };
    }
  ]);