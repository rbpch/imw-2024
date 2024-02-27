// CONSOLE
console.log("Hello it's me");

/*INTERACTION*/
const greenCircle = document.getElementById("green");
const plumCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");

let interaction = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function () {
    console.log(interactionContainer);
    interactionContainer.style.backgroundColor = "lightgreen" /*hex code etc. okie*/
})

plumCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "plum"
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightblue"
})

/*LOOP*/
const loop = document.getElementById("loopContainer");
let message = "on and on and on and on and on and on and on and on and on and";

for (let i = 0; i < 10; i++) {
    console.log("on and");
    const textDiv = document.createElement("div");
    // const textMessage = document.createTextNode(message);
    textDiv.innerHTML = message;
    loop.appendChild(textDiv);
}

// Condition
const condition = document.getElementById("conditionContainer");
const square = document.getElementById("square");

condition.addEventListener("mouseover", function () {
    console.log("condition try try")
    square.style.backgroundColor = "green"
})

condition.addEventListener("mouseout", function () {
    console.log("condition try try")
    square.style.backgroundColor = "lightsalmon"
})

// Time

const time = document.getElementById("increaseText");
// const increase = document.getElementById("");

let fontSize = 20;
const max = 50;
const interval = 1500; // milliseconds
const fontSizeIncrement = 2;

function increaseFontSize() {
    if (fontSize < max) {
        fontSize += fontSizeIncrement;
        time.style.fontSize = fontSize + "px";
    }
}

const fontSizeInterval = setInterval(increaseFontSize, interval);

condition.addEventListener("timeupdate", function () {
    console.log("time try try")
})

// Input
const form = document.getElementById("form")
const Input = document.getElementById("inputText");
const length = document.getElementById("text-length");
const submit = document.getElementById("submit");

form.addEventListener('submit', function (event) {
    const inputText = Input.value;
    const count = inputText.length;
    length.textContent = count;

    event.preventDefault();
});
