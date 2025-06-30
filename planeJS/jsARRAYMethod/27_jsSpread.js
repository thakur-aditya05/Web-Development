// spread (...)
// expand and iterable into multiple values
let arr1=[1,2,3,45,6,7,8,9] 
function spread(...arr1){
    pass 
}

Math.min(...arr1);
Math.min(1,2,3,45,6,7,8,9)



console.log(...arr1);
console.log(1,2,3,45,6,7,8,9);



// -------------------------------------------------
// ye important concept jisko hrr jagaha use hote dekha hai 
let arr2=[1,2,3,45,6,7,8,9,2,3,45,6,7,8,9] 
let newArray=[...arr2]; // deep copy not the shallow copy creation 

let char=[..."Hello"]; 

let even=[2,4,6,8];
let odd=[1,3,5,7,9];

let num=[...even]+[...odd]
let num1=[...even , ...odd] 

// ---------------------------------------------------------











// -------------------------------------------------
// how to use the spread with object literals 
// mongoDb me ye jada use hoga 
let data={
    email:"thahukadityasinghchuha@gmail.com",
    password:"abcd",
};


let dataCopy={...data,id:123,country:india} // to isske under saare key-value pairs aajayengi new key value pairs bhi create kr skte hai  




// ---------------------------------------------------------










// ---------------------------------------------------------
// if we will break array element to object form then index become key and array value become pairs
let arr3=[1,2,3,45,6,7,8,9,2,3,45,6,7,8,9] 

let obj1={...arr3}; //object: key(array's index)-value(array's value) pair as object  
let obj2={..."helllo"}; //object: key(array's index)-value(array's value) pair as object  

// ---------------------------------------------------------
























