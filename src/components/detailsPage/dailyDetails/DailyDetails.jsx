import React from "react";
import "./DailyDetails.css"

const DailyDetails = ({weather:{daily}, iconUrlFromCode})=>{
   
    return <>
        <div className="daily-main">
           {daily.map((data, i)=>{
           return  <div key={i} className="daily-items">
                <p>{data.title}</p>
                <p>{data.temp.toFixed()}°</p>
                <img src={iconUrlFromCode(data.icon)} alt="" />
                <p>{data.main}</p>
            </div>
           })}
        </div>
    </>
}


export default DailyDetails;