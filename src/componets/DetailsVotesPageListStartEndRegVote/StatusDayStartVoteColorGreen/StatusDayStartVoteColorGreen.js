import React, {useEffect, useState} from "react";
import './StatusDayStartVoteColorGreen.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayStartVoteColorGreen = (props) => {

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
            <span className={'status-day-color__green-color-item'}>{startRegTime.days}</span>
        </>
    )
}

export default StatusDayStartVoteColorGreen;