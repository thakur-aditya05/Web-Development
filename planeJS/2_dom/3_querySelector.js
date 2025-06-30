document.querySelector() // isske under bada sa .className:nth-of-type(2*n+1) itna bada selector likhna bhi possible hai 


// single para will get selected 
console.dir(document.querySelector("p"));

// all para will get selected
console.dir(document.querySelectorAll("p"));

// single description will get selected 
console.dir(document.querySelector("#description"));

// all description will get selected
console.dir(document.querySelectorAll("#description"));

// single anchor  tag get selected 
console.dir(document.querySelector("div a"));


// all  anchor  tag get selected 
console.dir(document.querySelectorAll("div a"));

// --------------------------------------------

// --------------------------------------------
// now lets talk about how to manuplate dom element 

// innerText  
let para=document.querySelector("p");
console.dir(para);
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);  

para.innerText = "New plain text!";
para.innerHTML = "<strong>New</strong> <em>formatted</em> text!";
para.textContent =  "New plain text!";

let heading = document .querySelector('h1');
heading.innerHTML="<u>scg</u>"
heading.innerHTML=`<u>${heading.innerText}</u`

// --------------------------------------------






// --------------------------------------------
// id, class, style, imag(ka)src, imag(ka)alt they all are attribute 
// obj.getAttribute(attr)  function to get attribute and
// obj.setAttribute(attr,val)  function to set attribute 


let img=document.querySelector('img');
console.dir(img)


img.getAttribute('id');
img.setAttribute('id','spidermanImg');


img.setAttribute('src','wdqw.jpg');

// --------------------------------------------





// --------------------------------------------
// lets mnuplating sytyle 
let img1=document.querySelector('img');
console.dir(img)

console.log(img.style)

let heading = document.querySelector('h1');
heading.style;

heading.style.textDecorationColor='blue';

// ###################################lets do an activity 
let links=document.querySelectorAll("#box a");
for(let i=0; i<links.length;i++){
    links[i].style.color="green0";
}



// --------------------------------------------
