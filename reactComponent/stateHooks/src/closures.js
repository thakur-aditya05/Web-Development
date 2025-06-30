function Outer(){
    let b=10;
    function Inner(){ // inner function will not have access to b if outer function is not called 
        let a=20;
        console.log(a+b);
    }
    Inner(); // trying to access Inner function 
}



Inner() // nothing will be printed 
Outer() // gives value 30


function outer(){
    let b=10;
    function inner(){ // inner function will not have access to b if outer function is not called 
        let a=20;
        console.log(a+b);
    }
    return inner; // trying to access Inner function 
}


outer(); // 30

let inner = outer(); // outer function have value and get stored to inner varable 
inner(); // schope chain  