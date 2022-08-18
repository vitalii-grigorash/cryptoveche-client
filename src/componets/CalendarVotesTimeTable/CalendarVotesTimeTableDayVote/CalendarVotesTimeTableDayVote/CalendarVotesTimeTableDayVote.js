import React, {useContext} from "react";
import './CalendarVotesTimeTableDayVote.css';
import {CurrentDayCalendarColorContext} from "../../../../contexts/CurrentDayCalendarColorContext";

const CalendarVotesTimeTableDayVote = (props) => {

    const {
        dayWeek, calendarDate
    } = props;

    const [colorCurrentDay] = useContext(CurrentDayCalendarColorContext)

    return (
            <div className={'calendar-votes-timetable-day__wrapper'}>
                <span className={'calendar-votes-timetable-day__calendar-date'}>{calendarDate}</span>
                <div className={'calendar-votes-timetable-day__day-week'}>
                    <span>{dayWeek},</span>
                    <span style={{color: colorCurrentDay}}>сегодня</span>
                </div>
            </div>
    )
}
export default CalendarVotesTimeTableDayVote;