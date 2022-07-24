import React,{useState} from 'react'
import Body from '../detailsPage/body/Body'
import DailyDetails from '../detailsPage/dailyDetails/DailyDetails'
import DetailsMain from '../detailsPage/detailsMain/DetailsMain'
import HourlyDetails from '../detailsPage/hourlyDetails/HourlyDetails'
import SunsetSunrise from '../detailsPage/sunsetSunrise/SunsetSunrise'
import Input from '../inputbox/Input'
import "./Home.css"
function Home() {
    
  return (
    <div className='body'>
        <Input />
       <DetailsMain/>
        </div>
  )
}

export default Home