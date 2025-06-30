// [1, 2, 3]
// [1, 2, 3]
// 0: 1
// 1: 2
// 2: 
// 3length:
//  3[[Prototype]]:
//  Array(0)

// [[Prototype]]: ; 
// JO BHI OBJECT CREATE HOTA HAI USKE pass kuch set of function hote hai 
// ye function wo apne type wale prototype se in herit krta hai 
// if string hai to string apne function string prototype se leta hai 

let arr1 = [1,2,3,4,5,6];
arr1.push(8); // 


let arr2 = [1,2,3,4,5,6];
arr2.push(7); // 
// yaha push function dono type ke array ke liye similar hai 


// but
arr1.sayHello=()=>{
    console.log("hello! i am arr in side 1") 
}

arr1.sayHello(); 
arr2.sayHello();

// say hello prototype ke under nahi hai issliye arr2 usko inherit nahi kr paya 
// to hrr array ke liye say hello banana padega

// IF WEE NEED KI SAARE ARRAYY KISI SPECIAL FUNCTION KO INHERIT KARE TO  HAME USKO ARRAY PROTOTYPE KA FUNCTION BANANA PADEGA 


// --------------------------------------
// ISS PROTYPE 

arr.__proto__  // will referancing to the prototype jo likh ke aata hai js console me
// if we want to change any function defination for exaple push 
// 1) access the pointer referancing to [prototype]
arr.__proto__.push=(n)=>{
    console.log(`pusing nmber ${n}`);
}

arr1.push(5) // this will jsut print value 5 not push the value 5 

// arr.__proto__ ===ye referance hai 



// -----------------------------------------
Array.prototype // ye actual prtotype object hai 
