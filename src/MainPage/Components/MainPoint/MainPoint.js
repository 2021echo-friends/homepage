import '../../MainPage.css';
import React from 'react';

function MainPoint() {
    return (
        <div className="point-inner">
            <div className="point-top">
                <div className="point-top-title">
                    <div>가치있는 소비,</div>
                    <div>
                        <span>ECOSTEP</span>
                        {/* <img src={process.env.PUBLIC_URL + '/images/highlight.png'}/> */}
                        에서 시작하세요
                    </div>
                </div>
            </div>
            <div className="point-bottom">
                <div className="point-bottom-img">
                    <img 
                        src={process.env.PUBLIC_URL + '/images/main_products.png'} 
                        alt='main product img'
                        width='500px'
                        style={{paddingTop:'30px'}}
                    />
                </div>
                <div className="point-bottom-desc">
                    <div>
                        에코스텝 제품을 구입하고 <br/> 
                        에코포인트를 적립할 수 있습니다
                    </div>
                    <div>
                        포인트를 모아 다시 에코스텝 제품을 <br/> 
                        구입할 수 있어요
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPoint
