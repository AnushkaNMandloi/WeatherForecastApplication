import { DateTime } from 'luxon';

//1fa9ff4126d95b8db54f3897a208e91c
//e364420b6f196e34667cfa16dc5fd3cd
const KEY = "1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

//searchparams is an object that will automatically convert into a query
//we won't pass api key/ appid everytime we are trying to fetch the data
//searchparams in line 9 - we are using destructuring and we are adding searchparams and api key 

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: KEY }
    )

    return fetch(url)
        .then((res) => res.json());
};

//we are getting latitude longitude and other every information from the api
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,         //timezone of the location
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    //we only need some stuff from weather
    //main has other name - details
    //weather is an array and we are getting its first object
    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

// //we only neeed limited units (5)
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;   //we only need data for daily and hourly forecast
    //we have one date, we have a timezone, we are converting it to paris tim and we are taking out time out of it
    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    hourly = hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon
        };
    });
    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    //call onecall api which gives us hourly data
    //units - metrics to show everything in celscius, imperial to show everything in fehrenheit 
    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall",
        {
            lat,
            lon,
            exclude: "current, minutely, alerts",
            units: searchParams.units,
        }).then(formatForecastWeather);

    //return formattedCurrentWeather
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a'"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//function which is giving us a url for our icon
const iconUrlFromCode = (code) => 
`http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData

export {formatToLocalTime, iconUrlFromCode};