
let arr1 = [1,2,3,4,5,6];
arr1.push(8); // 


let arr2 = [1,2,3,4,5,6];
arr2.push(7); 

arr1.sayHello=()=>{
    console.log("hello! i am arr in side 1") 
}
arr2.sayHello=()=>{
    console.log("hello! i am arr in side 2") 
}

console.log(arr1.sayHello===arr2.sayHello);  // this shows ki alaag alag jagah create ho raha hoga 

"abc".toLowerCase === "pqr".toLowerCase ;   // dono function same type ke protype function ko refer ekr rahe hai yani memroy me alag function nahi create ho raha hoga 


Array.prototype // act