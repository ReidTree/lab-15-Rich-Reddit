var app = angular.module('mod');

app.factory('redditFactory', function($http) {

  var posts = [];
  var subtitle = [];

  return {
    subHead: subHead,
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
