import '../MainPage.css';
import React from 'react';
import CountUp from 'react-countup';

function MainHome() {
    return (
        <div className="home-inner">
            <div className="inner-top">
                <div className="top-left">
                    <div id="title-area">
                        <img
                            src={process.env.PUBLIC_URL + '/images/plant.png'}
                            alt='plant img'
                            width='60px'
                            height='50px'
                        />
                        <div id="inner-title">
                            지구를 지키는 한 걸음
                        </div>
                    </div>
                    <div id="title-desc">
                        <div>일상에서 시작하는 친환경 소비 프로젝트</div>
                        <div>지구를 지키는 일이 바로 우리를 지키는 길입니다</div>
                    </div>
                </div>
                <div className="top-right">
                    <div>
                        <span>
                            <CountUp
                                start={9500}
                                end={10000}
                                duration={0.6}
                                separator=","
                            />
                        </span>
                        <span>명이</span>
                    </div>
                    <div>
                        참여하고 있습니다.
                    </div>
                    {/* <button>
                        시작하기
                    </button> */}
                </div>
            </div>
            <div className="inner-bottom">
                <div className="bottom-left">
                    <img
                        src={process.env.PUBLIC_URL + '/images/main_trees.png'}
                        alt="tree img"
                        width="1070px"
                        height="350px"
                    />
                </div>
                <div className="bottom-right">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome
