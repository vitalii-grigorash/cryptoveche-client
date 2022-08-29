import React, {useContext, useEffect, useState} from "react";
import './CalendarVotesTimeTableListVote.css';
import {CurrentDayCalendarColorContext} from "../../../contexts/CurrentDayCalendarColorContext";


const CalendarVotesTimeTableListVote = (props) => {

    const {
        timeStartReg,
        timeEndReg,
        timeStartVote,
        timeEndVote,
        votingTheme,
        currentEventDate,
    } = props;

    const [startRegEvent, setStartRegEvent] = useState(false);
    const [endRegEvent, setEndRegEvent] = useState(false);
    const [startVoteEvent, setStartVoteEvent] = useState(false);
    const [endVoteEvent, setEndVoteEvent] = useState(false);
    const colors_circle = ['#49B3FF', '#FF8A00', '#4ED4A9', '#FF4970'];
    const [colorCurrentDay, setColorCurrentDay] = useContext(CurrentDayCalendarColorContext)

    useEffect(() => {
        if(timeStartReg.substring(0, 10) === currentEventDate) {
            setStartRegEvent(true)
            setColorCurrentDay('#49B3FF')
        }
        return () => setStartRegEvent()
    }, [currentEventDate, timeStartReg, setColorCurrentDay])

    useEffect(() => {
        if(timeEndReg.substring(0, 10) === currentEventDate) {
            setEndRegEvent(true)
            setColorCurrentDay('#FF8A00')
        }
        return () => setEndRegEvent()
    }, [currentEventDate, timeEndReg, setColorCurrentDay])

    useEffect(() => {
        if(timeStartVote.substring(0, 10) === currentEventDate) {
            setStartVoteEvent(true)
            setColorCurrentDay('#4ED4A9')
        }
        return () => setStartVoteEvent()
    }, [currentEventDate, timeStartVote, setColorCurrentDay])

    useEffect(() => {
        if(timeEndVote.substring(0, 10) === currentEventDate) {
            setEndVoteEvent(true)
            setColorCurrentDay('#FF4970')
        }
        return () => setEndVoteEvent()
    }, [currentEventDate, timeEndVote, setColorCurrentDay])

            return (
                    <div className={'calendar-votes-timetable-list__wrapper'}>
                        <div className={'calendar-votes-timetable-list__time-and-event'}>
                            <span className={'calendar-votes-timetable-list__time-vote'}>{startRegEvent? timeStartReg.substring(11, 16) : null}
                            </span>
                            <div className={'calendar-votes-timetable-list__event-reg-vote'}>
                                <div className={'event-reg-vote__circle-event-name'}>
                                    <div className={'circle-event-name__start-reg'}>
                                        <div className={'color__circle'} style={{backgroundColor: startRegEvent ? colors_circle[0] : null}}>
                                            </div>
                                            <span className={'circle-event-name__name-event'}>{startRegEvent ? 'Начало регистрации' : null}
                                            </span>
                                        </div>
                                        <span className={'calendar-votes-timetable-list__time-vote'}>{endRegEvent ? timeEndReg.substring(11, 16) : null}
                                        </span>
                                        <div className={'circle-event-name__end-reg'}>
                                            <div className={'color__circle-end-reg'} style={{backgroundColor: endRegEvent ? colors_circle[1] : null}}>
                                                </div>
                                                <span className={'circle-event-name__name-event'}>{endRegEvent ? 'Конец регистрации' : null}
                                            </span>
                                        </div>
                                        <span className={'calendar-votes-timetable-list__time-vote'}>{startVoteEvent ? timeStartVote.substring(11, 16) : null}
                                        </span>
                                        <div className={'circle-event-name__start-vote'}>
                                            <div className={'color__circle-start-vote'} style={{backgroundColor: startVoteEvent ? colors_circle[2] : null}}>
                                        </div>
                                        <span className={'circle-event-name__name-event'}>{startVoteEvent ? 'Начало голосования' : null}
                                        </span>
                                    </div>
                                    <span className={'calendar-votes-timetable-list__time-vote'}>{endVoteEvent ? timeEndVote.substring(11, 16) : null}
                                    </span>
                                    <div className={'circle-event-name__end-vote'} >
                                        <div className={'color__circle-end-vote'} style={{backgroundColor: endVoteEvent ? colors_circle[3] : null}}>
                                        </div>
                                        <span className={'circle-event-name__name-event'}>{endVoteEvent ? 'Конец голосования' : null}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className={'calendar-votes-timetable-list__voting-theme'}>{votingTheme}
                        </span>
                    </div>
    )
}
export default CalendarVotesTimeTableListVote;