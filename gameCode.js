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

    let a = 65;
    let z = 90;
    let gameKeyNumber = -1;
    let pressedOK = true;

    // game function
    function gameProcess() {
        if(pressedOK === true) {
            pressedOK = false;
            let keyRandomValue = parseInt(Math.random() * 10000) % (z - a) + a;
            gameKeyNumber = keyRandomValue;
            let char = String.fromCharCode(keyRandomValue);
            keyLabel.innerHTML = char;
            console.log("Generate char: " + char);
        }
    }

    // add key down event
    window.onkeydown = function(event) {
        let keyNumber = event.keyCode;
        if(keyNumber === gameKeyNumber) {
            pressedOK = true;
        }
    };
};
