'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {},
            logged: false
        };
    
        chatData.setChatData = function (key, value) {
            chatData[key] = value;
        };
    
        return chatData;

    });