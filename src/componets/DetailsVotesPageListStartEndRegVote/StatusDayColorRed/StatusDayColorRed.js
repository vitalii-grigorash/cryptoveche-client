import React from "react";
import './StatusDayColorRed.css';

const StatusDayColorRed = ({nameStatusDay}) => {


    return (
            <>
                <span className={'status-day-color__red-color-item'}>{nameStatusDay}</span>
            </>
    )
}

export default StatusDayColorRed;