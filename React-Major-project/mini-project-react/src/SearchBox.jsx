import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default  function SearchBox({ updateInfo }){
    let [city,setCity]=useState(""); // state variable ki access hrr function ke pass hoti hai automatically to kisi ke parameter me pass krne ki jarurat nahi hai sate vriable ko 
    let [error,setError]=useState(true)
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a12a0c111c8f7f7a06d40b58acad268f";
    
    const getWeatherInfo=async()=>{
        try{
            // let response=await fetch (`${API_URL}?q=${city}&appid=${API_KEY}`);

            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
                                    
            let jsonResposne = await response.json();
            console.log(jsonResposne);
            let result = {
            city:city,
            temp:jsonResposne.main.temp,
            tempMin:jsonResposne.main.temp_min,
            tempMax:jsonResposne.main.temp_max,
            humidity:jsonResposne.main.humidity,
            feelsLike:jsonResposne.main.feels_like,
            weather:jsonResposne.weather[0].description,


        };
        console.log(result);
        return result;

        }catch(err){
            throw err;
        }
        

    }


    let handleChange=(event)=>{
        // console.log(event.target.value);
        setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
            setError(true);
        }catch(err){
            setError(false);
        }


    };        


    return (
        <div className="SearchBox">
             
            <h3>Search For Weather </h3>
            <form onSubmit={handleSubmit} >
            <TextField id ="city" label="City Name"  Variant="outLined" value={city} onChange={handleChange} required />
            <br /><br />
            <Button variant="contained" type="submit" >Search</Button>
            {(!error) && <h4 style={{color:"red"}} className='error'>No Such Place Exists </h4>}

            </form>
        </div>
    )
}