import React from "react";
import './StatusDayStartVoteColorGreen.css';

const StatusDayStartVoteColorGreen = ({nameStatusDay}) => {


    return (
        <>
            <span className={'status-day-color__green-color-item'}>{nameStatusDay}</span>
        </>
    )
}

export default StatusDayStartVoteColorGreen;