// 2) step 2
function printHello(event){
    console.log(event)  // automatic passes of event object each and everyThings 
    console.log("hello!");
}


function printPara(){
    console.log("hover");
}

// 1) i make this component to render a button 
export default function Button(){
    return (
        <>
            <div>
                {/* 3) when button is clicked then trigger hello  */}
                <button onClick={printHello}> click me </button>
                {/* hmm double brackets nahi lagate hai beacuuse it lets one time run  */}
                <p onMouseOver={printPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio est impedit sapiente quis repellendus ipsam deleniti iusto, fuga distinctio! Reprehenderit, laboriosam. Aliquam impedit vitae adipisci fuga doloremque est autem?</p>
            </div>
        </>
    )
}0 