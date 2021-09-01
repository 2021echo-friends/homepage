import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isToggled, setisToggled] = useState(false);
    const onclick = () => {
        setisToggled(false);
    }

    document.addEventListener('scroll', () => {
        let afterPosition = document.documentElement.scrollTop;
        let navBar = document.getElementById('navbar');

        if(afterPosition >= 80) {   
            navBar.style.background="white";
            navBar.style.boxShadow="rgba(149, 157, 165, 0.4) 0px 8px 24px"
        }
        else if (afterPosition < 80) {
            navBar.style.removeProperty('background');
            navBar.style.removeProperty('box-shadow');
        }
    })

    return (
        <nav className={isToggled ? 'navbar active' : 'navbar'} id='navbar'>
            <div className="navbar-inner">
                <Link to="/" className="nav-logo" onClick={onclick}>
                    ECOSTEP
                </Link>
                <ul className={isToggled ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <Link to="/intro" className="nav-link" onClick={onclick}>
                            어플 소개
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={onclick}>
                            현황
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={onclick}>
                            관련 행사
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={onclick}>
                            문의
                        </Link>
                    </li>
                </ul>
                <div onClick={() => setisToggled(!isToggled)} className="nav-icon">
                    {isToggled ? <FiX /> : <FiMenu />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
