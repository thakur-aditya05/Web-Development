export default function LikeButton(){
    let clicked =()=>{
        console.log("event happened");
        
    };

    return (
        <div>
            <p onClick={clicked}>
            <i className="fa-solid fa-heart"></i>
            </p>
        </div>
    )
}