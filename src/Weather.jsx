import React from "react";
import { days } from "./Utils";

const Weather = ({ dailyWeather }) => {
  const icon = dailyWeather.weather[0].icon;

  const dayNum = new Date(dailyWeather.dt * 1000).getDay();
  const day = days[dayNum];

  const avgTemp = Math.ceil(
    (dailyWeather.temp.min + dailyWeather.temp.max) / 2
  );

  return (
    <div className="weather-component">
      <div className="weather-component-day">
        <span>{day.slice(0, 3)}</span>
      </div>
      <div className="weather-component-icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="weather-component-temp">{avgTemp}°</div>
    </div>
  );
};

export default Weather;
