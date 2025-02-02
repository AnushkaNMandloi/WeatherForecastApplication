import './App.css';
//using unicons for variety in icons
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import DailyForecast from './components/DailyForecast';
import getFormattedWeatherData from './services/WeatherServices';
import { useEffect, useState } from 'react';

function App() {

  //usestate
  const [ query, setQuery ] = useState({ q: 'berlin' });
  const [ units, setUnits ] = useState('metric');
  const [ weather, setWeather ] = useState(null);

  //everytime we will change unit we'll fetch new data
  //everytime we change a location we'll fetch new data
  useEffect(() => {
    const fetchWeather = async () => {

      const message = query.q ? query.q : 'current location.';

      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {

          setWeather(data);
        });
      //console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  //change background color
  const formatBackground = () => {
    if (!weather) return 'from-green-700 to-gray-700'
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-green-700 to-gray-700'

    return 'from-yellow-600 to-orange-300'
  };

  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({q: 'london'});
  //   console.log(data);
  // };

  // fetchWeather();

  return (<div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 
  bg-gradient-to-br from-green-700 to-gray-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
    <TopButtons setQuery={setQuery} />
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

    {/* we want to load all these 4 stuff only when we have the weather */}

    {/* check if weather is not null */}
    {weather && (
      <div>
        <TimeAndLocation weather={weather} />
        <TemperatureAndDetails weather={weather} />

        <Forecast/>
        <DailyForecast/>
      </div>
    )}
  </div>
  );
}

export default App;
