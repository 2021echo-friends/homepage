import '../EventPage.css';
import React from 'react';

function Card(props) {
    return (
        <div>
            <div className="card-box">
                <div className="card-image">
                    <img
                        // src={process.env.PUBLIC_URL + '/images/eventimg.png'}
                        src={`http://54.180.146.9:3001/auth-non/file?folder_id=${props.data.body_folder_id}&idx=0`}
                        alt='event img'
                        width='100%'
                    />
                </div>
                <div className="card-title">
                    {props.data.title}
                </div>
                <span></span>
            </div>
        </div>
    )
}

export default Card
