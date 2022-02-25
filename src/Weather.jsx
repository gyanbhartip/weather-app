import React from 'react'

const Weather = () => {
    return (
        <div className='weather-component'>
            <div className='weather-component-day'>
                tue
            </div>
            <div className='weather-component-icon'>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            </div>
            <div className='weather-component-temp'>
                25°
            </div>
        </div>
    )
}

export default Weather;