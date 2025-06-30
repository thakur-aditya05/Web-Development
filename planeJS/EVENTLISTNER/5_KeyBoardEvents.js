let btn = document.querySelector("button");

// all they are mouse events and ther "event" argument will represent pointer or cursor object 

btn.addEventListener("click",function(event){   // event is deafult argument which is point to cursor or pointer object 
    console.log(event);
    console.log("button was clicked");

});

btn.addEventListener("dblclick",function(event){
        console.log(event);
    console.log("button was clicked");
});





// ---------------------------------------------------------------------------------------
// keybord events 
// for any keyboard activity there  are two special things to focus CODE in keyboard_object and KEY in keyboard_object 
// key gives press button value (screen visible hone wali cheez)
// code will give CODE of PArticulaer key 

// game create krte time game track krta hai ki kon si key presssed ho rahi hai
let inp=document.querySelector("input");

inp.addEventListener("keydown",function (event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key was pressed");
});

// ArrowDown , ArrowLeft, ArrowRight ArrowUp 
inp.addEventListener("keydown", function (event) {
  console.log("code = ", event.code);  // Logs which key was pressed

    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
        console.log("character moves backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }
});

