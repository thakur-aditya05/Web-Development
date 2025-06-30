document.createElement('p'); // to just the create element

let newP=document.createElement('p');
console.dir(newP);
newP.innerText="Hi i am a new p ";
console.dir(newP);


// lets insert newP as the body child arguemnt 
let body = document.querySelector('body');
body.appendChild(newP); // append means insert in the last 



let btn=document.createElement('button');
btn.innerText='click me';
box.appendChild('btn');


// ----------------------------------------------------------
// append is used to append text 
newP.append("this is new text")
newP.append(btn);  // para ke under btn add ho gaya 
newP.append("text after the button ");
// -----------------------------------------------------------

// -----------------------------------------------------------
// prepand add everything at very start 
box.prepend(newP);

// -----------------------------------------------------------



// -----------------------------------------------------------
// kaha add krna hai exactly bs ye decide issme krna hota hai 
// insertAdjacentElement
// Insert the new element after the paragraph
const para = document.getElementById("para");

const newElement = document.createElement("div");
newElement.textContent = "I am a new div element.";

para.insertAdjacentElement("afterend", newElement);

// Other positions you can try:
// "beforebegin" – before para
// "afterbegin"  – inside para, before its first child
// "beforeend"   – inside para, after its last child
// "afterend"    – after para
// -----------------------------------------------------------
