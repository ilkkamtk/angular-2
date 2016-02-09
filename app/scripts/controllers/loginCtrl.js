'use strict';

angular.module('chatApp')
    .controller('LoginCtrl', function ($scope, $state, AjaxFactory, ChatService) {

        var data = null;



        $scope.logToChat = function () {


            // data lomakkeesta
            if (data === null) {
                data = {
                    name: $scope.name
                };
            }
            // kutsu login-funktiota AjaxFactorystä

            console.log(data);
            var request = AjaxFactory.login(data);
            request.then(function (response) {
                // tee vastauksella jotain
                ChatService.setChatData('user', response.data);
                ChatService.setChatData('logged', true);
                window.localStorage.setItem('userName', response.data.name);
                $state.go('main');
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
        
        if (window.localStorage.getItem('userName') !== null) {
            data = {
                name: window.localStorage.getItem('userName')
            };
            $scope.logToChat();
        }
    });