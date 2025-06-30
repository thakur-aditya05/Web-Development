

// this is what called deafult behaviour 
// export  default function Form(){
//     return(
//         <form>
//             <input type="text" name="" id="" placeholder="enter fullname" />
//             <button>Submit</button>
//         </form>
//     )
// }

import { useState } from "react"







// assicating states with form 
// 
// export  default function Form(){

//     let [fullName,setFullName] = useState("");


//     return(
//         <form>        
//             {/* we are connecting value with state , we will find no change in this form state  */}
//             <input type="text" name="" id="" placeholder="enter fullname" value={fullName} />
//             <button>Submit</button>
//         </form>
//     )
// }





// input Change--->onchange--->handleNameChange--->setFullName--->fullName // this is flow 
// react state are the single source of the thruth // react control through state varibale 
// inputs value wuill be deafined through "fullName"


export  default function Form(){

    let [fullName,setFullName] = useState("");

    let handleNameChange=(event)=>{
        setFullName(event.target.value)
    }

    return(
        <form>        
            <label htmlFor="form"></label>
            {/* we are connecting value with state , we will find no change in this form state  */}
            <input type="text" name="" id="form" placeholder="enter fullname" value={fullName} onChange={handleNameChange} />
            <button>Submit</button>
        </form>
    )
}



































