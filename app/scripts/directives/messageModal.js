'use strict';

angular
  .module('chatApp')
    .directive('messageModal', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/messageModal.html',
            controller: 'SendMessageCtrl'
        };
});