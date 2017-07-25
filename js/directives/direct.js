var app = angular.module('mod');

app.directive('redditPost', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/redditPost.html'
  };

});

app.directive('thumbnailImg', function() {

  return {
    replace: false,
    restrict: 'E',
    template: '<img ng-src="{{ post.data.thumbnail }}"' +
    'style="width: {{ post.data.thumbnail_width }}px; height {{ post.data.thumbnail_height }}px;" alt="">'
  };
});

app.directive('popSub', function() {
  return {
    restrict: 'E',
    replace: false,
    template: '<p ng-click="searchSubReddit(s.sub)"><a href="">{{ s.sub }}</a></p>'
  };

});
