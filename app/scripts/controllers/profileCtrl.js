'use strict';

angular.module('chatApp')
    .controller('ProfileCtrl', function ($scope, ChatService, AjaxFactory) {
        // jos käyttäjä lataa 'main' sivun uudestaan käyttäjätiedot tarttee hakea uudestaan
        if (ChatService.user.name === undefined) {
            var data = {
                name: window.localStorage.getItem('userName')
            };
            var request = AjaxFactory.login(data);
            request.then(function (response) {
                // tee vastauksella jotain
                ChatService.setChatData('user', response.data);
                ChatService.setChatData('logged', true);
                window.localStorage.setItem('userName', response.data.name);
                $scope.user = ChatService.user;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        } else {
            $scope.user = ChatService.user;
        }
    });