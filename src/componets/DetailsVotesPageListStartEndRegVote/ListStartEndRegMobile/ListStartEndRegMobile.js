import React from "react";
import './ListStartEndRegMobile.css';
import DataTime from "../../VotesStatusComponents/DateTime/DateTime";

const ListStartEndRegMobile = (props) => {

    const {
        title,
        startDate,
        startTime,
        endDate,
        endTime
    } = props;

    return (
        <div className={'list-start-end-reg-mobile__wrapper'}>
            <span className={'list-start-end-reg-mobile__name-start-end-reg'}>{title}</span>
            <div className={'list-start-end-reg-mobile__position-datetime'}>
                <DataTime dateTimeDate={startDate} dateTimeWatch={startTime} />-
                <DataTime dateTimeDate={endDate} dateTimeWatch={endTime} />
            </div>
        </div>
    )
}

export default ListStartEndRegMobile;
