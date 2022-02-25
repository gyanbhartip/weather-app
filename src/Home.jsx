import React, { useState, useEffect } from 'react';
import ToDo from "./ToDo";
import Weathers from "./Weathers";
import data from "./data";

// const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=13.09&lon=77.63&exclude=hourly,minutely,alerts&appid={API_KEY}';
// const url = 'https://api.github.com/users';

const Home = () => {

    const [weatherData, setWeatherData] = useState(data);
    // useEffect(async () => {
    //     const response = await fetch(url);
    //     const responseJson = await response.json();
    //     console.log(responseJson);
    //     setWeatherData(responseJson);
    // }, []);
    // console.log(weatherData.current);

    return (
        <div className="app-container">
            <div className="app-main">
                <ToDo />
                <Weathers />
            </div>
        </div>
    )
}

export default Home