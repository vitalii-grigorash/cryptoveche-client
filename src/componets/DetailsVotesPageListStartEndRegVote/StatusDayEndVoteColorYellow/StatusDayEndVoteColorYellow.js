import React, {useEffect, useState} from "react";
import './StatusDayEndVoteColorYellow.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayEndVoteColorYellow = (props) => {

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
            <span className={'status-day-color__yellow-color-item'}>{eventTime.days}</span>
        </>
    )
}
export default StatusDayEndVoteColorYellow;