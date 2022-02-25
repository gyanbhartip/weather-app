import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import WeatherToday from './WeatherToday';


const Weathers = () => {
    return (
        <div className='weather-container'>
            <div className="today">
                <WeatherToday />
            </div>
            <div className="week">
                <Weather />
                <Weather />
                <Weather />
                <Weather />
                <Weather />
                <Weather />
            </div>
        </div>
    )
}

export default Weathers;