"use strict";

window.onload = function() {
    // get elements from web page
    let startGameBtn = document.getElementById("startGameBtn");
    let gameContentBox = document.getElementById("gameContentBox");
    let keyLabel = document.getElementById("keyLabel");

    // was button clicked
    let buttonPressed = false;

    // start repeating function
    startGameBtn.onclick = function() {
        if(buttonPressed === false) {
            buttonPressed = true;
            startGameBtn.hidden = true;
            gameContentBox.hidden = false;
            let gameInterval = setInterval(function() {
                gameProcess();
            }, 50);
        }
    };

    // game function
    function gameProcess() {

    }

    // add key down event
    window.onkeydown = function(event) {

    };

    // add key up event
    window.onkeyup = function(event) {

    };
};
