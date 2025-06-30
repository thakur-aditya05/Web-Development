import { useState } from "react";





export default function LikeButton(){
    // components ke under hi state variable likh skte hai bs bahar nahi 
    // multi state variblae can be made 
    let [isLiked , setIsLiked]= useState(false);   // lets have inital value false 
    let [click , setClick]= useState(0);   // lets have inital value false 

    let toggleLike=()=>{

        // idea was this  but execution was this 

        // let newVal=!isLiked;   
        // console.log(newVal);

        setIsLiked(!isLiked);
        setClick(click+1); 

    };

    return(
        <div>
            <p onClick={toggleLike}>count={click}</p>
            <p onClick={toggleLike}> 
                {isLiked?( <i className="fa-regular fa-heart"></i>
            ):(
                <i className="fa-regular fa-heart"></i>
            )}
            </p>
        </div>
    )

}