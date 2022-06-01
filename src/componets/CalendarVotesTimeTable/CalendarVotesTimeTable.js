import React from "react";
import './CalendarVotesTimeTable.css';
import calendar_row_back from '../../img/CalendarVotesTimeTable_back_row.svg';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";

const CalendarVotesTimeTable = ({hiddenTimeTable}) => {


    return (
            <div className={'calendar-votes-timetable__wrapper'} hidden={hiddenTimeTable}>
                <div className={'calendar-votes-timetable__title-row'}>
                    <img alt={'стрелка'} src={calendar_row_back}/>
                    <span>Календарь голосований</span>
                </div>
                <CalendarVotesTimeTableDayVote calendarDay={'9 марта 2021 года'} dayWeek={'Вторник'} colorDay={'сегодня'}/>
                <CalendarVotesTimeTableListVote colorCircle={'#49B3FF'} eventName={'Начало регистрации'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                <CalendarVotesTimeTableListVote colorCircle={'#4ED4A9'} eventName={'Начало голосования'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
            </div>
    )
}
export default CalendarVotesTimeTable;