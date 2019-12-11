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
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
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
        if (input === null) {
            input = "";
            endLoop = true;
        }
        else if (input.length > 50) {
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
            width = null;
            height = null;
            x = null;
            y = null;
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
    let doDraw = true;
    let colorLowerCase;
    while (endLoop === false) {
        color = window.prompt("Color:");
        if (color === null) {
            doDraw = false;
            endLoop = true;
        }
        else {
            colorLowerCase = color.toLowerCase();
            if (colorLowerCase === "black" || colorLowerCase === "blue" || colorLowerCase === "green" || colorLowerCase === "orange" || colorLowerCase === "purple" || colorLowerCase === "red" || colorLowerCase === "yellow") {
                endLoop = true;
            }
            else {
                window.alert(color + " is not a supported color.")
            }
        }
    }
    if (doDraw) {
        ctx.fillStyle = colorLowerCase;
        ctx.fillRect(10, 10, 100, 50);
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    const canvas = document.getElementById("student-canvas-4");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let array = [null, null, null];
    let height;
    let hypotenuse;
    let base;
    let endLoop = false;
    while (endLoop === false) {
        array[0] = window.prompt("Side 1:");
        array[1] = window.prompt("Side 2:");
        array[2] = window.prompt("Side 3:");
        if (array[0] === null || array[1] === null || array[2] === null) {
            endLoop = true;
        }
        array[0] = Number(array[0]);
        array[1] = Number(array[1]);
        array[2] = Number(array[2]);
        array.sort();
        height = array[0];
        base = array[1];
        hypotenuse = array[2];
        if (Number.isNaN(height) || Number.isNaN(base) || Number.isNaN(hypotenuse)) {
            window.alert("One of your sides is not a number.");
        }
        else if ((25 + height) > canvas.height || (25 + base) > canvas.width) {
            window.alert("Your triangle won't fit on the canvas.")
        }
        else if (Math.pow(height, 2) + Math.pow(base, 2) == Math.pow(hypotenuse, 2)) {
            endLoop = true;
        }
    }
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, 25 + height);
    ctx.lineTo(25 + base, 25 + height);
    ctx.lineTo(25, 25);
    ctx.stroke();
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    const canvas = document.getElementById("student-canvas-5");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let radius;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let endLoop = false;
    while (endLoop === false) {
        radius = window.prompt("Radius:");
        let notANumberCheck = Number(radius);
        if (radius === null) {
            endLoop = true;
        }
        else if (Number.isNaN(notANumberCheck)) {
            window.alert("Your radius is not a number.");
        }
        else if (Number(radius < 32)) {
            window.alert("Your radius must be at least 32.");
        }
        else if (Number(radius) + centerX > canvas.width || Number(radius) + centerY > canvas.height) {
            window.alert("Your smiley face won't fit on the canvas.");
        }
        else {
            endLoop = true;
        }
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX - (0.4 * radius), centerY - (0.4 * radius), 0.15 * radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX + (0.4 * radius), centerY - (0.4 * radius), 0.15 * radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 0.7 * radius, 0, Math.PI);
    ctx.stroke();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
