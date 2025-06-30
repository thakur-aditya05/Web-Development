// body{
//     text-align:center;
// }
// div{
//     height:100px;
//     width:500px;
//     border:1px solid black;
//     margin:auto;
// }


// rgb value (0-255,0-255,0-255);  randome number between 0-255


let btn =document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("btn was clicked ");
// }) 


function getRandomColor(){
    let red=  Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click",function(){
    
    // setting randome color value to headding 
    let h3 = document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;

    // changing div color 
    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;

    console.log("color updated");

}) 

