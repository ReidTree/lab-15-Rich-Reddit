var app = angular.module('mod');

app.controller('ctrl', function($scope, $location, redditFactory) {

  $scope.subList = redditFactory.popularSub;

  $scope.searchSubReddit = function(subReddit) {
    redditFactory.setJSON(subReddit).then(function() {
      $location.path('/reddit');
    })
  };


});
