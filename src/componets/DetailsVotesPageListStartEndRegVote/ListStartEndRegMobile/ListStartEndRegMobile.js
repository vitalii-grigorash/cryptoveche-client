import React from "react";
import './ListStartEndRegMobile.css';
import DataTime from "../../VotesStatusComponents/DateTime/DateTime";


const ListStartEndRegMobile = ({nameStartEndRegVote}) => {


    return (
            <div className={'list-start-end-reg-mobile__wrapper'}>
                <span className={'list-start-end-reg-mobile__name-start-end-reg'}>{nameStartEndRegVote}</span>
                <div className={'list-start-end-reg-mobile__position-datetime'}>
                    <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'09:00'}/>-
                    <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'18:00'}/>
                </div>
            </div>
    )
}

export default ListStartEndRegMobile;