import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import "./HourlyDetails.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const HourlyDetails = ({weather})=>{
    console.log("line",weather.hourly.map(x=>x.temp.toFixed()))
  var data = {
      labels:weather.hourly.map(x=>x.temp.toFixed()+"°" + x.title),
    datasets: [{
      data: weather.hourly.map(x=>x.temp.toFixed()),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 10,
      },
    },
  }

  return (
      <>
    <div>
      <Line
        data={data}
        height={200}
        options={options}

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

