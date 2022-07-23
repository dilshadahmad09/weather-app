const API_KEY="cf4e7dc2f2b632e8e8caea937d4fd903";
const BASE_URL="https://api.openweathermap.org/data/2.5/";

 const getWeatherData = async (infoType, searchParams)=>{
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
    console.log(url)
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

const getFormattedWeatherData = async (searchParams)=>{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(data=>formatCurrentWeather(data));

    const formattedForcastWeather = await getWeatherData('onecall', {
        lat, lon, exclude:"current, minutely, alerts", units:searchParams.units
    })

    return formattedCurrentWeather;
}

export default getFormattedWeatherData;