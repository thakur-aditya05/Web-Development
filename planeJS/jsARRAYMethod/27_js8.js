// arrayMethod
// hiegher order function who takes call backes as input 

// forEach, map, filter, some, every, reduce 

// ------------------------
// for each 
let arr=[1,2,3,4,5,6];

function print(el){
    console.log(el);
}
arr.forEach(print)


// or 

arr.forEach(function print(el){
    console.log(el);
});

// or 

arr.forEach((el)=>{
    console.log(el);
});

let Srr = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 90 },
    { name: "Charlie", marks: 76 },
    { name: "Diana", marks: 88 }
];

Srr.forEach((el)=>{
    console.log(el.marks);
});
// ------------------------




// ------------------------
// map
// let newArr=arr.map(some function defination or name)


let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});
let double1=num.map((el)=>{});
let double2=num.map((el)=>{el*el});




let Srr1=[
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 90 },
    { name: "Charlie", marks: 76 },
    { name: "Diana", marks: 88 }
];
let Gpa=Srr1.map((el)=>{ 
    return el.marks/10;   // floating point precision 
});


// double  ==> array 
// ------------------------







// ------------------------
// filter 
// naya array dega , if output me true dega then we will add the element in our array else we will not add to  the array 
let number=[1,2,1,4,5,6,7,8,97,9,4];

let even=number.filter((num)=>(num%2==0)); // even true means add to new array  and odd false dont appent to new array 
let newArrya=number.filter((num)=>(num<5)); 
// ------------------------






// ------------------------
//  every ( loagical and )-->return true if we get true for every sub element 
let everyArray=[2,4,6,8]
let a =everyArray.every((el)=>el%2==0);
// ------------------------



// ------------------------
//  every ( loagical OR )-->return true if we get true for every sub element 
let someArray=[1,2,4,6,8]
let b =someArray.some((el)=>el%2==0);
// ------------------------









// ------------------------------------------------------
// reducce ==>reduce the array to a single value 
// arr.reduce(reduce function with 2 variable for ac(cumulators, element ))
let num2=[1,2,3,4,5,6]
let finalVal=num2.reduce((res,el)=>{
    console.log(finalVal);
    return res+el;
});
// ------------------------------------------------------