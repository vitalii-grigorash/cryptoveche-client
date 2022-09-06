import React from "react";
import './StatusDayStartRegColorRed.css';

const StatusDayStartRegColorRed = (props) => {

    const {
        timeDate
    } = props;

    return (
            <>
                <span className={'status-day-start-reg-color__red-color-item'}>через 333 дня</span>
            </>
    )
}

export default StatusDayStartRegColorRed;