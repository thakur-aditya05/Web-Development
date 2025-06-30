import Button from '@mui/material/Button';

import './App.css'

function App() {

  let handleClickEvent=()=>{
    console.log("button was cicked");
  }

  return (
    <>
        <h1>Material UI</h1>
        <Button variant="outlined" onClick={handleClickEvent}> Outlined</Button>
    </>
  )
}

export default App





// Material UI uses Emotion as its default styling engine
// npm install @mui/material @mui/styled-engine-sc styled-components
// Roboto font
// npm install @fontsource/roboto
// Icons
// npm install @mui/icons-material




