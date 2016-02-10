'use strict';

angular.module('chatApp')
    .controller('ReplyMessageCtrl', function ($scope, AjaxFactory, ChatService) {
        console.log('ReplyMessageCtrl');
        $scope.reply = function () {
            // data lomakkeesta
            var data = {
                parent: ChatService.message.mID,
                message: $scope.message,
                uID:  ChatService.user.uID
            };
            console.log(data);
            // kutsu replyMessage-funktiota AjaxFactorystä
            var request = AjaxFactory.reply(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                angular.element('#replyModal').modal('hide');
                $scope.message = '';
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });