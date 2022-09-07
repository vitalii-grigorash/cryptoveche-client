import React, {useState} from "react";
import './CalendarVotesTimeTable.css';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";
import {CurrentDayCalendarColorContext} from "../../contexts/CurrentDayCalendarColorContext";


const CalendarVotesTimeTable = (props) => {

      const {
          getEventDay,
          getEventMonth,
          getEventDate,
          actualVotesDate,
          formatTime,
          formatDate
    } = props;

       const currentEventDate = getEventDate.substring(0, 10).split('.').reverse().join('-')
       const currentDays = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
       const currentMonths = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
       const [colorCurrentDay, setColorCurrentDay] = useState('')


       const sortCurrentDateVote = actualVotesDate.filter(el => el.registration_start_time.substring(0, 10) === currentEventDate
               || el.registration_end_time.substring(0, 10) === currentEventDate
               || el.event_start_time.substring(0, 10) === currentEventDate
               || el.event_end_time.substring(0, 10) === currentEventDate)
               .map(obj => {
                   return obj;
               })

        return (
            <CurrentDayCalendarColorContext.Provider value={[colorCurrentDay, setColorCurrentDay]}>
                <div className={'calendar-votes-timetable__wrapper'}>
                    <div>
                        <CalendarVotesTimeTableDayVote
                            calendarDate={`${getEventDate.substring(0, 2)} ${currentMonths[getEventMonth + 1]} ${getEventDate.substring(6, 10)} года`}
                            dayWeek={currentDays[getEventDay]}/>
                    </div>
                    <div className={'calendar-votes-timetable__hidden-border'}>
                    </div>
                    <div className={'calendar-votes-timetable__events-block'}>
                        {
                            sortCurrentDateVote.map((item) => {
                                 return (
                                     <CalendarVotesTimeTableListVote
                                           key={item.id}
                                           id={item.id}
                                           currentEventDate={currentEventDate}
                                           votingTheme={item.title}
                                           timeStartReg={item.registration_start_time}
                                           timeEndReg={item.registration_end_time}
                                           timeStartVote={item.event_start_time}
                                           timeEndVote={item.event_end_time}
                                           formatTime={formatTime}
                                           formatDate={formatDate}
                                     />
                                 )})
                        }
                    </div>
                </div>
            </CurrentDayCalendarColorContext.Provider>
    )
}
export default CalendarVotesTimeTable;