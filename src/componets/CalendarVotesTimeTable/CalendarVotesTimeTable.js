import React from "react";
import './CalendarVotesTimeTable.css';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";
import {events_calendar} from "../CalendarVotes/test_events_json";


const CalendarVotesTimeTable = (props) => {

      const {
          activeDay,
          activeDate,
          activeMonth,
          activeYear
    } = props;

       let currentDay = activeDay
       let currentDate = activeDate
       let currentMonth = activeMonth
       let currentYear = activeYear


       const currentDays = ['', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
       const currentMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

       const colors_circle = ['#49B3FF', '#FF8A00', '#4ED4A9', '#FF4970'];


       console.log(currentDate + '.' + currentMonth + '.' + currentYear)




    return (
        <div className={'calendar-votes-timetable__wrapper'}>
            <div>
                <CalendarVotesTimeTableDayVote calendarDate={`${currentDate} ${currentMonths[currentMonth]} ${currentYear} года`} dayWeek={currentDays[currentDay]} colorDay={'сегодня'}/>
            </div>
            <div className={'calendar-votes-timetable__hidden-border'}>
            </div>
            <div className={'calendar-votes-timetable__events-block'}>
                {
                    events_calendar.map((item) => {
                         return (
                             <CalendarVotesTimeTableListVote
                                   key={item.id}
                                   id={item.id}
                                   eventStartReg={currentDay ? 'Начало регистрации' : null}
                                   eventEndReg={currentDay ? 'Конец регистрации' : null}
                                   eventStartVote={currentDay ? 'Начало голосования' : null}
                                   eventEndVote={currentDay ? 'Конец голосования' : null}
                                   colorCircleStartReg={currentDay ? colors_circle[0] : null}
                                   colorCircleEndReg={currentDay ? colors_circle[1] : null}
                                   colorCircleStartVote={currentDay ? colors_circle[2] : null}
                                   colorCircleEndVote={currentDay ? colors_circle[3] : null}
                                   votingTheme={item.title}
                                   timeEventRegVote={item.event_end_time}
                             />
                         )})
                }
                {/*<CalendarVotesTimeTableListVote colorCircle={'#49B3FF'} eventName={'Начало регистрации'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>*/}
                {/*<CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>*/}
                {/*<CalendarVotesTimeTableListVote colorCircle={'#4ED4A9'} eventName={'Начало голосования'} timeEventRegVote={'14:00'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>*/}
                {/*<CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>*/}
                {/*<CalendarVotesTimeTableListVote colorCircle={'#FF4970'} eventName={'Конец голосования'} timeEventRegVote={'19:30'} votingTheme={'Выбор делегатов конференции в Ученый Совет СПбГУ'}/>*/}
            </div>
        </div>
    )
}
export default CalendarVotesTimeTable;