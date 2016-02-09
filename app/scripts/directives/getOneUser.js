'use strict';

angular
  .module('chatApp')
    .directive('getOneUser', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getoneuser.html'
        };
});