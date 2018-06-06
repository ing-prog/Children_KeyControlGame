"use strict";

window.onload = function() {
    // get elements from web page
    let startGameBtn = document.getElementById("startGameBtn");
    let gameContentBox = document.getElementById("gameContentBox");
    let keyLabel = document.getElementById("keyLabel");
    let timeLabel = document.getElementById("timeLabel");
    let scoreLabel = document.getElementById("scoreLabel");

    // start score value
    let score = 0;

    // was button clicked
    let buttonPressed = false;

    // time of game
    let nowTime = 0;
    // max time of game
    let maxTime = 30;

    // button click
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
                // add time
                nowTime++;
                // print time
                timeLabel.innerHTML = "Осталось: " + (maxTime - nowTime);

                // if time is empty
                if(nowTime === maxTime) {
                    // clear timers
                    clearInterval(gameInterval);
                    clearInterval(secondsInterval);
                }
            }, 1000);
        }
    };

    // code A key
    let a = 65;
    // code Z key
    let z = 90;
    let gameKeyNumber = -1;
    let pressedOK = true;

    // game function
    function gameProcess() {
        // if key before was pushed OK
        if(pressedOK === true) {
            // change value
            pressedOK = false;
            // get random from 65 to 90
            let keyRandomValue = parseInt(Math.random() * 10000) % (z - a) + a;
            // init normal key number
            gameKeyNumber = keyRandomValue;
            // get char by key number
            let char = String.fromCharCode(keyRandomValue);
            // print char
            keyLabel.innerHTML = char;
            // debug print
            console.log("Generate char: " + char);
        }
    }

    // add key down event
    window.onkeydown = function(event) {
        // get number of key
        let keyNumber = event.keyCode;
        // if key correct
        if(keyNumber === gameKeyNumber) {
            // set pressed OK
            pressedOK = true;
            // add score
            score++;
            // print score
            scoreLabel.innerHTML = score;
        }
    };
};
