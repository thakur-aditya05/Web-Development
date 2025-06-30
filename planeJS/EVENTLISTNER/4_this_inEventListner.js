// let aditya= addEventListener("_event_",this(in this case this means aditya ))


let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this) // print button objet
    console.log(this.innerText) // print button objet
    this.style.backgroundColor="blue"; // click hone wali button ka color hii blue kr do 


})

// ----------------------------------------------------------------

// ----------------------------------------------------------------
    // <h1>hi i am h1 </h1>
    // <h2>lets demo it on elements </h2>
    // <H3>thsi is h3 </H3>
    // <button>click me </button>

    let btn1 = document.querySelector("button");
    let p = document.querySelector("p");
    let h1 = document.querySelector("h1");
    let h3 = document.querySelector("h3");

    btn1.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
    });
    p.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
    });
    h1.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
    });
    h3.addEventListener("click",function(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
    });
// ----------------------------------------------------------------



// ----------------------------------------------------------------
    // <h1>hi i am h1 </h1>
    // <h2>lets demo it on elements </h2>
    // <H3>thsi is h3 </H3>
    // <button>click me </button>

    let btn2 = document.querySelector("button");
    let p1 = document.querySelector("p");
    let h11 = document.querySelector("h1");
    let h31 = document.querySelector("h3");

    function changeColor(){
        console.dir(this.innerText);
        this.style.backgroundColor="blue";
    };

// this ka matlab wahi hota jisne this ko calll kiya hota hai 
// jaise btn2,p1,h11,h3 innhone call kiya to inhe hi this print karega 

    btn2.addEventListener("click",changeColor);
    p1.addEventListener("click",changeColor);
    h11.addEventListener("click",changeColor);
    h31.addEventListener("click",changeColor);

// ----------------------------------------------------------------