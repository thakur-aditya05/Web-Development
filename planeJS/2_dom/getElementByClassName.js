document.getElementsByClassName("oldImg"); //return html collection  (which is not the array but kind of that )
for(let i=0;i<smallImages.length;i++){
    smallImages[i];
    
    
    smallImages[i].src="";
    console.log(`value of image no. ${i} is chnaged `)
    
}




document.getElementsByClassName("assif"); //return html collectionwhich is empty 
// --------------------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------------------
// getElementsByTagName //return html collection having object as elemnt 
let a=getElementsByTagName("p");  // its is colection or array 
let first_tag=a[1];
a[1].innerText="abc";

// --------------------------------------------------------------------------------------------------------
