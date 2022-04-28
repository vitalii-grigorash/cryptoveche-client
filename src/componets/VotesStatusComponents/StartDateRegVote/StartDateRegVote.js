import React from "react";
import './StartDateRegVote.css';
import DataTime from "../DateTime/DateTime";




const StartDateRegVote = ({dateTimeDate, dateTimeWatch}) => {

    return  (

            <div className={'status-block__start-reg'}>
                <h4>Начало регистрации:</h4>
                <DataTime dateTimeDate={dateTimeDate} dateTimeWatch={dateTimeWatch}/>
            </div>

    )
}

export default StartDateRegVote;