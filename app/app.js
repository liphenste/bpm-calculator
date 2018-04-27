var bpmApp = angular.module('bpmApp', ['ngRoute']);

bpmApp.controller('bpmCtrl', function ($scope) {
  $scope.times = [];
  $scope.MAX_LEN = 4;
  $scope.SpMS = 1 / 1000; //seconds per ms
  $scope.MpS = 1 / 60; //min per sec
  $scope.bpm = 0;

  $scope.set_bpm = function() {
    $scope.times.push(performance.now()); //measures time
    var len = $scope.times.length;
    if (len == 1) {
      $scope.bpm = 0;
      document.getElementById("firstClick").innerHTML = "(first click!)";
    } else {
      document.getElementById("firstClick").innerHTML = "";
    $scope.bpm = Math.round(len / 
      (($scope.times[len-1] - $scope.times[0]) * $scope.SpMS * $scope.MpS));
    }
    if (len > $scope.MAX_LEN) $scope.times.shift(); //removes first time from times (dynamic array)
  };

  $scope.reset_bpm = function() {
    $scope.times = [];
    $scope.bpm = 0;
  }
});