import '../EventPage.css';
import React from 'react';

function Card(props) {
    console.log(props.data);
    return (
        <div>
            <input type="checkbox" id="popup"></input>
            <label for="popup">
                <img
                    src={process.env.PUBLIC_URL + '/images/eventimg.png'}
                    alt='event img'
                    width='100%'
                />
                <div className="card-title">
                    {props.data.title}
                </div>
            </label>
            <div>
                <div>
                    <label for="popup">x</label>
                    <div>{props.data.title}</div>
                    <div>{props.data.body}</div>
                </div>
                <label for="popup"></label>
            </div>
        </div>
    )
}

export default Card
