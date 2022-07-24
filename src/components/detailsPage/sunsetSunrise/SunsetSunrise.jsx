import React from 'react'
import {formatToLocalTime} from "../../services/WeatherService"
 const SunsetSunrise = ({weather:{sunrise,sunset, timezone}}) => {
  return (
      <>
    <div className='pressure-humidity'>
     <div>
         <p>Sunrise <br/> {formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
     </div>
     <div>
         <p>Sunset <br/> {formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
     </div>
     </div>
     </>
  )
}

export default SunsetSunrise;