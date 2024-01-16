import { Clock, Location, Todos, Weather } from '@/components';
import React from 'react';
import './app.css';

type Props = {};

const App: React.FC<Props> = () => {
    return (
        <main>
            <div className="app-container">
                <div className="top-container">
                    <div className="clock-todos__container">
                        <Clock />
                        <Todos />
                    </div>
                    <div className="location__container">
                        <Location />
                    </div>
                </div>
                <div className="bottom-container">
                    <Weather />
                </div>
            </div>
        </main>
    );
};

export default App;
