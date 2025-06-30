
import { useState } from "react";



// 1st 


// export default function Counter(){
    
//     let arr=useState(0);
//     console.log(arr);  // will return the array of the type such that one is zero and other one is function 


//     return (
//         <div>
//             {/* <h3>Count={}</h3>
//             <button onClick={}>Increase count</button> */}
//         </div>
//     )

// }

// normal behaviour of the components
// componets is just the function and once it render uske baad if componnt me kuch changes hote hai to UI rerender nahi hota hai 
// normal variables, props (immutable ) --> in all thsese cases once components rendered then affter it any changes in UI will not re-rerender the components  

// statefull components 
// onse components render but affter that any changes in states varaibles will leads to re render the components and hence UI will again re render 
// but only statefull Components are re-rendered 





// useState--->gives two values 
// a) its return the function which update state variable and re-render the page for the ui 
// b) it also return the initial value of the state  





// 2nd 


export default function Counter(){
    
    let [count,setCount] = useState(0);

    let inCount=()=>{
        // count++; // only this much will not gives counter Increment in UI elements 
        console.log(count)
        setCount(count+1); // function which rerender the page and also update state variable // setCount Will rerender the page 

    }

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )

}


// this is mismatch b/w console printing and states varibale updates