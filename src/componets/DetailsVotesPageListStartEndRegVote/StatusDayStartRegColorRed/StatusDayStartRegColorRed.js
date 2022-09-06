import React from "react";
import './StatusDayStartRegColorRed.css';

const StatusDayStartRegColorRed = ({nameStatusDay}) => {


    return (
            <>
                <span className={'status-day-color__red-color-item'}>{nameStatusDay}</span>
            </>
    )
}

export default StatusDayStartRegColorRed;