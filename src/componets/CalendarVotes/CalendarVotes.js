import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';

const CalendarVotes = () => {
    const [value, onChange] = useState(new Date());
    const allMonthValues = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Oктябрь",
        "Ноябрь",
        "Декабрь"
    ];

    const [selectedDate, setSelectedDate] = useState();
    const [calendarText, setCalendarText] = useState(`Дата не назначена`);
    const handleDateChange = (value) => {
        setSelectedDate(value);
        setCalendarText(`Выбранная дата ${value.toDateString()}`);
    };
    const handleYearChange = (value) => {
        const yearValue = value.getFullYear();
        setCalendarText(`${yearValue} Year  is selected`);
    };
    const handleMonthChange = (value) => {
        const monthValue = allMonthValues[value.getMonth()];
        setCalendarText(`${monthValue} Month  is selected`);
    };



    return (
        <div className={'calendar-container'}>
            <h1>Календарь голосования</h1>
            <div className={'calendar-container__run-end-vote'}>
                <div className={'run-end-vote'}>
                    <ul>
                        <li className={'__li-color-blue '}>
                            <span> Начало регистрации</span>
                        </li>
                        <li className={'__li-color-orange'}>
                            <span>Конец регистрации</span>
                        </li>
                    </ul>
                </div>
                <div className={'run-end-vote'}>
                    <ul>
                        <li className={'__li-color-green'}>
                            <span>Начало голосования</span>
                        </li>
                        <li className={'__li-color-red'}>
                            <span>Конец голосования</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="calander-details">{calendarText}</h2>
                <Calendar
                    onClickMonth={handleMonthChange}
                    onClickYear={handleYearChange}
                    onChange={handleDateChange}
                    value={selectedDate} className={'calendar'}/>
            </div>
        </div>
    );
}
export default CalendarVotes;