import React from "react";
import './CalendarVotesTimeTableDayVote.css';

const CalendarVotesTimeTableDayVote = ({colorDay, dayWeek, calendarDay}) => {



    return (
            <div className={'calendar-votes-timetable-day__wrapper'}>
                <span className={'calendar-votes-timetable-day__calendar-date'}>{calendarDay}</span>
                <div className={'calendar-votes-timetable-day__day-week'}>
                    <span>{dayWeek},</span>
                    <span style={{color: '#49B3FF'}}>{colorDay}</span>
                </div>
            </div>
    )
}

export default CalendarVotesTimeTableDayVote;