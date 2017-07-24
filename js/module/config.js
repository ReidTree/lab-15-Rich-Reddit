var app = angular.module('mod');

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'ctrl',
      templateUrl: 'partials/home.html'
    })
    .when('/reddit', {
      controller: 'ctrl2',
      templateUrl: 'partials/reddit.html'
    })
    .otherwise({ redirectTo: '/home' })

});
