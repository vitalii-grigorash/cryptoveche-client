import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarVotes.css';
import CalendarVotesTimeTable from "../CalendarVotesTimeTable/CalendarVotesTimeTable";
import CalendarVotesStartReg from "./CalendarVotesStartReg/CalendarVotesStartReg";
import CalendarVotesEndReg from "./CalendarVotesEndReg/CalendarVotesEndReg";
import CalendarVotesStartVote from "./CalendarVotesStartVote/CalendarVotesStartVote";
import CalendarVotesEndVote from "./CalendarVotesEndVote/CalendarVotesEndVote";


const CalendarVotes = () => {


    return (
            <div className={'calendar-container main-content__elem1'}>
                <div>
                    <h1>Календарь голосования</h1>
                    <div className={'calendar-container__run-end-vote'}>
                        <div className={'run-end-vote'}>
                            <CalendarVotesStartReg/>
                            <CalendarVotesEndReg/>
                        </div>
                        <div className={'run-end-vote'}>
                            <CalendarVotesStartVote/>
                            <CalendarVotesEndVote/>
                        </div>
                    </div>
                    <div className={'calendar-block'}>
                            <div className={'blue__circle'}></div>
                            <div className={'orange__circle'}></div>
                            <div className={'green__circle'}></div>
                            <div className={'red__circle'}></div>
                        <Calendar/>
                    </div>
                </div>
                {/*<CalendarVotesTimeTable hiddenTimeTable={false}/>*/}
            </div>
    )
}
export default CalendarVotes;