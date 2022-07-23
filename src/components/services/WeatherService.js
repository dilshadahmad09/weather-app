const API_KEY="cf4e7dc2f2b632e8e8caea937d4fd903";
const BASE_URL="https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (infoType, searchParams)=>{
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then(res=>res.json()).then(data => data);
}

