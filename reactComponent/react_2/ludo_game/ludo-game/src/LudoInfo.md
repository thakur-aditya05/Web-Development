# boolean 
# numeric 
# string 

all three types state variable values can be formed 


<!--  -->
1) no we will pass object to state variable and render page if any things changes in that object i.e yani object ke changes pe rendering

2) 
    // let updates its value 
    let updateblue=()=>{
        // our mindset is to do this 
        moves.blue+1;//count=count+1

        // if is was not object we certainly do this 
        //setMoves(moves); // arrayofObject ([object object]) object //setCount(count) 
        setMoves({...moves});// moves.blue+1

        // finally we are doing this 
        setMoves((priveousMove)=>{
            return {...priveousMove , blue:priveousMove.blue+1}
        });// moves.blue+1


        console.log(`moves.blue = ${moves.blue}`);//console.log(count);
        
    }

# 
when we try to update any key of object then referance or address will not change  due which state variable's inital and final state will change and which leads no rendering of the page 

array and object address should to change so that statevarible(which is referance) should to change and leads to page rendering 

array and object ke under changes detect ho sake(i.e referance point(value) alter ho sake ) and stateVariable usko detect kr skae 

array and object ki puri copy duabara pass karo and updated values ke saath 

 <!-- {...priveousMove , blue:priveousMove.blue+1}  we are using spread operture which will pass array and object as the new copy and state varible wil detect this time  -->

 <!-- {...priveousMove , blue:priveousMove.blue+1} object spread and blues vales should to have +1 with previous  -->