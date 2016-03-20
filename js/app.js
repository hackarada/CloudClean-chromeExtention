var app= angular.module("CleanCloud",["ngRoute"]);

.config(function($routeProvider) {
  $routeProvider
   .when('/Home/', {
    templateUrl: 'Index.html',
    //controller: 'BookController',
  })
  .when('/Login/', {
    templateUrl: 'login.html',
    //controller: 'ChapterController'
  })
  .Otherwise({
      redirectTo:"/register.htm",
  })
});
  // configure html5 to get links working on jsfiddle
  