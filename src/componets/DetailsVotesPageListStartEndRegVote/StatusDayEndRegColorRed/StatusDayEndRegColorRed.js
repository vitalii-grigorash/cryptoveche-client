import React from "react";
import './StatusDayEndRegColorRed.css';

const StatusDayEndRegColorRed = ({nameStatusDay}) => {


    return (
        <>
            <span className={'status-day-color__red-color-item'}>{nameStatusDay}</span>
        </>
    )
}

export default StatusDayEndRegColorRed;