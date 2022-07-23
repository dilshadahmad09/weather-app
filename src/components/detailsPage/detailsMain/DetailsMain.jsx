import React from 'react'
import DailyDetails from '../dailyDetails/DailyDetails';
import HourlyDetails from '../hourlyDetails/HourlyDetails';
import SunsetSunrise from '../sunsetSunrise/SunsetSunrise';
import {getWeatherData} from "../../services/WeatherService";
import "./DetailsMain.css"



const DetailsMain = () => {
    const fetchWeather = async ()=>{
        const data = await getWeatherData("weather", {q:"pune"});
        console.log("dilshad", data);
    }
    fetchWeather();
    
  return (
    <div>
        <DailyDetails/>
        <div className='details-hour-sunset-sunrise-body'>
           <HourlyDetails/>
           <SunsetSunrise/>
        </div>
    </div>
  )
}
export default DetailsMain;