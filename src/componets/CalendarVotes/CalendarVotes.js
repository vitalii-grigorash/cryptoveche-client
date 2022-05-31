import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';
import CalendarVotesTimeTableVotes from "../CalendarVotesTimeTableVotes/CalendarVotesTimeTableVotes";


const CalendarVotes = () => {


    return (

        <div className={'calendar-container main-content__elem1'}>
            {/*<h1>Календарь голосования</h1>*/}
            {/*<div className={'calendar-container__run-end-vote'}>*/}
            {/*    <div className={'run-end-vote'}>*/}
            {/*        <ul>*/}
            {/*            <li className={'__li-color-blue '}>*/}
            {/*                <span> Начало регистрации</span>*/}
            {/*            </li>*/}
            {/*            <li className={'__li-color-orange'}>*/}
            {/*                <span>Конец регистрации</span>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <div className={'run-end-vote'}>*/}
            {/*        <ul>*/}
            {/*            <li className={'__li-color-green'}>*/}
            {/*                <span>Начало голосования</span>*/}
            {/*            </li>*/}
            {/*            <li className={'__li-color-red'}>*/}
            {/*                <span>Конец голосования</span>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'calendar-block'}>*/}
            {/*        <div className={'blue__circle'}></div>*/}
            {/*        <div className={'orange__circle'}></div>*/}
            {/*        <div className={'green__circle'}></div>*/}
            {/*        <div className={'red__circle'}></div>*/}
            {/*    <Calendar/>*/}
            {/*</div>*/}
            <CalendarVotesTimeTableVotes hiddenTimeTable={false}/>
        </div>
    )
}
export default CalendarVotes;