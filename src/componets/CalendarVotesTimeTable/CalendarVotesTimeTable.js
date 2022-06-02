import React from "react";
import './CalendarVotesTimeTable.css';
import calendar_row_back from '../../img/CalendarVotesTimeTable_back_row.svg';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";

const CalendarVotesTimeTable = ({hiddenTimeTable}) => {


    return (
            <div className={'calendar-votes-timetable__wrapper'}>
                <div className={'calendar-votes-timetable__title-row'} hidden={hiddenTimeTable}>
                    <img alt={'стрелка'} src={calendar_row_back}/>
                    <span>Календарь голосований</span>
                </div>
                <div>
                  <CalendarVotesTimeTableDayVote calendarDate={'9 марта 2021 года'} dayWeek={'Вторник'} colorDay={'сегодня'}/>
                </div>
                <div className={'calendar-votes-timetable__hidden-border'}>

                </div>
                <div className={'calendar-votes-timetable__events-block'}>
                    <CalendarVotesTimeTableListVote colorCircle={'#49B3FF'} eventName={'Начало регистрации'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                    <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                    <CalendarVotesTimeTableListVote colorCircle={'#4ED4A9'} eventName={'Начало голосования'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                    <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                    <CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>
                </div>
            </div>
    )
}
export default CalendarVotesTimeTable;