// 1} we will store comments in form of objects in array
// 2} 


// attachement of the two form how we can attach the two form 
// 1) commentsForm onSubmission -->submit data to ---> Comment.jsx ,,doable in 2ways a) commentsForm -->keUnder-->comments section ho b) comment --> ke under--->commentsForm ho render karaye 
// but 
//  




// 1st way is to do with this 



// import  { useState } from "react";

// export default function Comment() {

//     let commentArray=[{
//         username: "@gsk",
//         remarks: "great job!",
//         rating: 4,
//     },];

//     let [comments, setComments] = useState(commentArray);

//     return (
//     <div>
//         <h3>All Comments</h3>
//         <div className="comment">
//         <span>{comments[0].remarks}</span>
//         &nbsp;
//         <span>Rating = {comments[0].rating}</span>
//         <p>- {comments[0].username}</p>
//         </div>
//     </div>
// );
// }






















import "./Comment.css"
import CommentsForm from "./CommentsForm";

import  { useState } from "react";

export default function Comment() {

    let commentArray=[{
        username: "@gsk",
        remarks: "great job!",
        rating: 4,
    },];

    let [comments, setComments] = useState(commentArray);


    let addNewComment=(comment)=>{

        // line 1 
        // comments.push(comment);
        // setComments([...comments ])

        // line 2 is as same to line 1
        setComments((currComments)=>[...currComments, comment]); // this is caalled pushin into array 
        console.log("added new Comments");


    }



    return (
    <>
        <div>
            <h3>All Comments</h3>

        {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(Rating = {comment.rating})</span>
            <p>- {comment.username}</p>
        </div>
        ))}

        </div>
        <hr /><hr /><hr />

        {/* we chhose the 2nd way that is rendering form into Comment Section (i.e Comment.jsx) becuse one form submitted it got refresh completely means it will be only passs current data and what about then last data ? that is why we choose to have commentsForm under Comments section  */}
        < CommentsForm addNewComment={addNewComment} />

    </>
);
}
