import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "./Input.css"
const Input = ()=>{
    return <div>
        <div className="search-box">
            <FontAwesomeIcon className="fontawsome" icon={faLocationDot} />
           <input type="text" />
           <FontAwesomeIcon className="fontawsome" icon={faSearch} />
        </div>
    </div>
}

export default Input;