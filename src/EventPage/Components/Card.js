import '../EventPage.css';
import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={process.env.PUBLIC_URL + '/images/eventimg.png'}
                    alt='event img'
                    width='100%'
                />
            </div>
            <div className="card-title">
                {props.data.title}
            </div>
        </div>
    )
}

export default Card
