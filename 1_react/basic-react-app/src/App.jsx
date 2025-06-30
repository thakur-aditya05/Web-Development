
import './App.css'



// hrr component ki alaga file banti hai but abhi ke liye yaha bana rahe hai 
function Title1(){
  return <h1>i am the title1 ;</h1>
}

function Description1(){
  return <h1>i am the Description1 ;</h1>
}




import Title from './Title'  // we can use any deafult name during importing 

// import {Title} from './Title'  // we cann't use any deafult name during importing 

import { ProductTab } from './ProductTab'

function App() {   //ye jo "app" return karega wo hi app(Component) bn jayega 

            // jis cheez ko render krna hai  
            // function return is only th component  
            // keval ek single elemnt ko hi return kr skte hai 
            // agar multiple return krne hai to sbko ek me cluster kr do 
            // hrr component apni ek alag file ke under hona chiaye
            
            // lets make title components 
          return (
            <>
                <h1>hello world</h1>
                <button>hello</button>
                <Title1/>
                <Title/>
                <Description1/>
                <ProductTab/>
            </>
          )
}

export default App
