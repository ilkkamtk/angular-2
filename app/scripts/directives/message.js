'use strict';

angular
  .module('chatApp')
    .directive('message', function ($compile, ChatService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			message: '='
		},
		templateUrl: 'views/message.html',
		link: function (scope, element) {
            scope.userID = ChatService.user.uID;
            var collectionSt = '<messages collection="message.children"></messages>';
			if (angular.isArray(scope.message.children)) { 
                $compile(collectionSt)(scope, function(cloned)   {
  	  	     	  	element.find('.media-body').append(cloned); 
  	  	  	  	  });
			}
		}
	};
});