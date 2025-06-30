
// import { useEffect } from "react";
// import { useState } from "react";


// export default function Counter(){
    
//     let [count,setCount] = useState(0);

//     console.log("components is rendered");
//     console.log(`count =${count}`);


//     let inCount=()=>{   
//         setCount(currCount=>currCount+1); 
//     }
    
//     useEffect(function printSomthing(){
//         console.log("this function run affter every render even 1st time also ")
//     })
        

//     return (
//         <div>
//             <h3>Count={count}</h3>
//             <button onClick={inCount}>Increase count</button>
//         </div>
//     )
// }













// this for understanding useEffect depandencies 

import { useEffect } from "react";
import { useState } from "react";


export default function Counter(){
    
    let [countX,setCountX] = useState(0);
    let [countY,setCountY] = useState(0);




    let inCountX=()=>{   
        setCountX(currCount=>currCount+1); 
    }



    let inCountY=()=>{   
        setCountY(currCount=>currCount+1); 
    }
    
    // useEffect(function printSomthing(){
    //     // drwa back if we not pass any stateVaribale (depandencies) then it will render for increament of boath of them that is countX and CountY
    //     console.log("this function run affter every render even 1st time also ")
    // })

    useEffect(function printSomthing(){
        // this function eecuted for every render and re-render of  countX
        console.log("this function run affter every render even 1st time also ")
    },[countX]) 


    useEffect(function printSomthing(){
        // due to empty array it will be execute for one time only 
        console.log("this function run affter every render even 1st time also ")
    },[]) 

    return (
        <div>

            <h3>Count={countX}</h3>
            <button onClick={inCountX}>Increase count</button>


            <h3>Count={countY}</h3>
            <button onClick={inCountY}>Increase count</button>

        </div>
    )
}

