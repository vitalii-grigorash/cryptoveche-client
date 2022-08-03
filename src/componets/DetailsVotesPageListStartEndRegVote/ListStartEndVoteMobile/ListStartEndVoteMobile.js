import React from "react";
import './ListStartEndVoteMobile.css';
import DataTime from "../../VotesStatusComponents/DateTime/DateTime";

const ListStartEndVoteMobile = (props) => {

    const {
        title,
        startDate,
        startTime,
        endDate,
        endTime
    } = props;

    return (
        <div className={'list-start-end-vote-mobile__wrapper'}>
            <span className={'list-start-end-vote-mobile__name-start-end-vote'}>{title}</span>
            <div className={'list-start-end-vote-mobile__position-datetime'}>
                <DataTime dateTimeDate={startDate} dateTimeWatch={startTime} />-
                <DataTime dateTimeDate={endDate} dateTimeWatch={endTime} />
            </div>
        </div>
    )
}

export default ListStartEndVoteMobile;
