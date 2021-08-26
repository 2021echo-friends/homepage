import './MainPage.css'
import React from 'react';
import MainHome from './Components/MainHome';
import MainPoint from './Components/MainPoint';

function MainPage() {
    return (
        <div>
           <div className="home-container">
              <MainHome/>
           </div>
           <div className="point-container">
               <MainPoint/>
           </div>
        </div>
    )
}

export default MainPage
