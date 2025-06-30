// .box{
//     height:100px;
//     width:100px;
//     background-color: pink;
//     border:1px solid black;
// }

let p= document.querySelector("p");

p.addEventListener("click",function(){
    console.log("para was clicked ")

});

let box=document.querySelector('.box');
box.addEventListener("mouseenter",function(){
    console.log("mouse inside div")
});