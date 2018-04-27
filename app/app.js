var bpmApp = angular.module('bpmApp', ['ngRoute']);

bpmApp.controller('bpmCtrl', function ($scope) {
  $scope.times = [];
  $scope.MAX_LEN = 5;
  $scope.bpm = 0;

  $scope.set_bpm = function() {
    $scope.times.push(performance.now()); //measures time
    var len = $scope.times.length;
    if (len >= 2) {
      $scope.bpm = ($scope.times[len-1] - $scope.times[0]) / len;
    }
    if (len >= $scope.MAX_LEN) {
      times.shift(); //removes first time from times (dynamic array)
    }
  };
});
