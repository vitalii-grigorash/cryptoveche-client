import React from "react";
import './StatusDayColorYellow.css';

const StatusDayColorYellow = ({nameStatusDay}) => {


    return (
        <>
            <span className={'status-day-color__yellow-color-item'}>{nameStatusDay}</span>
        </>
    )
}

export default StatusDayColorYellow;