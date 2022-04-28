import React from "react";
import './StartDateRegVote.css';
import DataTimeReg from "./DataTimeReg";



const StartDateRegVote = ({DateReg, TimeReg}) => {

    return  (

            <div className={'status-block__start-reg'}>
                <h4>Начало регистрации:</h4>
                <DataTimeReg DateReg={DateReg} TimeReg={TimeReg}/>
            </div>

    )
}

export default StartDateRegVote;