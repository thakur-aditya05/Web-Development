import { useState } from 'react'
export default function LudoBoard(){

    // 1st way  we can create 4 state varibale which is also good but 2nd waye we can create keyed-valued pairs object formation

    // let [blueMove, setBlueMove]=useState(0);
    // let [greenMove, setGreenMove]=useState(0);
    // let [yellowMove, setYellowMove]=useState(0);
    // let [purpleMove, setPurpleMove]=useState(0);

//better options
    let [moves, setMoves]=useState({blue:0,green:0,yellow:0,purple:0}); // moves is an object // moves.blue gives 0 
    // let [count, setCount]=useState(0);//count =o    blue Movies  = 0 

    
    // let updates its value 
    let updateblue=()=>{
        // our mindset is to do this 
        // moves.blue+1;//count=count+1 //1

        // if is was not object we certainly do this 
        //setMoves(moves); // arrayofObject ([object object]) object //setCount(count) 
        // setMoves({...moves});// moves.blue+1 //2

        // finally we are doing this 
        setMoves((priveousMove)=>{
            return {...priveousMove , blue:priveousMove.blue+1}
        });// moves.blue+1


        console.log(`moves.blue = ${moves.blue}`);//console.log(count);
        
    }



//for yellow 
let updateYellow=()=>{
    setMoves((priveousMove)=>{
        return {...priveousMove , yellow:priveousMove.yellow+1}
    });// moves.blue+1
}    
// for Green
let updateGreen=()=>{
    setMoves((priveousMove)=>{
        return {...priveousMove , green:priveousMove.green+1}
    });// moves.blue+1 
}     
// foe Purple
let updatePurple=()=>{
    setMoves((priveousMove)=>{
        return {...priveousMove , purple:priveousMove.purple+1}
    });// moves.blue+1     
}


return (
    <div>
        <h1>game start </h1>
        <div className="board">
            {/* <p>blue moves ={blueMove}</p> */}
            <p>blue moves ={moves.blue}</p>
            <button style={{backgroundColor:"blue"} } onClick={updateblue} >+1</button>

            {/* <p>blue moves ={blueMove}</p> */}
            <p>green moves ={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

            {/* <p>blue moves ={blueMove}</p> */}
            <p>yellow moves ={moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>

            {/* <p>blue moves ={blueMove}</p> */}
            <p>purple moves ={moves.purple}</p>
            <button style={{backgroundColor:"purple"}} onClick={updatePurple}>+1</button>

            
        </div>
    </div>
);
}

    



    

   


     


