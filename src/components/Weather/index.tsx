import React from 'react';
import CurrentWeather from './Current';
import WeatherForecast from './Forecast';

type Props = {};

const Weather: React.FC<Props> = () => {
    return (
        <div>
            <p>Weather component</p>
            <CurrentWeather />
            <WeatherForecast />
        </div>
    );
};

export default Weather;
