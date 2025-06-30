// --------------------------------------------------------------
let form = document.querySelector("form");

form.addEventListener("submit", function(){
    alert("form submitted");
    // jaise hi "submit" form ke upper rigger hua iss call back ko execute kara deta hai 
    // but 
    // form ki default behaviour hone ke karan wo automatic redirect ho jata hai kisi url ke upper to jo bhi event hoga wo thodi deer to visible hoga but usske baad chala jayega 
    // yani redirect ko rokna hai 
})
// --------------------------------------------------------------







// --------------------------------------------------------------
// to prevent default behaviour we have a function 
// called event.preventDefault() --->just ye form submit hone ke baad deafult behaviour ko prevent karta hai 
form.addEventListener("submit", function(event){
    // form me submit button click krne ke baad kuch krna hai to 
    event.preventDefault();

    alert("form submitted");
    console.log("form submited but default behaviour  prevented ");

})  

// --------------------------------------------------------------





















// --------------------------------------------------------------
// Extracting from data (uske data ko kase access kare )
let form1 =document.querySelector("form");

form1.addEventListener("submit",function(event){

    // just stop redirecting 
    event.preventDefault();

    let inp=document.querySelector('input');
    console.dir(inp); // to print object 

    console.log(inp.value); // to print the that is enter in the form  

})

// --------------------------------------------------------------















// --------------------------------------------------------------
// Extracting users data and password
let form2 =document.querySelector("form");

form2.addEventListener("submit",function(event){

    // just stop redirecting 
    event.preventDefault();

    let user=document.querySelector('#user');
    let pass=document.querySelector('#pass');

    // to print users info and password value 
    console.log(user.value);
    console.log(pass.value);

    // to just print as a alert message 
    alert(`hi ${user.value}, your password is set to ${pass.value}  `);

});
// --------------------------------------------------------------









// --------------------------------------------------------------
// form also keep track of its element 
form2.addEventListener("submit",function(event){

    // just stop redirecting 
    event.preventDefault();

    // printing form object 
    console.dir(form); 
    // access its elements collections array

    // access its individual property
    console.log(from.elements);
    console.log(from.elements[0]);
    console.log(from.elements[1]);
    console.log(from.elements[2]);

});
// --------------------------------------------------------------
















// --------------------------------------------------------------
// 
let form3 =document.querySelector("form");

form3.addEventListener("submit",function(event){

    // just stop redirecting 
    event.preventDefault();

    // form ke internal behaviours ke karan usski enternal value ko access krna shikh gaye 
    let user=this.elements[0];  // form element[1]
    let pass=this.elements[1]; // form element[0]

    // to print users info and password value 
    console.log(user.value);
    console.log(pass.value);

    // to just print as a alert message 
    alert(`hi ${user.value}, your password is set to ${pass.value}  `);

});
// --------------------------------------------------------------

