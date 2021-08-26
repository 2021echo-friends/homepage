import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isToggled, setisToggled] = useState(false);
    const onclick = () => {
        setisToggled(false);
    }

    return (
        <nav className={isToggled ? 'navbar active' : 'navbar'}>
            <div className="navbar-inner">
                <Link to="/" className="nav-logo" onClick={onclick}>
                    ECOSTEP
                </Link>
                <ul className={isToggled ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={onclick}>
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
