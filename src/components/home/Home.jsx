import React from 'react'
import DailyDetails from '../detailsPage/dailyDetails/DailyDetails'
import HourlyDetails from '../detailsPage/hourlyDetails/HourlyDetails'
import SunsetSunrise from '../detailsPage/sunsetSunrise/SunsetSunrise'
import Input from '../inputbox/Input'
import "./Home.css"
function Home() {
  return (
    <div className='body'>
        <Input/>
        <DailyDetails/>
        <HourlyDetails/>
        <SunsetSunrise/>
        </div>
  )
}

export default Home