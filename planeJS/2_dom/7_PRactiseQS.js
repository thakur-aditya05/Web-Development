// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a <p> with red text that says “Hey I’m red!”
// ii) an <h3> with blue text that says “I’m a blue h3!”
// iii) a <div> with a black border and pink background color with the following elements inside of it:
        // another <h1> that says “I’m in a div”
        // a <p> that says “ME TOO!”


// ----------------------------------------------------------------
// .red { color: red; }
// .blue { color: blue; }
// .box { border: 1px solid black; background-color: pink; padding: 10px; }
// ---------------------------------------------------------------------------




let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

// Creates a <p> with text.
// Appends it to the body.
// Adds class red (assumed styled in CSS).

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

// Creates an <h3> with blue text.
// Adds class blue.

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
// Creates a <div> with a nested <h1> and <p>.
// Adds class box for border/background styling.
// Appends the whole div to the body.

