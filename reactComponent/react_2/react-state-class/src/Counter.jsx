import { useState } from 'react';
export default function Counter(){
    let [count, setCount]=useState(0);
    let incCounter=()=>{
        setCount(count+1);
        console.log(count);
    };
    return (
        <div>
            <h3> Count = {count} </h3>
            <button onClick={incCounter} >count badhao </button>
        </div>
    )
}
