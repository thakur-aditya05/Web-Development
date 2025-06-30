



import { useState } from "react";



// export  default function Form(){

//     // input tds waye hai 

//     let [fullName,setFullName] = useState("");
//     let [username,setUserNamw] = useState("");

//     let handleNameChange=(event)=>{
//         setFullName(event.target.value)
//     }
//     let handleUserChange=(event)=>{
//         setUserNamw(event.target.value)
//     }

//     return(
//         <form>        
//             <label htmlFor="form"></label>
//             {/* we are connecting value with state , we will find no change in this form state  */}
//             <input type="text" name="" id="form" placeholder="enter fullname" value={fullName} onChange={handleNameChange} />

//             <label htmlFor="form1"></label>
//             <input type="text" name="" id="form1" placeholder="enter fullname" value={username} onChange={handleUserChange} />
//             <button>Submit</button>
//         </form>
//     )
// }



















export  default function Form(){

    // input tds waye hai 
    let formInput={
        fullName:"",
        username:"",
    }
    let [formData,setFormData] = useState(formInput);


    let handleInputChange=(event)=>{
        let fieldname =  event.target.name; 
        console.log(fieldname); // each and every elements have "name" attribute whose value wwill be printed here // name attribute value will be used to access this formData.FullNAme //
        let newValue =  event.target.value;
        console.log(newValue); // print the value entered in any of the box 


        // question we have to search appropiate  fieldName and change value 
        
        setFormData((currData)=>{
            currData[fieldname]=newValue;
            return {...currData};  // desconstructed from me data send kr diya 
        })
        // setFormData((currData)=>{
            
        //     return {...currData, [fieldname]:newValue};  // desconstructed from me data send kr diya 
        // })


    }
    // just to prevent deafult behavvious 
    let handleSubmit = (e)=>{
        e.preventDefault();
        setFormData({
            fullName:"",
            username:"",
        });
    }




    return( 
        <form  onSubmit={handleSubmit}>        
            <label htmlFor="form"></label>
            {/* we are connecting value with state , we will find no change in this form state  */}
            <input type="text"  id="form" placeholder="enter fullname" value={formData.fullName} onChange={handleInputChange} name="fullName" />

            <label htmlFor="form1"></label>
            <input type="text" id="form1" placeholder="enter fullname" value={formData.username} onChange={handleInputChange}  name="userName" />
            <button>Submit</button>
        </form>
    )
}






// name should be 

// currData[fieldname] // 1st fieldName will be evaluated and then we fined that keyed object from 











