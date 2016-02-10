'use strict';

angular
  .module('chatApp')
    .directive('modifyModal', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/modifyModal.html',
            controller: 'ModifyMessageCtrl'
        };
});