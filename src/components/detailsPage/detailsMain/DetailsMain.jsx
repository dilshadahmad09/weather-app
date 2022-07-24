import React, { createContext, useEffect, useState } from 'react'
import {getFormattedWeatherData, iconUrlFromCode, formatToLocalTime} from '../../services/WeatherService';
import DailyDetails from '../dailyDetails/DailyDetails';
import HourlyDetails from '../hourlyDetails/HourlyDetails';
import SunsetSunrise from '../sunsetSunrise/SunsetSunrise';
import "./DetailsMain.css"



const DetailsMain = ({}) => {
    const [query, setQuery] = useState({q:"pune"})
    const [units, setUnits] = useState("metric")
    const [weather, setWeather] = useState(null)
    
    const fetchWeather = async ()=>{
        await getFormattedWeatherData({...query, units}).then(data=> {
        setWeather(data);
       });   
       
    }

    
    useEffect( ()=>{
        fetchWeather(); 
    },[query])
    console.log("dilshad", weather)
  return (
    <>
       {weather && 
         <div>
            
              <DailyDetails setQuery={setQuery} weather={weather} iconUrlFromCode={iconUrlFromCode}/>
            <div className='details-hour-sunset-sunrise-body'>
              <HourlyDetails weather={weather}/>
              <SunsetSunrise weather={weather}/>
           </div>
         </div>
       }
    </>
  )
}
export default DetailsMain;