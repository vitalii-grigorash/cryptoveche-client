import React from "react";
import './VotesPageActiveVotes.css'
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateRegVote from "../VotesStatusComponents/StartDateRegVote/StartDateRegVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import VotePageBtnRegister from "../VotesStatusComponents/VotePageBtnRegister/VotePageBtnRegister";
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";

const VotesPageActiveVotes = ({titleVoteData, regStatus, voteStatus, dateTimeDate, dateTimeWatch, dateTimeDate1, dateTimeWatch1, confirmStatus, nameRegButton}) => {

    return (
            <div className={'votes-page-active-votes__wrapper'}>
                <span className={'votes-page-active-votes__wrapper-title'}>
                 <VotesPageTitleTimeZone titleVoteData={titleVoteData} nameTimezone={'(UTC+3) Россия - Москва'}/>
                </span>
                <div className={'active-votes__status-and-start-reg-start-vote'}>
                 <div className={'status-and-start-reg-start-vote'}>
                     <CurrentStatusVote regStatus={regStatus} voteStatus={voteStatus}/>
                     <div className={'status-and-start-reg-start-vote__reg-vote-date'}>
                        <StartDateRegVote dateTimeDate={dateTimeDate} dateTimeWatch={dateTimeWatch}/>
                        <StartDateVote dateTimeDate={dateTimeDate1} dateTimeWatch={dateTimeWatch1}/>
                     </div>
                     <div className={'status-and-start-reg-start-vote__add-border-left'}>
                         <ConfirmRegMaterialsVote confirmStatus={confirmStatus}/></div>
                 </div>
                    <div className={'votes-page-active-votes__buttons'}>
                        <VotePageBtnRegister nameRegButton={nameRegButton}/>

                    </div>

                </div>
            </div>
    )

}

export default VotesPageActiveVotes;