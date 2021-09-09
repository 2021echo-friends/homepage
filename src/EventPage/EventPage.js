import './EventPage.css';
import React, { useEffect, useState } from 'react';
import Card from './Components/Card';

function EventPage() {
    const [EventData, setEventData] = useState([]);

    useEffect(() => {
        fetch("http://54.180.146.9:3001/auth-non/post?per_page=100", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setEventData(response.data);
                console.log(response.data);
            })
    }, []);

    return (
        <div>
            <div className="event-banner-container">
                <div className="event-inner">
                    <div className="event-title">
                        <p>
                            에코스텝은 환경과 함께 합니다
                        </p>
                        <div>
                            저희는 환경의 날은 물론<br />
                            환경 관련 행사에도 주목하고 <br />
                            참여를 독려하고 있습니다
                        </div>
                        <p>
                            아래에서 어떤 행사들에<br />
                            참여할 수 있는지 확인해보세요
                        </p>
                    </div>
                </div>
            </div>
            <div className="event-card-container">
                <div className="event-card-inner">
                    <div className="card-section">
                        {
                            EventData.map((data, index) => {
                                return <Card data={data} key={index} />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default EventPage
