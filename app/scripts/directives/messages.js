'use strict';

angular
  .module('chatApp')
    .directive('messages', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                collection: '='
            },
            templateUrl: 'views/messages.html'
        };
});