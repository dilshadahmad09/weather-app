import React from 'react'
import getFormattedWeatherData from '../../services/WeatherService';
import DailyDetails from '../dailyDetails/DailyDetails';
import HourlyDetails from '../hourlyDetails/HourlyDetails';
import SunsetSunrise from '../sunsetSunrise/SunsetSunrise';

import "./DetailsMain.css"



const DetailsMain = () => {
    const fetchWeather = async ()=>{
        const data = await getFormattedWeatherData({q:"pune"});
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