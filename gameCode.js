"use strict";

window.onload = function() {
    // get elements from web page
    let startGameBtn = document.getElementById("startGameBtn");
    let gameContentBox = document.getElementById("gameContentBox");
    let keyLabel = document.getElementById("keyLabel");
    let timeLabel = document.getElementById("timeLabel");

    // was button clicked
    let buttonPressed = false;

    // time of game
    let nowTime = 0;
    // max time of game
    let maxTime = 30;

    // start repeating function
    startGameBtn.onclick = function() {
        // if user did not push button before
        if(buttonPressed === false) {
            // make button pushed
            buttonPressed = true;

            // hide button
            startGameBtn.hidden = true;
            // show game box
            gameContentBox.hidden = false;

            // start game interval
            let gameInterval = setInterval(function() {
                gameProcess();
            }, 50);

            // start seconds interval count
            let secondsInterval = setInterval(function() {
                nowTime++;
                timeLabel.innerHTML = "Осталось: " + (maxTime - nowTime);
                if(nowTime === maxTime) {
                    // clear timers
                    clearInterval(gameInterval);
                    clearInterval(secondsInterval);
                }
            }, 1000);
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
