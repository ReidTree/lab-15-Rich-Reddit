var app = angular.module('mod');

app.factory('redditFactory', function($http) {

  var posts = [];
  var subtitle = [];
  var popularSub = [{sub: 'all'}, {sub: 'popular'}, {sub: 'funny'}, {sub: 'pics'}, {sub: 'askreddit'}, {sub: 'aww'}, {sub: 'news'}];

  return {
    subHead: subHead,
    popularSub: popularSub,
    setJSON: setJSON,
    getJSON: getJSON
  };

  function setJSON(subReddit) {
    posts = [];
    subtitle = [];
    var promise = $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + subReddit + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      posts = response.data.data.children;
      subtitle = subReddit;
      return posts;
    });
    return promise;
  };

  function getJSON() {
    return posts;
  };
  function subHead() {
    return subtitle;
  }

});
