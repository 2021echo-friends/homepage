import '../../MainPage.css';
import React from 'react';

function MainStatus() {
    return (
        <div className="status-inner">
            <img
                src={process.env.PUBLIC_URL + '/images/graph2.png'}
                alt='graph img'
                width='450px'
            />
            <div>
                <p><span>환경 개선 현황</span>을 볼 수 있어요</p>
                <div>
                    에코스텝의 제품 소비가<br />
                    환경에 얼마나 기여했는지 확인해보세요
                </div>
                <button>지금 보러가기</button>
            </div>
        </div>
    )
}

export default MainStatus
