import {useState} from "react";
import "./Lottery.css";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";




export default function Lottery({n=3,winCondition}){
    // props me function pass kr rahe hai 

    let [ticket, setTicket]=useState(genTicket(n));
    let isWinning =winCondition(ticket);
    
    let buyTicket=()=>{
        setTicket(genTicket(n));
    };


    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
{/* props pass kr rahe hai button ko ki action keyword me buyTicket krna hai  */}
            <Button action={buyTicket}/>
            <h3>{isWinning && "congratulations, you won "}</h3>

        </div>
    )

}