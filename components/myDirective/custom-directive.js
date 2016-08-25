//make iife
(function(){
  //set up module for angular
  angular
    .module('custom.MyDirective.custom-directive', [])
    //make the directive name
    .directive('customDirective', customDirective);
    //make fuction to return the directive
    function customDirective(){
      var directive = {
        //restrict to a dom element
        restrict: 'E',
        //html that the directive will use
        templateUrl: '/templates/custom-directive.html',
        //makeing isolate scope for the directive
        scope: {},
        //adds a controller for the directive to use to pass scope around
        controller: directiveController,
        //pass the controller as for when the file is minify
        controllerAs: 'directiveController'
      };
      //return the directive that we made
      return directive;
}
directiveController.$inject = [];
function directiveController() {
console.log('hit');
}
})();
