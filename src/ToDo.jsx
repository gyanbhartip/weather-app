import React from 'react';
import Task from './Task';
import { customDateTime, TaskList } from './Utils';

const { hour, minute, tt, day, date, month, year } = customDateTime;

const ToDo = ({ geoData }) => {
    const { address: { city, country } } = geoData;
    return (
        <div className='todo-container'>
            <div className='left'>
                <div className='date-time'>
                    <div className='time'>
                        {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}
                        <div>{tt}</div>
                    </div>
                    <div className='date'>{day}, {date} {month} {year}</div>
                </div>
                <div className="todo">
                    {TaskList.map((tasks, index = 0) => {
                        const { id, time, task } = tasks;
                        return (
                            <div key={id}>
                                <Task time={time} task={task} />
                                {index < 2 && <div className="vertical-line"></div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right">
                <div className='place'>
                    <span>
                        {city}
                    </span>
                </div>
                <div className='country'>
                    <span>
                        {country}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ToDo;