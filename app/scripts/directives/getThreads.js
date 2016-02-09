'use strict';

angular
  .module('chatApp')
    .directive('getThreads', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getthreads.html'
        };
});