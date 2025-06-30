
import { useState } from "react";


export default function Counter(){
    
    let [count,setCount] = useState(0);

    console.log("components is rendered");
    console.log(`count =${count}`);

    // let inCount=()=>{   
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    // }


    // let inCount=()=>{   

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
        
        setCount(25); // one time vlue fixed 
        
}

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )
}

