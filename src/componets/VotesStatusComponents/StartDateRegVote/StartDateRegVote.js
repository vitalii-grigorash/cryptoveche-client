import React from "react";
import './StartDateRegVote.css';
import icon_data from "../../../img/MyVotes_data_icon.svg";
import icon_time from "../../../img/MyVotes_icon_time.svg";


const StartDateRegVote = ({startDateReg, startTimeReg}) => {

    return  (

            <div className={'status-block__start-reg'}>
                <h4>Начало регистрации:</h4>
                <div className={'start-reg__data'}>
                    <img alt={'иконка календарь'} src={icon_data}/>
                    <span>{startDateReg}</span>
                    <img alt={'иконка часы'} src={icon_time}/>
                    <span>{startTimeReg}</span>
                </div>
            </div>

    )
}

export default StartDateRegVote;