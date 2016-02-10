'use strict';

angular
  .module('chatApp')
    .directive('imageModal', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/imageModal.html'
        };
});