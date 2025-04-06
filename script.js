// This function adds numbers or symbols to the calculator screen
function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value = display.value + value;
}

// This function calculates the final answer when "=" is clicked
function calculateResult() {
    var display = document.getElementById("display");
    var expression = display.value;

    // Change special symbols into something JavaScript understands
    expression = expression.replace(/√\(/g, "Math.sqrt("); // Square root
    expression = expression.replace(/\^2/g, "**2");         // Square
    expression = expression.replace(/≈/g, "Math.round");    // Approximate
    expression = expression.replace(/÷/g, "/");             // Division

    // Try to solve the math expression
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// This clears everything on the display
function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

// This changes a number to positive or negative
function toggleSign() {
    var display = document.getElementById("display");

    if (display.value !== "") {
        var number = parseFloat(display.value);
        display.value = number * -1;
    }
}

// This controls if the bracket is opening or closing
var openBracket = true;

function appendBracket() {
    var display = document.getElementById("display");

    if (openBracket) {
        display.value = display.value + "(";
    } else {
        display.value = display.value + ")";
    }

    openBracket = !openBracket; // Switch to the opposite bracket next time
}

// This shows or hides the converter menu when the button is clicked
var converterButton = document.getElementById("converter-btn");
converterButton.addEventListener("click", function () {
    var menu = document.getElementById("converter-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// This shows a message when the clock button is clicked
var clockButton = document.getElementById("clock-btn");
clockButton.addEventListener("click", function () {
    alert("Clock Button Clicked!");
});

// This shows a message when the ruler button is clicked
var rulerButton = document.getElementById("ruler-btn");
rulerButton.addEventListener("click", function () {
    alert("Ruler Button Clicked!");
});

// This deletes one character at a time (like backspace)
var clearOneButton = document.getElementById("clear-btn");
clearOneButton.addEventListener("click", function () {
    var display = document.getElementById("display");
    var currentValue = display.value;

    // Remove the last character from the screen
    display.value = currentValue.slice(0, currentValue.length - 1);
});
