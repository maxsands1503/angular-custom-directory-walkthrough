# Angular Custom Directory Walkthrough
## Objective:
This is a walkthrough is to help guide you through the construction of a custom directive in Angular
###The Set Up
The initial set up for this is very easy. We do not have to install anything through npm, as there is not going to be a backend. We are simply going to be creating a file structure, the files we will need and adding the proper script tags to the index.html document.


###The fie structure
In our root directory we are going to have five directories and our index.html. In our 'components' subdirectory well have another directory called 'myDirective', which will have three javascript files, 'custom-directive.js', 'directive-services.js' and 'directive.js'. In our 'controllers' directory we will have one javascript file, 'home.js'. In our 'js' directory we will have our 'app.js'. In our 'templates' subdirectory we will have 'home.html'. In our 'css' directory we will have 'style.css'.
- root  
  1. components    
    * custom-directive.js  
    * directive-services.js  
    * directive.js
  2. controllers  
    * homeController.js  
  3. js  
    * app.js  
  4. templates  
    * home.html  
  5. css  
    * style.css  
  6. index.html

###index.html
Inside of our index's head tags we are going to include script tags for Bootstrap js and jQuery, we will have link tags for Bootstrap css and style.css.

```
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="/css/style.css" media="screen" charset="utf-8">
```
Before the closing body tag, we will have our script tags for Angular 1.5.5, angular-ui-router, app.js, homeController.js, custom-directive.js, directive.js and directive-services.js.  

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>

<script type="text/javascript" src="/js/app.js"></script>

<script type="text/javascript" src="controllers/homeController.js">
</script>
<!--
aboutMe  -->
<script type="text/javascript" src="/components/myDirective/directive.js"></script>

<script type="text/javascript" src="/components/myDirective/custom-directive.js"></script>
<script type="text/javascript" src="/components/myDirective/directive-services.js"></script>
```
##App.js

We start by creating an IIFE (Immediately Invoked Function Expression), inside of which we set our `angular.module()`, we pass in the name of our app and the directives we will be using, in this case it is 'ui.router' and 'custom.directive'.  

Then, still inside of the IIFE, we do a '.config', which we pass '$stateProvider', '$urlRouterProvider' and '$locationProvider' as arguments. These are all components of ui-router.   

The first line inside of the '.config' will be our `$urlRouterProvider.otherwise()`, which will pass the value of root, '/', which will default our app to the root route when an non-existent route is selected.   

We will then set up our other route, which in this case will be the home route. We start by adding '$stateProvider', underneath we do '.state', where will pass in the name of the route, 'home', the url, '/', the templateUrl, '/templates/home.html' and the controller, 'homeController'.

Your final app.js should look like this:   
```
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

```
##Setting up the controller  

We will now set up 'home.js'. We start by adding a IIFE (we love IIFEs). We will place inside of it 'angular.module' statement, which we again pass the name of our app, which is still 'custom'. Beneath the '.module' we will place a '.controller', where we will pass in the name of 'homeController' as a string and after as a variable. We will then inject '$scope' and '$location' into 'homeController'. We have a test function at the bottom, just to ensure everything is working properly, it is not necessary.

Your final 'home.js' should look like this.  

```
(function(){
  angular
    .module('custom')
    .controller('homeController', homeController);

    homeController.$inject= ['$scope', '$location'];

    function homeController($scope, $location){
      console.log('homeController');

    }
})();
```
