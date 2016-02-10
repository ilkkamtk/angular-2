'use strict';

angular.module('chatApp')
    .controller('ModifyMessageCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.$watch(function () {
            return ChatService.message;
        }, function (newValue) {
            $scope.msg = newValue.message;
        });

        $scope.modifyMessage = function () {
            // data lomakkeesta
            var data = {
                message: $scope.msg,
                mID: ChatService.message.mID
            };
            // kutsu modifyMessage-funktiota AjaxFactorystä
            var request = AjaxFactory.modifyMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                 angular.element('#modifyModal').modal('hide');
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });