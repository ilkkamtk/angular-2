'use strict';

angular
  .module('chatApp')
    .directive('getAllMessages', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getAllMessages.html'
        };
});