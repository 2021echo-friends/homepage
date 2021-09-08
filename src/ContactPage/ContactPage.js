import './ContactPage.css';
import React from 'react';

const teamData = [
    {
        name: "박세찬",
        role: "backend",
        dep: "경북대학교",
        email: "hasmi5452@gmail.com"
    },
    {
        name: "박정민",
        role: "app",
        dep: "경북대학교",
        email: "pjm9562@naver.com"
    },
    {
        name: "박재완",
        role: "app",
        dep: "경북대학교",
        email: "wjp1230@naver.com"
    },
    {
        name: "황아영",
        role: "app",
        dep: "경북대학교",
        email: "ayxxng73@gmail.com"
    },
    {
        name: "김주영",
        role: "web: 관리자 페이지",
        dep: "경북대학교",
        email: "nullyng@gmail.com"
    },
    {
        name: "조인후",
        role: "web: 홈페이지d",
        dep: "경북대학교",
        email: "inhudev@gmail.com"
    },
    {
        name: "최윤석",
        role: "web: 관리자 페이지",
        dep: "경북대학교",
        email: "cdt9473@gmail.com"
    },
]

function ContactPage() {
    return (
        <div className="contact-container">
            <div className="contact-inner">
                <div className="contact-top">
                    <div className="contact-title">
                        TEAM <span>ECOFREINDS</span>
                        <div>메일로 문의를 남겨주시면 성실히 답변드리겠습니다</div>
                    </div>
                    <div className="team-leader">
                        <div className="teams-inner">
                            <div>
                                <p>박세찬</p>
                                Backend<br />
                                경북대학교<br />
                                hasmi5452@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-teams">
                    <div>
                        <div className="teams-inner">
                            <div>
                                <p>박정민</p>
                                APP<br />
                                경북대학교<br />
                                pjm9562@naver.com
                            </div>
                        </div>
                        <div className="teams-inner">
                            <div>
                                <p>박재완</p>
                                APP<br />
                                경북대학교<br />
                                wjp1230@naver.com
                            </div>
                        </div>
                        <div className="teams-inner">
                            <div>
                                <p>황아영</p>
                                APP<br />
                                경북대학교<br />
                                ayxxng73@gmail.com
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="teams-inner">
                            <div>
                                <p>김주영</p>
                                WEB: 관리자 페이지<br />
                                경북대학교<br />
                                nullyng@gmail.com
                            </div>
                        </div>
                        <div className="teams-inner">
                            <div>
                                <p>조인후</p>
                                WEB: 홈페이지<br />
                                경북대학교<br />
                                inhudev@gmail.com
                            </div>
                        </div>
                        <div className="teams-inner">
                            <div>
                                <p>최윤석</p>
                                WEB: 관리자 페이지<br />
                                경북대학교<br />
                                cdt9473@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
