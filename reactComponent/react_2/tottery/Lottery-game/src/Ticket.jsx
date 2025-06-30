import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ticket}){
    return (
        <div className="Ticket">
                  <p><b>Ticket</b></p>
                  {/* <TicketNum num={ticket[0]}/>
                  <TicketNum num={ticket[1]}/>
                  <TicketNum num={ticket[2]}/>
                  <TicketNum num={ticket[3]}/> */}


                  {
                    ticket.map((num,idx)=> (
                       <TicketNum num={num} key={idx}/> // will be se to accesss specific number 
                    ))
                  }
                 
                

        </div>
    )
}