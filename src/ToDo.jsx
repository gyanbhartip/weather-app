import React from 'react';
import Task from './Task';

const time = new Date().toLocaleTimeString();
const date = new Date().toDateString();

const ToDo = () => {
    return (
        <div className='todo-container'>
            <div className='left'>
                <div className='date-time'>
                    <h5>
                        {time}
                    </h5>
                    <h6>
                        {date}
                    </h6>
                </div>
                <div className="todo">
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
            <div className="right">
                <div>
                    <h6 className='place'>Bangalore</h6>
                </div>
                <div>
                    <h6 className='country'>India</h6>
                </div>
            </div>
        </div>
    )
}

export default ToDo;