// mast cheez shikhayi mam ne   



function sum(...args){
    // argument (...args==>array);
    for (let i = 0; i < 5; i++) {
        console.log(arr[i]);
    }
}
sum(1); // args=[1]
sum(1,2,3,4,5,6,7,8); // args=[1,2,3,4,5,6,7,8]
sum(1,23,4,5,6,7);//args=[1,23,4,5,6,7]


// -------------------------------------------------
// awesome and interview concept
// spread: single array but get sparatedd to multi values 
// Rest: multi values get converted to an single array 
// conventionally called: args 

Maths.min(); // .Max // they both can take indefinite arguments ----> but they automaticaaly get bundeled 


// ---------------------------------------------------




// -------------------------------------------------
// Inbuilt array ; argument orr args array :
// arguments : this is by-deafult collection  array  which store all argument 

function min(a,b,c,d){
    console.log(arguments);
}
function min(){
    console.log(arguments);
    console.log(arguments.length);
     

    console.log(arguments[0]);


    // argument is not actual aaray: its is just collection 
    arguments.push(5);
    arguments.pop(6);


}
min(1,2,3,4,5,7,8,9)

// but this arguments is not array : because we we cant use lots array method on this arguments collection 




function sum(){
    return arguments.reduce((sum,el)=>(sum+el));  // not work 
}




// #################################################################
// jaha argument ko use krna hoga and array property lagani hongi to waha @rest method ka use karenge 
function sum(...args){
    return args.reduce((sum,el)=>(sum+el));  //  
}
sum(1,2,3,4,5)


function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });    
}
sum(1,2,3,4,5)




function sum(msg, ...args){
    return args.reduce((sum,el)=>(sum+el));  //  
}
sum(1,2,3,4,5)


function min(anyNum, ...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });    
}
sum("hello",1,2,3,4,5)

sum(10,1,2,3,4,5)


// jab bhi arguments iss taraha collect kr rahe ho  or saaath me extra perimeter bhi collect krna ho to collection wale ko suruwat me likhta hai 
// function min(anyNum, ...args) // correct way
// function min(...args, anyNum) // wrong way

// ##################################################################
// ---------------------------------------------------
