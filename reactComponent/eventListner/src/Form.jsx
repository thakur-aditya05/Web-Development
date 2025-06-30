function handleFormSubmit(event){

    event.preventDefault(); // this is beacuse is just to prevent deafult behaviour of the form 

    console.log("form default behaviour is to submit form ")
}





// 2nd 
export default function Form(){
    return (
        <>
            <form >
                <input type="text" placeholder="write somthing" />
                <button  onClick={handleFormSubmit}>Submit</button>
            </form>
        </>
    )
}



// 1st
// export default function Form(){
//     return (
//         <>
//             <form onSubmit={handleFormSubmit}>
//                 <input type="text" placeholder="write somthing" />
//                 <button>Submit</button>
//             </form>
//         </>
//     )
// }