// async function ka use krke asynch function ke saath kaam krne ka jada claener version hai 
// jada readbale and jada compact bana dete hai 
// lets asynch-await  vs Promises 

// saare aysnch function by deafult ek promise return krte hai 
// chahe promises return krne ka statement likhe ya na likhe 


// asynch function retrun promises on which later we can use then-catch pair taht is method 

async function greet(){
    return "hello";
    // return promises and will have promises state and promises message 
} // if this function doesn't return anything then still this will be returning promises 
// function normally execute hone ke baad and its return value isska result bn jati hai 
// if function stope without completetion then through error and error message will be printed 


async function greet(){
    abc.abc();  // will return promises with unfullfilled satte 
}

// agar kahi error through krna hai probabilty ke hisab se the we use through 
async function greet(){
    throw "some error ";
}

greet();  // will return promises // either return keyword is used or not "Promise {<fulfilled>: undefined} " --> when no keyword are used // issliye then and catch use kr skte hai 
greet()
.then((greetReturnStatementReturnValue)=>{
    console.log("we are inside the then of greet ");
    console.log(greetReturnStatementReturnValue)
})
.catch((throwKeyWordWalaErrorHiiErrorhai)=>{
        console.log("we are inside the catch of greet  ");
        console.log(throwKeyWordWalaErrorHiiErrorhai);
})


// making arrow function as async function 
const demo = async () => {
        return 5;
}