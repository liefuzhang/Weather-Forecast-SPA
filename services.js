weatherApp.service("cityService", function() {
  this.city = "";
});

weatherApp.service("weatherService", ["$resource", function($resource) {
  this.GetWeather = function(city, days) {
    var weatherAPI = $resource(
      "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3ba8d599d762cb632daacd86b2cabddd",
      {
        callback: "JSON_CALLBACK"
      },
      { get: { method: "JSONP" } }
    );

    return weatherAPI.get({
      q: city,
      cnt: days
    });
  };
}]);
