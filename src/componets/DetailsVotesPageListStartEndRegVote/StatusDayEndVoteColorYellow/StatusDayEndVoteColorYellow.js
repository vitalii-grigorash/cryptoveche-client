import React, {useEffect, useState} from "react";
import './StatusDayEndVoteColorYellow.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayEndVoteColorYellow = (props) => {

    const {
        timeDate
    } = props;

    const defaultVoteTime = {
        days: '0'
    }

    const [startRegTime, setStartRegTime] = useState(defaultVoteTime);

    useEffect(() => {
        updateRemainingVoteTime(timeDate)
    }, [timeDate])

    function updateRemainingVoteTime(count) {
        setStartRegTime(getRemainingTimePointEventsVote(count))
    }

    return (
        <>
            <span className={'status-day-color__yellow-color-item'}>{startRegTime.days}</span>
        </>
    )
}

export default StatusDayEndVoteColorYellow;