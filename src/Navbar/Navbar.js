import './Navbar.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isToggled, setisToggled] = useState(false);

    return (
       <nav className="navbar">
           <Link to="/" className="nav-logo">
               Logo
           </Link>
           <ul className="nav-links">
               <li className="nav-item">
                   <Link to="/" className="nav-link">
                       어플 소개
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to="/" className="nav-link">
                       현황
                   </Link>
               </li>
               <li className="nav-item">
                   <Link to="/" className="nav-link">
                       관련 행사
                   </Link>
               </li>
           </ul>
           <div onClick={() => setisToggled(!isToggled)} className="nav-icon">
               {isToggled ? <FiX/> : <FiMenu/>}
           </div>
       </nav>
    )
}

export default Navbar
