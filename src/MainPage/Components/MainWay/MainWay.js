import '../../MainPage.css';
import React from 'react';

function MainWay() {
    return (
        <div className="way-inner">
            <div className="way-top">
                <div>
                    포인트 적립은 이렇게 할 수 있어요
                </div>
                <div>
                    <ul>
                        <li>
                            <p>STEP1</p>
                            <img
                                src={process.env.PUBLIC_URL + '/images/bag.png'}
                                width='110px'
                                height='160px'
                                alt='bag img'
                            />
                            <p>
                                가맹점에서 에코스텝의<br />
                                로고가 있는 제품을 구입해요
                            </p>
                        </li>
                        <li>
                            <p>STEP2</p>
                            <img
                                src={process.env.PUBLIC_URL + '/images/qr.png'}
                                width='80px'
                                height='160px'
                                alt='qr img'
                            />
                            <p>
                                에코스텝 어플에서<br />
                                QR코드를 촬영해요
                            </p>
                        </li>
                        <li>
                            <p>STEP3</p>
                            <img
                                src={process.env.PUBLIC_URL + '/images/point.png'}
                                width='180px'
                                height='160px'
                                alt='point img'
                            />
                            <p>
                                포인트 적립이 완료되었어요<br />
                                다른 제품 구입에 써보세요!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="way-bottom">
                <div>출석체크를 하거나 퀴즈를 해결해서 포인트를 얻을 수도 있어요</div>
                <div>
                    <ul>
                        <li>
                            <img
                                src={process.env.PUBLIC_URL + '/images/check.png'}
                                alt='check img'
                                width='130px'
                                height='140px'
                            />
                        </li>
                        <li>
                            <img
                                src={process.env.PUBLIC_URL + '/images/quiz.png'}
                                alt='check img'
                                width='105px'
                                height='130px'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainWay
