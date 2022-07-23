import React, { useState } from 'react'
import {getFormattedWeatherData, iconUrlFromCode, formatToLocalTime} from '../../services/WeatherService';
import DailyDetails from '../dailyDetails/DailyDetails';
import HourlyDetails from '../hourlyDetails/HourlyDetails';
import SunsetSunrise from '../sunsetSunrise/SunsetSunrise';

import "./DetailsMain.css"



const DetailsMain = () => {
    const [query, setQuery] = useState({q:"allahabad"})
    const [units, setUnits] = useState("metric")
    const [weather, setWeather] = useState(null)
    const fetchWeather = async ()=>{
         await getFormattedWeatherData({...query, units}).then(data=> setWeather(data));    
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