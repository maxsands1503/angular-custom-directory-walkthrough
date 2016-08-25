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
