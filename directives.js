
weatherApp.directive("temperature", function() {
    return {
      restrict: "E",
      templateUrl: "directives/temperature.html",
      replace: true,
      scope: {
        date: "@",
        temp: "@"
      }
    };
  });
  