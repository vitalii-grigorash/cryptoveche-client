import React, {useEffect, useState} from "react";
import './StatusDayStartVoteColorGreen.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayStartVoteColorGreen = (props) => {

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
            <span className={'status-day-color__green-color-item'}>{eventTime.days}</span>
        </>
    )
}
export default StatusDayStartVoteColorGreen;