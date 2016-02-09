'use strict';

angular
  .module('chatApp')
    .directive('signUp', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/signup.html'
        };
});