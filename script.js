// TODO
// css selected class for focus on clicked button

// Selectors 
const colorInput = document.querySelector("#color-input");

const brushButtons = document.querySelectorAll(".brushButton");
const colorBrush = document.querySelector("#color-brush");
const rainbowBrush = document.querySelector("#rainbow-brush");
const eraser = document.querySelector("#eraser");

const clear = document.querySelector("#clear");

const canvasSizeInput = document.querySelector("#size-input")
const canvasSizeValue = document.querySelector("#size-value")

const canvasContainer = document.querySelector("#canvas-container");

let brush = "";

etchASketch()

// test ---------------





// test ---------------


// Game functions

// Starts and coordinates the game, assigns event listeners and calls the other functions
function etchASketch() {
    // creates the initial canvas (10x10)
    for (i = 100; i > 0; i--) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("style", `width: ${500 / 10}px; height: ${500 / 10}px`)
        canvasContainer.appendChild(newDiv);
    };

    canvasSizeInput.addEventListener("input", createCanvas)
    brushButtons.forEach(btn => btn.addEventListener("click", brushStyle))
};

// Creates a canvas with side equal to the input provided
function createCanvas(e) {
    let userInput = e.target.value;
    // removes all the actual div children
    while (canvasContainer.lastElementChild) {
        canvasContainer.removeChild(canvasContainer.lastElementChild);
    };
    // adds new ones
    for (i = userInput * userInput ; i > 0; i--) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("style", `width: ${500 / userInput}px; height: ${500 / userInput}px`)
        canvasContainer.appendChild(newDiv);
    };
    // displays the canvas size
    canvasSizeValue.textContent = `${userInput} x ${userInput}`
};

// Changes the brush single color 
function changeColor () {

};

// Changes the brush style (color-brush / rainbow-brush / eraser)
function brushStyle(e) {
    brush = e.target.id
    // selects the clicked button (just graphic)
   brushButtons.forEach(button => button.classList.remove("selected"))
    e.target.classList.add("selected")
};

// Change the single div color inside the canvas based on the attribute defined by brushStyle
function paint () {

};

// Clears the canvas
function clearCanvas () {

};