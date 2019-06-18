var bpmApp = angular.module('bpmApp', ['ngRoute']);

bpmApp.controller('bpmCtrl', function ($scope) {
  $scope.times = [];
  $scope.MAX_LEN = 3;
  $scope.SpMS = 1 / 1000; //seconds per ms
  $scope.MpS = 1 / 60; //min per sec
  $scope.bpm = 0;

  $scope.RESET_TIME = 3000; //ms
  $scope.reset_timer = window.setTimeout($scope.reset_bpm, $scope.RESET_TIME);

  $scope.set_bpm = function() {
    $scope.times.push(performance.now()); //measures time
    var len = $scope.times.length;
    if (len == 1) {
      $scope.bpm = 0;
      document.getElementById("firstClick").innerHTML = "(first click!)";
    } else {
      document.getElementById("firstClick").innerHTML = "";
      $scope.bpm = Math.round((len - 1)/ 
        (($scope.times[len-1] - $scope.times[0]) * $scope.SpMS * $scope.MpS));
    }
    if (len > $scope.MAX_LEN) $scope.times.shift(); //removes first time from times (dynamic array)

    $scope.reset();
    //console.log($scope.times.toString());
  };

  $scope.reset_bpm = function() {
    $scope.times = [];
    $scope.bpm = 0;
    $scope.$apply(); //forces a digest cycle; need to figure out how to use $timeout..!
    //console.log($scope.times.toString() + " ;");
  }

  $scope.reset = function() {
    clearTimeout($scope.reset_timer);
    $scope.reset_timer = window.setTimeout($scope.reset_bpm, $scope.RESET_TIME);
    //console.log("resetted timer");
  }

  $scope.blur_method = function(buttonNumber) {
    document.getElementsByClassName("btn")[buttonNumber].blur();
    //console.log("called blur_method");
  }
});