import React from "react";
import './VotesPageActiveVotes.css'
import votes_active_page_icon_time from '../../img/VotesPageActiveVotes_time_icon.svg';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateRegVote from "../VotesStatusComponents/StartDateRegVote/StartDateRegVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";

const VotesPageActiveVotes = ({titleVoteData, regStatus, voteStatus, startDateReg, startTimeReg, startDateVote, startTimeVote, confirmStatus}) => {

    return (

            <div className={'votes-page-active-votes__wrapper'}>
                <div className={'active-votes__title'}>
                    <h2>{titleVoteData}</h2>
                    <h3>Ученый совет</h3>
                    <div className={'active-votes__title-timezone'}>
                         <img alt={'иконка часы'} src={votes_active_page_icon_time}/><span>(UTC+3) Россия - Москва</span>
                    </div>
                </div>
                <div className={'active-votes__status-and-start-reg-start-vote'}>
                    <CurrentStatusVote regStatus={regStatus} voteStatus={voteStatus}/>
                    <StartDateRegVote startDateReg={startDateReg} startTimeReg={startTimeReg}/>
                    <StartDateVote startDateVote={startDateVote} startTimeVote={startTimeVote}/>
                    <ConfirmRegMaterialsVote confirmStatus={confirmStatus}/>
                </div>
            </div>
    )

}

export default VotesPageActiveVotes;