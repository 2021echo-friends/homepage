import './MainPage.css';
import React from 'react';
import MainHome from './Components/MainHome/MainHome';
import MainPoint from './Components/MainPoint/MainPoint';
import MainWay from './Components/MainWay/MainWay';
import MainStatus from './Components/MainStatus/MainStatus';

function MainPage() {
    return (
        <div>
            <div className="home-container">
                <MainHome />
            </div>
            <div className="point-container">
                <MainPoint />
            </div>
            <div className="way-container">
                <MainWay />
            </div>
            <div className="main-status-container">
                <MainStatus />
            </div>
        </div>
    )
}

export default MainPage
