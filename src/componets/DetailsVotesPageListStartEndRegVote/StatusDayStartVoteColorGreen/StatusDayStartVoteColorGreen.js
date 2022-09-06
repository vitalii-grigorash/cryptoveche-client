import React from "react";
import './StatusDayStartVoteColorGreen.css';

const StatusDayStartVoteColorGreen = (props) => {

    const {
        timeDate
    } = props;

    return (
        <>
            <span className={'status-day-color__green-color-item'}>через 3333 дней</span>
        </>
    )
}

export default StatusDayStartVoteColorGreen;