import React, {useRef, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';
import CalendarVotesStartEndRegVoteEvent from "./CalendarVotesStartEndRegVoteEvent/CalendarVotesStartEndRegVoteEvent";
import CalendarVotesTimeTable from "../CalendarVotesTimeTable/CalendarVotesTimeTable";




const CalendarVotes = () => {


    // const [showCalendarList, setShowCalendarList] = useState(false);


    let dataVote = '14.07.2022'

    const [valueData, setValueData] = useState(new Date());


    function onChange() {
            setValueData(valueData)

    }

     console.log(valueData)




    return (
        <div className={'calendar-container main-content__elem1'}>
            <div>
                <h1>Календарь голосования</h1>
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
                    <div className={'blue__circle'}></div>
                    <div className={'orange__circle'}></div>
                    <div className={'green__circle'}></div>
                    <div className={'red__circle'}></div>
                    <Calendar

                        value={valueData}
                        onChange={onChange}
                        locale={"ru-RU"}

                    />
                </div>
            </div>
            {/*<CalendarVotesTimeTable/>*/}
        </div>
    )
}

export default CalendarVotes;
