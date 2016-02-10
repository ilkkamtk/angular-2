'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {},
            logged: false,
            message: {}
        };
    
        chatData.setChatData = function (key, value) {
            chatData[key] = value;
        };
    
        chatData.reply = function (msg) {
            console.log(msg);
        };
    
        return chatData;

    });