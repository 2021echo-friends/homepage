import './AppIntro.css';
import React from 'react';

let banner = document.getElementsByClassName("bannerBox");
let bannerPos = 0;
const bannerAutoSlide = () => {
    if (bannerPos === -100 * (banner.length - 1)) {
        bannerPos = 100;
    }
    bannerPos -= 100;
    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = "translateX(" + bannerPos + "%)";
    }
}
let bannerSlideTime = setInterval(bannerAutoSlide, 3000);

var bannerMinHeight = 987654321;
var bannerImgs = document.getElementsByClassName("bannerImg");
for (var i = 0; i < bannerImgs.length; i++) {
    if (bannerImgs[i].naturalHeight < bannerMinHeight) {
        bannerMinHeight = bannerImgs[i].naturalHeight;
    }
}

function AppIntro() {
    return (
        <div className="intro-container">
            <div className="intro-inner">
                <div className="intro-screen">
                    <div className="banner">
                        <div className="img_container">
                            <div className="bannerBox">
                                <img
                                    className="bannerImg"
                                    src={process.env.PUBLIC_URL + '/images/slideimg1.jpg'}
                                    alt=""
                                />
                            </div>
                            <div className="bannerBox">
                                <img
                                    className="bannerImg"
                                    src={process.env.PUBLIC_URL + '/images/slideimg2.jpg'}
                                    alt=""
                                />
                            </div>
                            <div className="bannerBox">
                                <img
                                    className="bannerImg"
                                    src={process.env.PUBLIC_URL + '/images/slideimg3.jpg'}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-desc">
                    <div>?????? ?????? <span>ECOSTEP</span>??? <br />???????????????</div>
                    <p>
                        ????????? ????????? QR????????? ????????? ??? ?????????<br />
                        ????????? ????????? ????????? ??? ?????????<br />
                        ?????? ????????? ?????? ?????? ????????? ?????? ??? ?????????<br />
                    </p>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + '/images/googleplay.svg'}
                            alt="google play"
                            width="200px"
                        />
                        <img
                            src={process.env.PUBLIC_URL + '/images/appstore.svg'}
                            alt="google play"
                            width="200px"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppIntro
