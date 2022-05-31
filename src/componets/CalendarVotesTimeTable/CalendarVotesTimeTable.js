import React from "react";
import './CalendarVotesTimeTable.css';
import calendar_row_back from '../../img/CalendarVotesTimeTable_back_row.svg';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";

const CalendarVotesTimeTable = ({hiddenTimeTable}) => {


    return (
            <div className={'calendar-votes-timetable__wrapper'} hidden={hiddenTimeTable}>
                <div className={'calendar-votes-timetable__title-row'}>
                    <img alt={'стрелка'} src={calendar_row_back}/>
                    <span>Календарь голосований</span>
                </div>
                <CalendarVotesTimeTableDayVote calendarDay={'9 марта 2021 года'} dayWeek={'Вторник'} colorDay={'сегодня'}/>
            </div>
    )
}
export default CalendarVotesTimeTable;