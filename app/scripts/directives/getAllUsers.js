'use strict';

angular
  .module('chatApp')
    .directive('getAllUsers', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getallusers.html'
        };
});