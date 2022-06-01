import React from "react";
import './CalendarVotesStartEndRegVoteEvent.css';

const CalendarVotesStartEndRegVoteEvent = ({eventName, colorCircle}) => {


    return (
            <div className={'calendar-votes-start-end-reg-vote__wrapper'}>
                <div className={'color__circle'} style={{backgroundColor: colorCircle}}></div>
                <span className={'calendar-votes-start-end-reg-vote__name-event'}>{eventName}</span>
            </div>
    )
}

export default CalendarVotesStartEndRegVoteEvent;