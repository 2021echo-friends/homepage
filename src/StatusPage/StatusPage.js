import './StatusPage.css'
import React, {useState, useEffect} from 'react';
import Chart from './Chart';
import ChartItem from './ChartItem';

function StatusPage() {
    const [isChartData, setIsChartData] = useState(false);
    const [chartData, setChartData] = useState();

    useEffect(() => {
        fetch("http://54.180.146.9:3001/auth-non/statistics", {
            method: "GET",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setChartData(response.data);
            setIsChartData(true);
        })
    });
    
    return (
        <div className="status-container">
            <div className="status-inner">
                <div id="status-update">
                    <p>
                      [최근 업데이트: 2021-09-08 22:13:18]
                    </p>
                </div>
                <div id="status-desc">
                    에코스텝 제품 소비가 환경에 얼마나 기여하는지 확인할 수 있습니다<br/>
                    다음 지표는 대기중 유해물질 감소량을 나타냅니다
                </div>
                <div className="status-item">
                    {
                       isChartData && Object.entries(chartData).map((data, index) => {
                           return (
                               <ChartItem data={data} key={index}/>
                           )
                       })
                    }
                </div>
                <Chart />
            </div>
        </div>
    )
}

export default StatusPage
