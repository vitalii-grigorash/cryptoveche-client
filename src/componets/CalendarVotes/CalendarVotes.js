import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';
import CalendarVotesStartEndRegVoteEvent from "./CalendarVotesStartEndRegVoteEvent/CalendarVotesStartEndRegVoteEvent";
import CalendarVotesTimeTable from "../CalendarVotesTimeTable/CalendarVotesTimeTable";
import calendar_row_back from "../../img/CalendarVotesTimeTable_back_row.svg";
import * as Events from "../../Api/Events";


const CalendarVotes = (props) => {

    const {
        requestHelper
    } = props;

    const [actualVotesDate, setActualVotesDate] = useState([])
    const [showCalendar, setShowCalendar] = useState(true)
    const [showCalendarList, setShowCalendarList] = useState(false);
    const [showBackRow, setShowBackRow] = useState(false)
    const [date, onChange] = useState(new Date())
    const [getEventDay, setGetEventDay] = useState(new Date())
    const [getEventDate, setGetEventDate] = useState(new Date())
    const [getEventMonth, setGetEventMonth] = useState(new Date())
    const [getEventYear, setGetEventYear] = useState(new Date())


    function getActualVotesDates(status) {
        const sortActualVotesCalendar = status.filter(el => el.status !== 'ended').filter(el => el.status !== 'quorum_unpresant').sort((a, b) => a.registration_end_time > b.registration_end_time ? 1 : -1);
        setActualVotesDate(sortActualVotesCalendar)
    }

        const startRegDate = actualVotesDate.map(item => item.registration_start_time).map(function (el) {
            return {date : el}
        })

        const endRegDate = actualVotesDate.map(item => item.registration_end_time).map(function (el) {
            return {date : el}
        })

        const startVoteDate = actualVotesDate.map(item => item.event_start_time).map(function (el) {
            return {date : el}
        })

        const endVoteDate = actualVotesDate.map(item => item.event_end_time).map(function (el) {
            return {date : el}
        })

    useEffect(() => {
        requestHelper(Events.getEvents)
            .then((data) => {
                getActualVotesDates(data)
            })
    }, [requestHelper]);

    function toggleCalendarShow() {
        setShowCalendar(true)
        setShowCalendarList(false)
        setShowBackRow(false)
    }

    function toggleCalendarHideGetCurrentDay(date) {
        setShowCalendar(false)
        setShowCalendarList(true)
        setShowBackRow(true)
        setGetEventDay(date.getDay())
        setGetEventDate(date.getDate())
        setGetEventMonth(date.getMonth())
        setGetEventYear(date.getFullYear())
    }

    const addColorDotsCalendar = ({ date }) => {
        const dateStartReg = startRegDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const dateEndReg = endRegDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const dateStartVote = startVoteDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const dateEndVote = endVoteDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        let content = [
           dateStartReg
                ? <div className={'blue__circle'}></div>
                : null,
            dateEndReg
                ? <div className={'orange__circle'}></div>
                : null,
            dateStartVote
                ? <div className={'green__circle'}></div>
                : null,
            dateEndVote
                ? <div className={'red__circle'}></div>
                : null
        ]
        return React.Children.toArray(content)
    }

    const activeEventButton = ({ date }) => {
        const activeDateStartReg = startRegDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const activeDateEndReg = endRegDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const activeDateStartVote = startVoteDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        const activeDateEndVote = endVoteDate.find((el) => {
            return (
                date.getDay() === new Date(el.date).getDay() &&
                date.getMonth() === new Date(el.date).getMonth() &&
                date.getDate() === new Date(el.date).getDate()
            )
        })
        if (activeDateStartReg) {
            return activeDateStartReg
                ? 'active_event_button'
                : null
        } else if (activeDateEndReg) {
            return activeDateEndReg
                ? 'active_event_button'
                : null
        } else if (activeDateStartVote) {
            return activeDateStartVote
                ? 'active_event_button'
                : null
        } else if (activeDateEndVote) {
            return activeDateEndVote
                ? 'active_event_button'
                : null
        } else return null;
    }

    return (
        <div className={'calendar-container main-content__elem1'}>
            <div className={'calendar-container-timetable__title-row'}>
                {showBackRow && (
                    <img onClick={() => toggleCalendarShow()} alt={'стрелка'} src={calendar_row_back} className={'title-row__row'} />
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
                            value={date}
                            onChange={onChange}
                            locale={"ru-RU"}
                            tileContent={addColorDotsCalendar}
                            tileClassName={activeEventButton}
                        />
                    </div>
                </div>
            )}
            {showCalendarList && (
                <CalendarVotesTimeTable
                    activeDay={getEventDay}
                    activeDate={getEventDate}
                    activeMonth={getEventMonth}
                    activeYear={getEventYear}
                    actualVotesDate={actualVotesDate}/>
            )
            }
        </div>
    )
}
export default CalendarVotes;
