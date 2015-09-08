define([],function(){
  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });

    $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html', 
      controller: 'userlistCtrl'
    })
    .when('/fight',{
      templateUrl:'templates/fight.html', controller:'fightCtrl'})
    .otherwise({redirectTo: '/'});
  }

  config.$inject=['$routeProvider','$locationProvider'];
 
  return config;
});
