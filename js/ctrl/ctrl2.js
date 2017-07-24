var app = angular.module('mod');

app.controller('ctrl2', function($scope, $location, redditFactory) {

  $scope.posts = redditFactory.getJSON();
  $scope.subHead = redditFactory.subHead();

  $scope.searchSubReddit = function(subReddit) {
    redditFactory.setJSON(subReddit).then(function() {
      $location.path('/reddit');
    })
  };

});
