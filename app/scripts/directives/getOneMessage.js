'use strict';

angular
  .module('chatApp')
    .directive('getOneMessage', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/getonemessage.html'
        };
});