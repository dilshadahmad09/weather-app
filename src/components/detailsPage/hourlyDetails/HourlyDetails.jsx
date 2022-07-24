import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import "./HourlyDetails.css"
const HourlyDetails = ({weather})=>{
   console.log("hourly",weather.hourly.map(x=>x.temp))
  let data =  {
    options: {
        xaxis: {
          categories: weather.hourly.map(x=>x.title)
        }
      },
     
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "temperature",
          data: weather.hourly.map(x=>x.temp + "°")
        }
      ]
    };          
 
  return (
      <>
    <div>
      <Chart
         type="area"
        options={data.options} series={data.series}  height={350}
      />  
    </div>
     <div className='pressure-humidity'>
     <div>
         <p>Pressure <br/> {weather.pressure}</p>
     </div>
     <div>
         <p>Humidity <br/> {weather.humidity}</p>
     </div>
 </div>
 </>
  )
  }
export default HourlyDetails;       
