'use strict';

angular
  .module('chatApp')
    .directive('replyMessage', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/replymessage.html'
        };
});