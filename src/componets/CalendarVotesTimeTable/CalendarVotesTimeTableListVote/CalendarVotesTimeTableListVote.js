import React from "react";
import './CalendarVotesTimeTableListVote.css';
import CalendarVotesStartEndRegVoteEvent
    from "../../CalendarVotes/CalendarVotesStartEndRegVoteEvent/CalendarVotesStartEndRegVoteEvent";


const CalendarVotesTimeTableListVote = ({colorCircle, eventName, timeEventRegVote, votingTheme}) => {


    return (
            <div className={'calendar-votes-timetable-list__wrapper'}>
                <div className={'calendar-votes-timetable-list__time-event'}>
                    <span className={'calendar-votes-timetable-list__time-vote'}>{timeEventRegVote}</span>
                    <span className={'calendar-votes-timetable-list__event-reg-vote'}>
                        <CalendarVotesStartEndRegVoteEvent colorCircle={colorCircle} eventName={eventName}/>
                    </span>
                </div>
                    <span>{votingTheme}</span>
            </div>
    )
}
export default CalendarVotesTimeTableListVote;