import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isToggled, setisToggled] = useState(false);
    const onclick = (id) => {
        setisToggled(false);
        
        const links = document.querySelectorAll("nav .navbar-inner ul li .nav-link");
        console.log(links)
        links.forEach((link) => {
            link.classList.remove("active");
            if(link.getAttribute("id") === id) {
                link.classList.add("active");
            }
        })
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
                        <Link to="/intro" id="intro" className="nav-link" onClick={() => onclick("intro")}>
                            어플 소개
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" id="status" className="nav-link" onClick={() => onclick("status")}>
                            현황
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" id="event" className="nav-link" onClick={() => onclick("event")}>
                            관련 행사
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" id="question" className="nav-link" onClick={() => onclick("question")}>
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
