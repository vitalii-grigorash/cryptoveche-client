import React from "react";
import './StartDateVote.css';
import icon_data from "../../../img/MyVotes_data_icon.svg";
import icon_time from "../../../img/MyVotes_icon_time.svg";

const StartDateVote = ({startDateVote, startTimeVote}) => {

    return (

            <div className={'status-block__start-vote'}>
                <h4>Начало голосования:</h4>
                <div className={'start-vote__data'}>
                    <img alt={'иконка календарь'} src={icon_data}/>
                    <span>{startDateVote}</span>
                    <img alt={'иконка часы'} src={icon_time}/>
                    <span>{startTimeVote}</span>
                </div>
            </div>

    )
}

export default StartDateVote;