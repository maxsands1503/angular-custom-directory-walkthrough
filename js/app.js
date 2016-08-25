(function(){
  angular
    .module('custom',[
     'ui.router',
     'custom.directive'
   ])
      .config(function($stateProvider, $urlRouterProvider, $locationProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: '/templates/home.html',
          controller: 'homeController'
        });
      });
})();
