import './AppIntro.css';
import React from 'react';

var banner = document.getElementsByClassName("bannerBox");
var bannerPos = 0;

const bannerAutoSlide = () => {
    if (bannerPos === -100 * (banner.length - 1)) {
        bannerPos = 100;
    }
    bannerPos -= 100;
    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = "translateX(" + bannerPos + "%)";
    }
}
setInterval(bannerAutoSlide, 3000);

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
                                <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat1.jpg?raw=true" alt="" />
                            </div>
                            <div className="bannerBox">
                                <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat2.jpg?raw=true" alt="" />
                            </div>
                            <div className="bannerBox">
                                <img className="bannerImg" src="https://github.com/Yoonlang/web-programming/blob/master/html/assets/cat3.jpg?raw=true" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-desc">
                    <div>지금 바로 <span>ECOSTEP</span>을 <br />만나보세요</div>
                    <p>
                        구입한 제품의 QR코드를 촬영할 수 있어요<br />
                        포인트 내역을 확인할 수 있어요<br />
                        환경 퀴즈를 풀어 관련 지식도 쌓을 수 있어요<br />
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
