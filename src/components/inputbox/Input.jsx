import React, { createContext, useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "./Input.css"
const Input = ({setQuery})=>{
    const [city, setCity] = useState([])
   const [text, setText] = useState("")
    const searchCityHandle = ()=>{
        if(text !==null) setQuery({q:text})
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
             <input type="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
           <FontAwesomeIcon onClick={searchCityHandle} className="fontawsome" icon={faSearch} />
        </div>
    </div>
}

export default Input;
