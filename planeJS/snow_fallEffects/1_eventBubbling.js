// jb jb nested element create krte hai to usko event bubbling hoti hai 

// teeno element select kiya 
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");


// 
div.addEventListener("click",function(){
    console.log("div was clicked");
});

// ul 
ul.addEventListener("click",function(){
    console.log("ul was clicked");
})

// selecting listing element
for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    });
}

// if only outer container was clicked then only "div was clicked" printed
// if ul was selected then ul and div event Listner  get activated for example {(ul was clicked)(div was clicked)}  both printed 
// if any of li was selected then {(li was clicked)(ul was clicked)(div was clicked)} whole printed 


// isska matlab normal behaviour me  hmm nested element ko click krne pr parent element bhi select ho jata hai 



// ---------------------------------------------------------------
// stop propogation 

let div1 = document.querySelector("div");
let ul1 = document.querySelector("ul");
let lis1 = document.querySelector("li");

div1.addEventListener("click",function(){
    event.stopPropagation();
    console.log("div was clicked");
});

// ul 
ul1.addEventListener("click",function(){
    event.stopPropagation();
    console.log("ul was clicked");
})

// selecting listing element
for(li of lis1){
    li.addEventListener("click",function(){
        event.stopPropagation();
        console.log("li was clicked");
    });
}
// ---------------------------------------------------------------