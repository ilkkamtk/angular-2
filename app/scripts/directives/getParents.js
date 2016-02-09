'use strict';

angular
  .module('chatApp')
    .directive('getParents', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getparents.html'
        };
});