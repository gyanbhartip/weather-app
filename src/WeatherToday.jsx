import React from 'react'

const Weather = () => {
    return (
        <div className='weather-component-today'>
            <div className='weather-component-icon-today'>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            </div>
            <div className='weather-component-temp-today'>
                <div className='weather-component-day-today'>
                    Today
                </div>
                25°
            </div>
        </div>
    )
}

export default Weather;