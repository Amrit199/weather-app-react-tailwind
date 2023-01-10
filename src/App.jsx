import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Today from "./components/Today";
import Forecast from "./components/Forecast";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        console.log(weatherResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    axios
      .get(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      .then((response) => setCurrentWeather(response.data))
      .catch(console.log);

    axios
      .get(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      .then((response) => setForecast(response.data))
      .catch(console.log);
  }, [lat, lon]);
  console.log(lat, lon);
  return (
    <div>
      <Searchbar onSearchChange={handleOnSearchChange} />
      <div className="w-full h-screen md:flex items-center justify-between md:gap-4">
        {currentWeather && <Today data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
