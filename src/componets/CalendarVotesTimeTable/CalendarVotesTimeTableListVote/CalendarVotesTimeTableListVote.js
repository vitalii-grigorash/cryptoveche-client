import React from "react";
import './CalendarVotesTimeTableListVote.css';
import CalendarVotesStartEndRegVoteEvent
    from "../../CalendarVotes/CalendarVotesStartEndRegVoteEvent/CalendarVotesStartEndRegVoteEvent";


const CalendarVotesTimeTableListVote = (props) => {

    const {
        colorCircleStartReg,
        colorCircleEndReg,
        colorCircleStartVote,
        colorCircleEndVote,
        eventStartReg,
        eventEndReg,
        eventStartVote,
        eventEndVote,
        timeEventRegVote,
        eventTimeStartReg,
        eventTimeEndReg,
        eventTimeStartVote,
        eventTimeEndVote,
        votingTheme
    } = props;

            return (
                    <div className={'calendar-votes-timetable-list__wrapper'}>
                        <div className={'calendar-votes-timetable-list__time-and-event'}>
                            <span className={'calendar-votes-timetable-list__time-vote'}>{eventTimeStartReg}</span>
                            <div className={'calendar-votes-timetable-list__event-reg-vote'}>
                                {/*<CalendarVotesStartEndRegVoteEvent colorCircle={colorCircle} eventName={eventName}/>*/}
                                <div className={'event-reg-vote__circle-event-name'}>
                                        <div className={'color__circle'} style={{backgroundColor: colorCircleStartReg}}></div>
                                        <span className={'calendar-votes-start-end-reg-vote__name-event'}>{eventStartReg}</span>
                                    <span className={'calendar-votes-timetable-list__time-vote'}>{eventTimeEndReg}</span>
                                    <div className={'circle-event-name__end-reg'}>
                                        <div className={'color__circle-end-reg'} style={{backgroundColor: colorCircleEndReg}}></div>
                                        <span className={'calendar-votes-start-end-reg-vote__name-event'}>{eventEndReg}</span>
                                    </div>
                                    <span className={'calendar-votes-timetable-list__time-vote'}>{eventTimeStartVote}</span>
                                    <div className={'circle-event-name__start-vote'}>
                                        <div className={'color__circle-start-vote'} style={{backgroundColor: colorCircleStartVote}}></div>
                                        <span className={'calendar-votes-start-end-reg-vote__name-event'}>{eventStartVote}</span>
                                    </div>
                                    <span className={'calendar-votes-timetable-list__time-vote'}>{eventTimeEndVote}</span>
                                    <div className={'circle-event-name__end-vote'} >
                                        <div className={'color__circle-end-vote'} style={{backgroundColor: colorCircleEndVote}}></div>
                                        <span className={'calendar-votes-start-end-reg-vote__name-event'}>{eventEndVote}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <span className={'calendar-votes-timetable-list__voting-theme'}>{votingTheme}</span>
                    </div>
    )
}
export default CalendarVotesTimeTableListVote;