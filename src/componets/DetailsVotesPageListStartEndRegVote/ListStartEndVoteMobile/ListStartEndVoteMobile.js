import React from "react";
import './ListStartEndVoteMobile.css';
import DataTime from "../../VotesStatusComponents/DateTime/DateTime";


const ListStartEndVoteMobile = ({nameStartEndVote}) => {


    return (
        <div className={'list-start-end-vote-mobile__wrapper'}>
            <span className={'list-start-end-vote-mobile__name-start-end-vote'}>{nameStartEndVote}</span>
            <div className={'list-start-end-vote-mobile__position-datetime'}>
                <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'09:00'}/>-
                <DataTime dateTimeDate={'05.01.2021'} dateTimeWatch={'18:00'}/>
            </div>
        </div>
    )
}

export default ListStartEndVoteMobile;