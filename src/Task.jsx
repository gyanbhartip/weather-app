import React from 'react'

const Task = ({ time, task }) => {
    return (
        <>
            <div className="task-container">
                <div className="task-time">
                    <span>{time}</span>
                </div>
                <div className="task">
                    <span>{task}</span>
                </div>
            </div>
        </>
    )
}

export default Task;