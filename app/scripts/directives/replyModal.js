'use strict';

angular
  .module('chatApp')
    .directive('replyModal', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/replyModal.html',
            controller: 'ReplyMessageCtrl'
        };
});