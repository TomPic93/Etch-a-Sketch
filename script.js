const colorInput = document.querySelector("#color-input");
const brushButtons = document.querySelectorAll(".brushButton");
const clear = document.querySelector("#clear");
const canvasSizeInput = document.querySelector("#size-input")
const canvasSizeValue = document.querySelector("#size-value")
const canvasContainer = document.querySelector("#canvas-container");

// the color brush is the default brush style when the page is loaded
let brush = "color-brush";
brushButtons[0].classList.add("selected")

// creates a click & drag brush style
let mouseIsDown = false;
document.body.addEventListener("mousedown", () => mouseIsDown = true)
document.body.addEventListener("mouseup", () => mouseIsDown = false)

// creates the initial canvas (10x10)
for (i = 100; i > 0; i--) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("style", `width: ${500 / 10}px; height: ${500 / 10}px`)
    canvasContainer.appendChild(newDiv);
};

canvasSizeInput.addEventListener("input", createCanvas)
brushButtons.forEach(btn => btn.addEventListener("click", brushStyle))
clear.addEventListener("click", clearCanvas)
canvasContainer.addEventListener("mouseover", paint)

// Game functions ---------------------------------------------------------------

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

// Changes the brush style (color-brush / rainbow-brush / eraser)
function brushStyle(e) {
    // brush style is stored as button's ID
    brush = e.target.id
    // selects the clicked button (just graphic)
   brushButtons.forEach(button => button.classList.remove("selected"))
    e.target.classList.add("selected")
};

// Change the single div color inside the canvas based on the brush style
function paint() {
    canvasContainer.childNodes.forEach(div => div.addEventListener('mouseover', (e) => {
        if (mouseIsDown) {
            if (brush == "color-brush") e.target.style.backgroundColor = colorInput.value
            if (brush == "rainbow-brush") e.target.style.backgroundColor = randomColor()
            if (brush == "eraser") e.target.style.backgroundColor = "white"
        }
    }))
};

// return a radom color in rgb format
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// Clears the canvas
function clearCanvas() {
    canvasContainer.childNodes.forEach(div => div.style.backgroundColor = "white")
};