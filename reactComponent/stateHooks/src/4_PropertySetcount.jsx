
import { useState } from "react";



// function will be called many times but values remain initialized one of statevariable 
function init(){
    console.log("this function will be called as many times as state changes that is render amount of times ");
    return Math.random();
}




export default function Counter(){
    
    // let [count,setCount] = useState(init());  // initialises  // dekho , hrr baar page render hone pe function execute ho jata hai if parenthesis use nahi karenge to ek execute hoga dubara nahi hoga 

    let [count,setCount] = useState(init);  // initialises 

    console.log("components is rendered");
    console.log(`count =${count}`);

    // let inCount=()=>{   
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    // }





    // let inCount=()=>{   

        console.log("this will render as mmany times as state varable changes");
    //     setCount((currVal)=>{
    //         return currVal+1
    //     });
    //     setCount((currVal)=>{
    //         return currVal+1
    //     });
    //     setCount((currVal)=>{
    //         return currVal+1
    //     });
    //     setCount((currVal)=>{
    //         return currVal+1
    //     });

    // }





    let inCount=()=>{   
        console.log("this will print 1 time only because rendering take place only if initial and final values changes  ")
        setCount(25); // one time vlue fixed 
        
}



    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )



}

