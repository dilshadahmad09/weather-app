import { DateTime } from "luxon";

const API_KEY="248611b4874cf10cdfdace96277712c7";
const BASE_URL="https://api.openweathermap.org/data/2.5/";

 const getWeatherData = async (infoType, searchParams)=>{
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
    
    return fetch(url).then(res=>res.json());
}

const formatCurrentWeather = (data)=>{
    const {
        coord:{lat,lon},
        main:{temp, temp_min, temp_max, pressure, humidity},
        name,
        dt,
        sys:{sunrise, sunset, country},
        timezone,
        weather,
        wind:{speed}
    } = data;

    const {main:details, icon} = weather[0];
    return {lat, lon, temp,temp_min,temp_max, pressure, humidity,name, dt, sunrise, sunset, country, timezone, details, icon, speed};
}

const formatForecastWeather = (data)=>{
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d=>{
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
            main:d.weather[0].main
        }
    })

    hourly = hourly.slice(1,6).map(d=>{
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })
    return {timezone, daily, hourly};
}


const getFormattedWeatherData = async (searchParams)=>{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;
    const formattedForcastWeather = await getWeatherData('onecall', {
        lat, lon, exclude:"current, minutely, alerts", units:searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForcastWeather};
}

const formatToLocalTime = (secs, zone, format="cccc, 'dd LLL yyyy' | Local Time: 'hh:mm a'") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
const iconUrlFromCode =(code)=> `http://openweathermap.org/img/wn/${code}@2x.png`
export {formatToLocalTime,iconUrlFromCode, getFormattedWeatherData};