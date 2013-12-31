'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
  ]).
config(['$routeProvider','$sceDelegateProvider', function($routeProvider,$sceDelegateProvider) {

  $routeProvider
  .when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'})
  .otherwise({redirectTo: '/'});

    $sceDelegateProvider.resourceUrlWhitelist([ // (Security since Angular1.2.0)
        // Allow same origin resource loads.
        'self',
        // Allow youtube
        'http://www.youtube.com/embed/*'
    ]);


}]);

