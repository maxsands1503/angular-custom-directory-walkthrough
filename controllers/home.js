
(function(){
  angular
    .module('custom')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location'];

    function homeController($scope, $location){
      console.log('homeController');

    }
})();
