import React from "react";
import './StartDateVote.css';
import DateTime from "../DateTime/DateTime";



const StartDateVote = ({dateTimeDate, dateTimeWatch}) => {

    return (
            <div className={'status-block__start-vote'}>
                <h4>Начало голосования:</h4>
                <DateTime dateTimeDate={dateTimeDate} dateTimeWatch={dateTimeWatch}/>
            </div>
    )
}

export default StartDateVote;