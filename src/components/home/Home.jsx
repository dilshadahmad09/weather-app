import React,{useState,useEffect} from 'react'
import DailyDetails from '../detailsPage/dailyDetails/DailyDetails'
import HourlyDetails from '../detailsPage/hourlyDetails/HourlyDetails'
import SunsetSunrise from '../detailsPage/sunsetSunrise/SunsetSunrise'
import Input from '../inputbox/Input'
import {getFormattedWeatherData, iconUrlFromCode, formatToLocalTime} from '../services/WeatherService';
import "./Home.css"
function Home() {
    const [query, setQuery] = useState({q:"pune"})
    const [units, setUnits] = useState("metric")
    const [weather, setWeather] = useState(null)
    
    const fetchWeather = async ()=>{
        await getFormattedWeatherData({...query, units}).then(data=> {
        setWeather(data);
       });   
       
    }
    console.log("weather", weather)
    
    useEffect( ()=>{
        fetchWeather(); 
    },[query])

  return (
    <div className='body'>
        <Input setQuery={setQuery}/>
       {weather && 
         <div>
              <DailyDetails  weather={weather} iconUrlFromCode={iconUrlFromCode}/>
            <div className='details-hour-sunset-sunrise-body'>
                <div className='current-temp-name'>
                    <span>{weather.temp}°</span>
                    <span>{weather.name}</span>
                    <img src={iconUrlFromCode(weather.icon)} alt="" />
                </div>
              <HourlyDetails weather={weather}/>
              <SunsetSunrise weather={weather}/>
           </div>
         </div>
       }
    </div>
  )
}

export default Home