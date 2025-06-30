import './App.css'
import Ticket from "./Ticket";
import Lottery from './Lottery';
import {sum} from "./helper"
function App() {
// props me function pass kr rahe hai 
  let winCondition =(ticket)=>{
    // return (sum(ticket)===15);
    // return ticket.every((num) => num===ticket[0]);
    return  ticket[0]===0;

  }

  return (
    <>
      {/* <Ticket ticket={[0,1,2]}/>
      <Ticket ticket={[0,1,2]}/>
      <Ticket ticket={[0,1,2]}/> */}

      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
