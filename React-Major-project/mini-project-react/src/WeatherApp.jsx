import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"wonderlust",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
            
});  

// question ye arise hota hai ki ye search box weather app ko info kaise de isska ek best
//  tarika hai ki ek handler ban dete hai 
    const updateInfo=(newInfo)=> { 
        setWeatherInfo(newInfo);     
    };

    return (
        <>
         <div style={{textAlign:"center"}} >
         <SearchBox updateInfo={updateInfo} />
         <InfoBox info={weatherInfo}/>
         </div>
        </>
    );
}