import React from "react";
import './StartDateVote.css';
import DataTimeVote from "./DataTimeVote";


const StartDateVote = ({DateVote, TimeVote}) => {

    return (
            <div className={'status-block__start-vote'}>
                <h4>Начало голосования:</h4>
                <DataTimeVote DateVote={DateVote} TimeVote={TimeVote}/>
            </div>
    )
}

export default StartDateVote;