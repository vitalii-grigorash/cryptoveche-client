import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';


const CalendarVotes = () => {


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
                <Calendar />
        </div>
    );
}
export default CalendarVotes;