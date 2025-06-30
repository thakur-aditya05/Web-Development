// c create POST request 
// r read GEt request 
// update u  put patch request 
// delete D   DELETe request 


// ------------------------------------------------
// 1. selecting element by id name (getElementById)
// return js object form  from document.getElementById

let imgObj=document.getElementsById("mainImg");// image object 
console.dir(imgObj); // tagName, src, 

console.log(imgObj.src); 
console.log(imgObj.tagName); 

imgObj.src="planeJS\_2_dom\assets-20250520T123439Z-1-001\assets\creation_2.jpeg"



// acess paragraph 
let paraObj=document.getElementById("description");
console.dir(paraObj); //object form of paragraph having id as dexription

let nullObj=document.getElementById("abc"); //wrong id name 
// ------------------------------------------------




















// ------------------------------------------------
// 2. selecting element by class name (getElementByClassName)
// return js object form  from document.getElementByClassName
// this does not return  any ARRAY  but return HTML collections (iteratable, printing by index possible, )

// ------------------------------------------------