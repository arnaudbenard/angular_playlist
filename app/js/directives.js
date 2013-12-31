'use strict';

/* Directives */


angular.module('myApp.directives', [])

.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
  };
}])


.directive('player', [function(){
      // Runs during compile
      return {
          scope: { code:'@' }, // {} = isolate, true = child, false/undefined = no change
          restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
          template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{code}}" frameborder="0" allowfullscreen></iframe></div>'

      };
  }]);
