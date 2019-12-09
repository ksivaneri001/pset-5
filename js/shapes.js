window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    const canvas = document.getElementById("student-canvas-1");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let endLoop = false;
    let input;
    while (endLoop === false) {
        input = window.prompt("Message:");
        if (input.length > 50) {
            window.alert("Your message is too long. Keep it under 50 characters.");
        }
        else {
            endLoop = true;
        }
    }
    ctx.font = "48px sans-serif";
    ctx.strokeText(input, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    const canvas = document.getElementById("student-canvas-2");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let endLoop = false;
    let width;
    let height;
    let x;
    let y;
    while (endLoop === false) {
        width = window.prompt("Width:");
        height = window.prompt("Height:");
        x = window.prompt("X:");
        y = window.prompt("Y:");
        if (width === null || height === null || x === null || y === null) {
            endLoop = true;
        }
        else if (Number.isNaN(Number(width)) || Number.isNaN(Number(height)) || Number.isNaN(Number(x)) || Number.isNaN(Number(y))) {
            window.alert("One of your values is not a number.");
        }
        else if (Number(width) < 1 || Number(width) > canvas.width) {
            window.alert("Your width must be between 1 and 1024.");
        }
        else if (Number(height) < 1 || Number(height) > canvas.height) {
            window.alert("Your height must be between 1 and 512.");
        }
        else if (Number(x) < 1) {
            window.alert("Your x-coordinate must be between 1 and 1024.");
        }
        else if (Number(y) < 1) {
            window.alert("Your y-coordinate must be between 1 and 512.");
        }
        else if ((Number(x) + Number(width)) > canvas.width || (Number(y) + Number(height)) > canvas.height) {
            window.alert("Your rectangle won't fit on the canvas.");
        }
        else {
            endLoop = true;
        }
    }
    ctx.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    const canvas = document.getElementById("student-canvas-3");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let color;
    let endLoop = false;
    let colorLowerCase;
    while (endLoop === false) {
        color = window.prompt("Color:");
        colorLowerCase = color.toLowerCase();
        if (colorLowerCase === "black" || colorLowerCase === "blue" || colorLowerCase === "green" || colorLowerCase === "orange" || colorLowerCase === "purple" || colorLowerCase === "red" || colorLowerCase === "yellow") {
            endLoop = true;
        }
        else if (color === null) {
            endLoop = true;
        }
        else {
            window.alert(color + " is not a supported color.")
        }
    }
    ctx.fillStyle = colorLowerCase;
    ctx.fillRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

};

/*
 * Exercise 5.
 */

const drawFace = function() {

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
