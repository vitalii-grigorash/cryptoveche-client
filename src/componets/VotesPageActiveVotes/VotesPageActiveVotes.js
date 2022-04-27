import React from "react";
import './VotesPageActiveVotes.css'
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateRegVote from "../VotesStatusComponents/StartDateRegVote/StartDateRegVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import VoteButtonBlock from "../VotesStatusComponents/VoteButtonBlock/VoteButtonBlock";
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";

const VotesPageActiveVotes = ({titleVoteData, regStatus, voteStatus, startDateReg, startTimeReg, startDateVote, startTimeVote, confirmStatus}) => {

    return (

            <div className={'votes-page-active-votes__wrapper'}>
                <span className={'votes-page-active-votes__wrapper-title'}>
                 <VotesPageTitleTimeZone titleVoteData={titleVoteData}/>
                </span>
                <div className={'active-votes__status-and-start-reg-start-vote'}>
                 <div className={'status-and-start-reg-start-vote'}>
                    <CurrentStatusVote regStatus={regStatus} voteStatus={voteStatus}/>
                    <StartDateRegVote startDateReg={startDateReg} startTimeReg={startTimeReg}/>
                    <StartDateVote startDateVote={startDateVote} startTimeVote={startTimeVote}/>
                    <ConfirmRegMaterialsVote confirmStatus={confirmStatus}/>
                 </div>
                    <VoteButtonBlock/>
                </div>
            </div>
    )

}

export default VotesPageActiveVotes;