// if we want to track small small changes then we use 
// "input" function

// --------------------------------------------------------------------------
{/* <body>
    <h1>My Text Editor</h1>
    <p></p>
    <input type="text" placeholder="type something" id="text" />
</body> */}


// access input button so that we can extract value of input button 
let inp=document.querySelector("#text");

// access 'p' so that its innertext value can be feated 
let p =document.querySelector("p");

// now lets tracks input event listner  
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
});

