import React from 'react';

type Props = {};

const Clock: React.FC<Props> = () => {
    return (
        <div>
            <span>
                <h1>12:30</h1>
                <h4>AM</h4>
            </span>
            <span>
                <h3>Wednesday, 17 Jan 2024</h3>
            </span>
        </div>
    );
};

export default Clock;
