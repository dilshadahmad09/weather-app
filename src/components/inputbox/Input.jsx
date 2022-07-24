import React, { createContext, useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "./Input.css"
const Input = ({setQuery})=>{
    const [city, setCity] = useState("")
    // useEffect(()=>{
    //     setCity(text)
    // },[text])



    const searchCityHandle = ()=>{
        if(city !==null) setQuery({q:city})
    }
    const findCityByLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({lat, lon})
            })
            
        }
    }
    return <div>
        <div className="search-box">
            <FontAwesomeIcon onClick={findCityByLocation} className="fontawsome" icon={faLocationDot} />
             <input type="text" value={city}  onChange={(e)=>setCity(e.target.value)}/>
           <FontAwesomeIcon onClick={searchCityHandle} className="fontawsome" icon={faSearch} />
        </div>
    </div>
}

export default Input;
