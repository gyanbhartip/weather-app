import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./ToDo";
import Weathers from "./Weathers";

const App = () => {
  const [weatherUrl, setWeatherUrl] = useState();
  const [geoUrl, setGeoUrl] = useState();
  const [weatherData, setWeatherData] = useState({});
  const [geoData, setGeoData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setWeatherUrl(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_OPENWEATHERMAP_APPID}`
      );
      setGeoUrl(
        `https://eu1.locationiq.com/v1/reverse.php?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${process.env.REACT_APP_LOCTIONIQ_KEY}`
      );
    });
    const fetchWeatherData = async () => {
      if (weatherUrl) {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        setWeatherData(data);
      }
    };
    fetchWeatherData();
  }, [weatherUrl]);

  useEffect(() => {
    const fetchGeoData = async () => {
      if (geoUrl) {
        const response = await fetch(geoUrl);
        const data = await response.json();
        setGeoData(data);
      }
    };
    fetchGeoData();
  }, [geoUrl]);

  return (
    <div className="app-main">
      {Object.keys(geoData).length > 0 && <ToDo geoData={geoData} />}
      {Object.keys(weatherData).length > 0 && <Weathers data={weatherData} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
