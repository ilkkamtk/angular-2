'use strict';

angular
  .module('chatApp')
    .directive('getOneThread', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getonethread.html'
        };
});