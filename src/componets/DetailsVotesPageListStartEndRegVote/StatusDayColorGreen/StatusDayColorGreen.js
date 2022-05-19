import React from "react";
import './StatusDayColorGreen.css';

const StatusDayColorGreen = ({nameStatusDay}) => {


    return (
        <>
            <span className={'status-day-color__green-color-item'}>{nameStatusDay}</span>
        </>
    )
}

export default StatusDayColorGreen;