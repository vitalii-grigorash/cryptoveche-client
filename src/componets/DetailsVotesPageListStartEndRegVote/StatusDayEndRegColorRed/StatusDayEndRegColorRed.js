import React, {useEffect, useState} from "react";
import './StatusDayEndRegColorRed.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayEndRegColorRed = (props) => {

    const {
        timeDate
    } = props;

    const defaultEventTime = {
        days: '0'
    }

    const [eventTime, setEventTime] = useState(defaultEventTime);

    useEffect(() => {
        updateRemainingVoteTime(timeDate)
    }, [timeDate])

    function updateRemainingVoteTime(countEventTime) {
        setEventTime(getRemainingTimePointEventsVote(countEventTime))
    }

    return (
        <>
            <span className={'status-day-color__red-color-item'}>{eventTime.days}</span>
        </>
    )
}
export default StatusDayEndRegColorRed;