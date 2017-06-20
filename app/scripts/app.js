(function() {
  function config($locationProvider, $stateProvider) {
       $locationProvider
           .html5Mode({
               enabled: true,
               requireBase: false
            });

       $stateProvider
           .state('home', {
               url: '/',
               controller: 'HomeCtrl as home',
               templateUrl: '/templates/home.html'
           });
       // 
      //  $stateProvider
      //      .state('room', {
      //         url: '/',
      //         controller: 'RoomCtrl as room',
      //         templateUrl: '/templates/room.html'
      //      });
   }





    angular
      .module('blocChat', ['ui.router', 'firebase'])
      .config(config);
})();
