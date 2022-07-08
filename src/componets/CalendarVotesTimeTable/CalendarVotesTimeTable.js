import React, {useEffect, useMemo} from "react";
import './CalendarVotesTimeTable.css';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";
// import {events_calendar} from "./test_events_json";

const CalendarVotesTimeTable = ({active}) => {

       let currentDate = active;
       console.log(currentDate)

       useEffect(() => {
               if(currentDate === 26) {
                   console.log('succsecc')

                   
               }
       },[currentDate])


    return (
        <div className={'calendar-votes-timetable__wrapper'}>
            <div>
                <CalendarVotesTimeTableDayVote calendarDate={'9 марта 2022 года'} dayWeek={'Вторник'} colorDay={'сегодня'}/>
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