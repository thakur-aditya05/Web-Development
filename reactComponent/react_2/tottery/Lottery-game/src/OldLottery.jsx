// Lottery.js
import { useState } from 'react';
import './helper.js';  // Ensure this file exists and is in the correct path
import './Lottery.css'; // Ensure this file exists and is in the correct path
import { genTicket, sum } from './helper.js';


// jitna variable bhejenge utne hi randome numbers generate kr ke dedega in the form of array 

// function genTicket(n){
//     let arr=new Array(n);
//     for(let i=0;i<n;i++){
//         arr[i]=Math.floor(Math.random()*10);
//     }
//     return arr;
// }
// let [ticket,setTicket]=useState(genTicket);


// 



export default function OldLottery() {
    // Initial ticket state
    let [ticket, setTicket] = useState(genTicket(3));
    
    // Check if the ticket sum is 15
    let isWinning = sum(ticket) === 15;
    
    // Function to generate a new ticket
    let buyTicket = () => {
        setTicket(genTicket(3));  // Set a new random ticket
    }

    return (
        <div>
            <h1> Lottery Game! </h1>
            <div className="ticket">
                <span>{ticket[0]}</span>&nbsp;
                <span>{ticket[1]}</span>&nbsp;
                <span>{ticket[2]}</span>&nbsp;
            </div>
            
            <button onClick={buyTicket}>Generate New Ticket</button>
            <h3>{isWinning && "Congrats, you won!"}</h3>
        </div>
    );
}

