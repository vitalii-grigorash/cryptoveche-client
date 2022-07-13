import React from "react";
import './CalendarVotesTimeTableDayVote.css';

const CalendarVotesTimeTableDayVote = (props) => {

    const {
        colorDay, dayWeek, calendarDate
    } = props;

    return (
            <div className={'calendar-votes-timetable-day__wrapper'}>
                <span className={'calendar-votes-timetable-day__calendar-date'}>{calendarDate}</span>
                <div className={'calendar-votes-timetable-day__day-week'}>
                    <span>{dayWeek},</span>
                    <span style={{color: colorDay}}>сегодня</span>
                </div>
            </div>
    )
}

export default CalendarVotesTimeTableDayVote;