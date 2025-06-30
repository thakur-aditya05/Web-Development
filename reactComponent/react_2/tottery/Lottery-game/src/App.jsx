import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import './App.css'
// way 1 ki teen different variable le lete hai orr fir uska use krke geenerate kr lenge 
// way2 ki ki array lelete hai  

function App() {
  
  return (
    <>
       <Lottery n={5} winningSum={25}/>
      {/* <Ticket ticket={[5,3,5,2]}/> */}
      {/* <TicketNum num={1}/>
      <TicketNum num={2}/>     */}
            {/* <Lottery/> */}
    </>
  )
}

export default App
