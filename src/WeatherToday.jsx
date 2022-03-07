import React from "react";

const WeatherToday = ({ current }) => {
  const icon = current.weather[0].icon;
  const currentTemp = Math.ceil(current.temp);
  return (
    <div className="weather-component-today">
      <div className="weather-component-icon-today">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>
      <div className="weather-component-day-temp-today">
        <div className="weather-component-day-today">
          <span>Today</span>
        </div>
        <div className="weather-component-temp-today">
          <span>{currentTemp}°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
