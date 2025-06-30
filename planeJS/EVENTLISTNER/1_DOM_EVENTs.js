// event, are the signal that crteated during clicking doubleClicking  and differnet things 


let btn = document.querySelector("button");

console.dir(btn);

btn.onclick=function(){
    alert("button was clicked");
}
    function sayHello(){
    console.log("say hello");
    }
btn.onclick= sayHello;

// -------------------------------------------------------
// for the large numbers of button 
let btns=document.querySelectorAll("buttton");
for(btn of btns ){
    btn.addEventListener("click",function(){
        console.log("you double clicked me ");
    })
}