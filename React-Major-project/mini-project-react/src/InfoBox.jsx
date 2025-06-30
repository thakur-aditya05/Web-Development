import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


// in sab chhezo ki ek separate  file bana skte hai but jaldi jaldi ke lie mam ek me hi kr de rahi hai sb kuch 

export default function InfoBox({ info }) {
const INIT_URL="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";    


const COLD_URL="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HOT_URL="https://media.istockphoto.com/id/171251746/photo/plane-earth-burning-isolated-on-black-background.jpg?s=2048x2048&w=is&k=20&c=Za5zq_76ye2_qZRseWid0wiPR8AZRf1As1msWchyMmg=";
const RAIN_URL="https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// city:"wonderlust",
// feelsLike: 24.84,
// humidity: 47,
// temp: 25.05,
// tempMax: 25.05,
// tempMin: 25.05,
// weather: "haze",
    
// });
    return (
        <>
            <div className="InfoBox">
                
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        // image={INIT_URL}
                        image={info.humidity>80?RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city.toLocaleUpperCase()}{info.humidity>80?<ThunderstormIcon/>:(info.temp>15)?<LocalFireDepartmentIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  sx={{ color: 'text.secondary' }}>
                            <p>Temperature ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Min Temp ={info.tempMin}&deg;C</p>
                            <p>Max Temp ={info.tempMax}&deg;C</p>
                            <p>
                                the weather can be describe as <b>{info.weather.toLocaleUpperCase()}</b> and feels like <b>{info.feelsLike}&deg;C</b> 
                                 
                            </p>
                           
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        </>
    );
};






