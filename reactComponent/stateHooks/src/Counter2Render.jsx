
import { useState } from "react";


export default function Counter(){
    
    let [count,setCount] = useState(0);

    console.log("components is rendered");
    console.log(`count =${count}`);

    let inCount=()=>{

        setCount(count+1); // function which rerender the page and also update state variable // setCount Will rerender the page 

        console.log(`count =${count}`);  // render time pe update hoti hai value

    }

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )
}

