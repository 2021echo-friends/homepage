import './MainPage.css';
import React from 'react';
import MainHome from './Components/MainHome/MainHome';
import MainPoint from './Components/MainPoint/MainPoint';
import MainWay from './Components/MainWay/MainWay';
import MainStatus from './Components/MainStatus/MainStatus';

function MainPage() {
    // fetch("http://54.180.146.9:3001/auth-non/login", {
    //     method: "POST",
    //     header: JSON.stringify({
    //         "Content-type":"application/json"
    //     }),
    //     body: JSON.stringify({
    //         email: "my7@example.com",
    //         password: "1234",
    //     })
    // })
    // .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    // })

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
