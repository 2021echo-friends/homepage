import './Footer.css';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <div className="footer-logo">
                        ECOSTEP
                    </div>
                    <div>
                        대구광역시 북구 대학로 80, 경북대학교
                    </div>
                    <div>
                        대표번호 010-1234-5678
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        © ECOFRIENDS. ALL RIGHTS RESERVED.
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-icons">
                        <div>
                            <FaFacebookSquare />
                        </div>
                        <div>
                            <FaInstagramSquare />
                        </div>
                        <div>
                            <FaBootstrap />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
