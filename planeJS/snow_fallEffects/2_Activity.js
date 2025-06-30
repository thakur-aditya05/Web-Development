// lets make todo app 
// -------------------------------------------
    // <h1>Todo App</h1>
    // <input placeholder="enter your task" />
    // <button>add task</button>
    // <ul>
    //     <li>Eat</li>
    //     <li>Sleep</li>
    // </ul>
// ---


// lets select the btn 
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");  // created list element 
    item.innerText = inp.value;  //     
    ul.appendChild(item); 
    inp.value="";  // this makes input box empty affter cliking 
});


// to give delete button to every added task 
btn.addEventListener("click",function(){
    let item = document.createElement("li");  // created list element 
    item.innerText = inp.value;  //     

    // just kinf button created 
    let delBtn = document.createElement("button");
    // button name was given as delete  
    delBtn.innerText="delete";
    // delete class was added to button 
    delBtn.classList.add("delete");

    // appeding dlt buton to list item as child 
    item.appendChild(delBtn);

    // now append item under unoreder list target 
    ul.appendChild(item);  

    // making empty again after submitting  
    inp.value="";  // this makes input box empty affter cliking 

});

// now we need ki affter deleteing to the particular list item then list item shoud also get deleted 
// to delete list item particularly 
let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    // adding event listner to delete button 
    delBtn.addEventListener("click",function () {
        // selecting parent element of deletebutton which is li tag
        let par= this.parentElement;

        console.log(par);
        // removing the li tag
        par.remove();
    })
}

// will not work  for newly created jscommand tag 






// ------------------------------------------------
// Event Delegation 
// if any new element is added in the html tag through js 
// and 
// if any event listner was added for same kind of the element then in normal conditions event listner will not work for element added through js 
// but 
// we need so that our event listner doesn't create any differance in  selecting tags that added directly to htlml or through js command
// we use  bubbling property 




// yaha adventures baat ye hai ki CURSUR click kr raha hai delete button but 
// event listner  parente of list( and list is parent of button) but wo detect kr skta hai ki kis jaga usko click kiya gay hai 
//  ul ek static tag and element dono hai 

// ul ke under li hai and li ke under btn hai 
// target button ye batayge ki kon si jagaha click hua hai child to child me ya sirf child me 



ul.addEventListener("click",function(event){
    // iss function ke karan ye pata chalta hai ki cursur ne kaha oe click kiya hai aur wo iss cheez ko track krne ke liye wo div box ko use krta hai 
    console.log(event.target);
    // iss function ki help se exact tag ka naam pata lg jata hai 
    console.log(event.target.nodemon);

    // if cursor clicking tag is equal to BUTTON then remove the list 
    if(event.target.nodemon=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }else{
        console.log("don't remove ");
    }
});