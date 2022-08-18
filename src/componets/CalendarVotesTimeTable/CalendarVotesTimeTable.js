import React, {useEffect, useState} from "react";
import './CalendarVotesTimeTable.css';
import CalendarVotesTimeTableDayVote
    from "./CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote/CalendarVotesTimeTableDayVote";
import CalendarVotesTimeTableListVote from "./CalendarVotesTimeTableListVote/CalendarVotesTimeTableListVote";



const CalendarVotesTimeTable = (props) => {

      const {
          activeDay,
          activeDate,
          activeMonth,
          activeYear,
          actualVotesDate
    } = props;

       let currentDay = activeDay;
       let currentDate = activeDate;
       let currentMonth = activeMonth + 1;
       let currentYear = activeYear;

       const currentEventDate = currentYear + '-' + 0 + currentMonth + '-' + currentDate;
       const currentDays = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
       const currentMonths = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
       const [colorEventDay, setColorEventDay] = useState('#49B3FF')

       const sortCurrentDateVote = actualVotesDate.filter(el => el.registration_start_time.substring(0, 10) === currentEventDate
           || el.registration_end_time.substring(0, 10) === currentEventDate
           || el.event_start_time.substring(0, 10) === currentEventDate
           || el.event_end_time.substring(0, 10) === currentEventDate)
           .map(obj => {
               return obj;
           })

           console.log(currentDay)
    return (
            <div className={'calendar-votes-timetable__wrapper'}>
                <div>
                    <CalendarVotesTimeTableDayVote calendarDate={`${currentDate} ${currentMonths[currentMonth]} ${currentYear} года`} dayWeek={currentDays[currentDay]} colorDay={colorEventDay}/>
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
                                 />
                             )})
                    }
                </div>
            </div>
    )
}
export default CalendarVotesTimeTable;