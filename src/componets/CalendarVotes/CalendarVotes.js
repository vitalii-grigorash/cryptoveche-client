import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';
import CalendarVotesStartEndRegVoteEvent from "./CalendarVotesStartEndRegVoteEvent/CalendarVotesStartEndRegVoteEvent";
import CalendarVotesTimeTable from "../CalendarVotesTimeTable/CalendarVotesTimeTable";
import {events_calendar} from "./test_events_json";
import calendar_row_back from "../../img/CalendarVotesTimeTable_back_row.svg";





const CalendarVotes = () => {

    const [showCalendar, setShowCalendar] = useState(true)
    const [showCalendarList, setShowCalendarList] = useState(false);
    const [showBackRow, setShowBackRow] = useState(false)
    const [valueData, setValueData] = useState(new Date());
    const [getEventDay, setGetEventDay] = useState(new Date())
    const [getEventDate, setGetEventDate] = useState(new Date())
    const [getEventMonth, setGetEventMonth] = useState(new Date())
    const [getEventYear, setGetEventYear] = useState(new Date())


<<<<<<< HEAD
    function clickDays() {
        // console.log('Click Days');
=======
    const dayStartVote = new Date(events_calendar[0].event_start_time).getDate()
    const monthStartVote = new Date(events_calendar[0].event_start_time).getMonth()
    const yearStartVote = new Date(events_calendar[0].event_start_time).getFullYear()

    const dayEndVote = new Date(events_calendar[0].event_end_time).getDate()
    const monthEndVote = new Date(events_calendar[0].event_end_time).getMonth()
    const yearEndVote = new Date(events_calendar[0].event_end_time).getFullYear()

    const dayStartReg = new Date(events_calendar[0].registration_start_time).getDate()
    const monthStartReg = new Date(events_calendar[0].registration_start_time).getMonth()
    const yearStartReg = new Date(events_calendar[0].registration_start_time).getFullYear()

    const dayEndReg = new Date(events_calendar[0].registration_end_time).getDate()
    const monthEndReg = new Date(events_calendar[0].registration_end_time).getMonth()
    const yearEndReg = new Date(events_calendar[0].registration_end_time).getFullYear()

    const onChange = date => {
        if (date instanceof Date) {
            setValueData(date)
        }
    }
    function toggleCalendarShow() {
        setShowCalendar(true)
        setShowCalendarList(false)
        setShowBackRow(false)
    }

    const toggleCalendarHideGetCurrentDay = (date) => {
        setShowCalendar(false)
        setShowCalendarList(true)
        setShowBackRow(true)
        setGetEventDay(date.getDay())
        setGetEventDate(date.getDate())
        setGetEventMonth(date.getMonth())
        setGetEventYear(date.getFullYear())
    }

    const addColorDotsCalendar = ({date}) => {
        const dateRegVote = {
            searchStartRegDate: date.getDate() === dayStartReg && date.getMonth() === monthStartReg && date.getFullYear() === yearStartReg,
            searchEndRegDate: date.getDate() === dayEndReg && date.getMonth() === monthEndReg && date.getFullYear() === yearEndReg,
            searchStartVote: date.getDate() === dayStartVote && date.getMonth() === monthStartVote && date.getFullYear() === yearStartVote,
            searchEndVote: date.getDate() === dayEndVote && date.getMonth() === monthEndVote && date.getFullYear() === yearEndVote
        }
        const content = [
            dateRegVote.searchStartRegDate
                ? <div className={'blue__circle'}></div>
                : null,
            dateRegVote.searchEndRegDate
                ? <div className={'orange__circle'}></div>
                : null,
            dateRegVote.searchStartVote
                ? <div className={'green__circle'}></div>
                : null,
            dateRegVote.searchEndVote
                ? <div className={'red__circle'}></div>
                : null
        ]
        return React.Children.toArray(content)
    }

    const activeEventButton = ({date}) => {
        const activeBtnRegVote = {
            startReg: date.getDate() === dayStartReg && date.getMonth() === monthStartReg && date.getFullYear() === yearStartReg,
            endReg: date.getDate() === dayEndReg && date.getMonth() === monthEndReg && date.getFullYear() === yearEndReg,
            startVote: date.getDate() === dayStartVote && date.getMonth() === monthStartVote && date.getFullYear() === yearStartVote,
            endVote: date.getDate() === dayEndVote && date.getMonth() === monthEndVote && date.getFullYear() === yearEndVote
        }
        if (activeBtnRegVote.startReg) {
            return activeBtnRegVote.startReg
                ? 'active_event_button'
                : null
        } else if (activeBtnRegVote.endReg) {
            return activeBtnRegVote.endReg
                ? 'active_event_button'
                : null
        } else if (activeBtnRegVote.startVote) {
            return activeBtnRegVote.startVote
                ? 'active_event_button'
                : null
        } else if (activeBtnRegVote.endVote) {
            return activeBtnRegVote.endVote
                ? 'active_event_button'
                : null
        } else return null;
>>>>>>> e178d0584be038d8233e5184f9d2471e8e01d24f
    }

    return (
        <div className={'calendar-container main-content__elem1'}>
            <div className={'calendar-container-timetable__title-row'}>
                {showBackRow && (
                    <img onClick={() => toggleCalendarShow()} alt={'стрелка'} src={calendar_row_back} className={'title-row__row'}/>
                )}
                <span>Календарь голосований</span>
            </div>
            {showCalendar && (
                <div>
                    <div className={'calendar-container__run-end-vote'}>
                        <div className={'run-end-vote'}>
                            <CalendarVotesStartEndRegVoteEvent colorCircle={'#49B3FF'} eventName={'Начало регистрации'} />
                            <CalendarVotesStartEndRegVoteEvent colorCircle={'#FF8A00'} eventName={'Конец регистрации'} />
                        </div>
                        <div className={'run-end-vote'}>
                            <CalendarVotesStartEndRegVoteEvent colorCircle={'#4ED4A9'} eventName={'Начало голосования'} />
                            <CalendarVotesStartEndRegVoteEvent colorCircle={'#FF4970'} eventName={'Конец голосования'} />
                        </div>
                    </div>
                    <div className={'calendar-block'}>
                        <Calendar
                            onClickDay={toggleCalendarHideGetCurrentDay}
                            value={valueData}
                            onChange={onChange}
                            locale={"ru-RU"}
                            tileContent={addColorDotsCalendar}
                            tileClassName={activeEventButton}
                        />
                    </div>
                </div>
            )}
            {showCalendarList && (
                <CalendarVotesTimeTable activeDay={getEventDay} activeDate={getEventDate} activeMonth={getEventMonth} activeYear={getEventYear}/>
            )
            }
        </div>
    )
}

export default CalendarVotes;
