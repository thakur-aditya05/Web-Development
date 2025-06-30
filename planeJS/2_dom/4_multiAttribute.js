let img = document.querySelector('img');

img.classList; // to see all classes 
// -------------------------------------------------




// -------------------------------------------------
let heading = document.querySelector('h1');
heading.classList.add('green');   // adding class to  thsi 
heading.classList.remove('green');
heading.setAttribute('class', 'green') ; // saari class htt jaynegi sirf ye add ho jayega 
// -------------------------------------------------





// -------------------------------------------------
let box = document.querySelector(".box");
box.classList; // return array 
box.classList.add("yellowBg");   // css style baad me add kr skte hai 
// good way  to add css style 


// -------------------------------------------------









// -------------------------------------------------
// navigation ; kisi elemnt tk pahuchne ke liye hota hai 
{/* <div>
    <h1></h1>
    <p></p>
</div> */}
// to find out parent element 
let h4=document.querySelector('h4');
h4.parentElement; // to select the parent element 

h4.children // to select childeren of h4  /// which is empty collection 


let box1  = document.querySelector('.box');
box1.children;  // select the chiild element 

box.childElementCount;

let ul=document.querySelector("ul");
ul.parentElement;
ul.childElementCount;
ul.children;




ul.children[0].previousElementSibling;
ul.children[0].nextElementSibling;


let img3=document.querySelector('img');
img.previousElementSibling;

img.previousElementSibling.Style;
img.previousElementSibling.Style="green"; 

// -------------------------------------------------


