'use strict';

angular
  .module('chatApp')
    .directive('deleteMessage', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/deletemessage.html'
        };
});