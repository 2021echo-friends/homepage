import React from 'react';
import CountUp from 'react-countup';

function ChartItem(props) {
    console.log(props.data)
    return (
        <div className="chart-item">
            <div className="item-inner">
                <div>{props.data[0]}</div>
                <div>
                    <CountUp
                        start={0}
                        end={props.data[1]}
                        duration={0.6}
                        separator=","
                    />
                </div>
            </div>
        </div>
    )
}

export default ChartItem
