import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import WeatherToday from "./WeatherToday";

const Weathers = ({ data }) => {
  return (
    <div className="weather-container">
      <div className="today">
        <WeatherToday current={data.current} />
      </div>
      <div className="week">
        {data.daily.map((dailyWeather, index = 0) => {
          if (index > 0 && index <= 6) {
            return (
              <Weather key={dailyWeather.dt} dailyWeather={dailyWeather} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Weathers;
