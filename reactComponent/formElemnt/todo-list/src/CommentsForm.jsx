// export default function Comment(){

//     let data={
//         username:"",
//         remarks:"",
//         rating:5,
//     };
    
//   let [formData,setFormData]=(data);


//     let handleInputChange=(event)=>{
//             setFormData((currData)=>{
//                 return {...currData, [event.target.name]:event.target.value};  // desconstructed from me data send kr diya 
//             })
            
//     }


//     let handleOnSubmitEvent=(e)=>{
//         e.preventDefault();

//         setFormData({
//             username:"",
//             remarks:"",
//             rating:5,
//         })
//     }
    


//     return (
//         <div>
//             <h4>Give a comment!</h4>
//             <form action="" onSubmit={handleOnSubmitEvent}>

//                 <input type="text" placeholder="username" value={formData.username} name="username" onChange={handleInputChange}/>
//                 <br /><br /><br /><br /><br />


//                 <textarea name="remarks" id="" value={formData.remarks} placeholder="remarks" onChange={handleInputChange}></textarea>
//                 <br /><br /><br />

//                 <input type="number" name="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
//                 <br /><br /><br />

//                 <button onClick={}>Add Comment</button>

//             </form>
//         </div>
//     )
// }




















// we had choosed 2nd way that is rendering Comment form into comment section 
// for this we had rendered CommentForm into the Comment file 
// we had passed one propets called "addNewComment" to CommentsForm to recieve this we have to have in function Components 


// import { useState } from "react";


// export default function CommentsForm({ addNewComment }) {

//     let data={
//         username:"",
//         remarks:"",
//         rating:5,
//     };
    
//   let [formData,setFormData]=useState(data);
  


// // trying  to create validation custom typpe 
//   let [isValid,setIsValid]=useState(true);

//     let handleInputChange=(event)=>{
//             setFormData((currData)=>{
//                 return {...currData, [event.target.name]:event.target.value};  // desconstructed from me data send kr diya 
//             })
            
//     }


//     let handleOnSubmitEvent=(e)=>{

//         if(!formData.username){
//             console.log("username is null ");
//             setIsValid(false);
//             e.preventDefault();
//             return ;
//         }

        
//         // e.preventDefault();


//         // when form submitted passed the data to comment.jsx
//         addNewComment(formData);




//         setFormData({
//             username:"",
//             remarks:"",
//             rating:5,
//         })
//     }
    


//     return (
//         <div>
//             <h4>Give a comment!</h4>
//             <form action="" onSubmit={handleOnSubmitEvent}>

//                 <input type="text" placeholder="username" value={formData.username} name="username" onChange={handleInputChange}/>
//                 <br /><br /><br />

//                 {/* tring to add custom validation  */}
//                 {!isValid && <p style={{color:"red"}}>username can not be empty</p>}

//                 <textarea name="remarks" id="" value={formData.remarks} placeholder="remarks" onChange={handleInputChange}></textarea>
//                 <br /><br /><br />

//                 <input type="number" name="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
//                 <br /><br /><br />

//                 <button>Add Comment</button>

//             </form>
//         </div>
//     )
// }
























// formik validation type 
// https://formik.org/


// import { useState } from "react";

 import { useFormik } from 'formik';



    const validate = values => {

    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    
    return errors;
};

export default function CommentsForm({ addNewComment }) {
    let data={
        username:"",
        remarks:"",
        rating:5,
    };

   const formik = useFormik({
     initialValues: data,
     validate,
     onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
         addNewComment(values);
         values.username="",
         values.remarks=""
       
     },
   });





    return (
        <div>
            <h4>Give a comment!</h4>
            <form action="/user" onSubmit={formik.handleSubmit}>

                <input type="text" placeholder="username" onChange={formik.handleChange} name="username" value={formik.values.username}/>
                {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                <br />
                <br />


                <textarea name="remarks" id="" value={formik.values.remarks} placeholder="remarks" onChange={formik.handleChange}></textarea>
                <br />
                <br />

                <input type="number" name="rating" placeholder="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
                <br />
                <br />
                <button type="submit">Add Comment</button>
                <br />
            </form>
        </div>
    )
}
