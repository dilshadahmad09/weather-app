import React from 'react'
import DailyDetails from '../dailyDetails/DailyDetails';
import HourlyDetails from '../hourlyDetails/HourlyDetails';
import SunsetSunrise from '../sunsetSunrise/SunsetSunrise';

import "./DetailsMain.css"
const DetailsMain = () => {
  return (
    <div>
        <DailyDetails/>
        <div className='details-hour-sun-body'>
           <HourlyDetails/>
           <SunsetSunrise/>
        </div>
    </div>
  )
}
export default DetailsMain;