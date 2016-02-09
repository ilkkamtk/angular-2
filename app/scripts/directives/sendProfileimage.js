'use strict';

angular
  .module('chatApp')
    .directive('sendProfileImage', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/sendprofileimage.html'
        };
});