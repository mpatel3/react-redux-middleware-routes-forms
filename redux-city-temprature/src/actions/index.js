import axios from 'axios';

const API_KEY = 'b4dd75144ff6e5a35c3b69d197ec277a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},ind`; // state code can be changed.

    const request = axios.get(url);

    return {
        type:'FETCH_WEATHER',
        payload: request
    }

}