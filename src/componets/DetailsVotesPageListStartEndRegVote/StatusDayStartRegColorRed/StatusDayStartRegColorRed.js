import React, {useEffect, useState} from "react";
import './StatusDayStartRegColorRed.css';
import {
    getRemainingTimePointEventsVote
} from "../../../utils/GeneralFunctionForStatusDateTimeEventsVote/GeneralFunctionForStatusDateTimeEventsVote";

const StatusDayStartRegColorRed = (props) => {

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
                <span className={'status-day-start-reg-color__red-color-item'}>{startRegTime.days}</span>
            </>
    )
}
export default StatusDayStartRegColorRed;