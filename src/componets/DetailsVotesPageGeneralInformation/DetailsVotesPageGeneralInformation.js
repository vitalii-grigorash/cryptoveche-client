import React from "react";
import './DetailsVotesPageGeneralInformation.css';
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";
import {detailsVotesPageGenerealInfoData} from "../../detailsVotesPageGenerealInfoData";
import DetailsVotesPageStatusPossibleRevoteCancelReg
    from "../DetailsVotesPageStatusPossibleRevoteCancelReg/DetailsVotesPageStatusPossibleRevoteCancelReg";
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";


const DetailsVotesPageGeneralInformation = () => {


    const generalInfo = detailsVotesPageGenerealInfoData.find(item => item.id === 1)
    const generalInfoTitle = generalInfo.titleVoteData
    const generalInfoRegStatus = generalInfo.regStatus
    const generalInfoVoteStatus = generalInfo.voteStatus
    const generalInfoConfirmReg = generalInfo.confirmStatus


    return (
            <div className={'details-votes-page-general-info__wrapper'}>
                <div className={'details-votes-page-general-info__switch-buttons'}>
                    <h2 className={'details-votes-page-general-info__switch-buttons-active-votes'}>Общая информация</h2>
                    <h2 className={'details-votes-page-general-info__switch-buttons-archive-votes'}>Ознакомиться с вопросами</h2>
                </div>

                <div className={'details-votes-page-general-info__main-content'}>
                    <div className={'details-votes-page-general-info__main-content-current-status-vote'}>
                        <span className={'main-content-current-status-vote__title'}>
                            <VotesPageTitleTimeZone titleVoteData={generalInfoTitle}/>
                        </span>
                <div className={'main-content-current-status-vote__status-vote-possible-revote'}>
                    <CurrentStatusVote regStatus={generalInfoRegStatus} voteStatus={generalInfoVoteStatus}/>
                    <ConfirmRegMaterialsVote confirmStatus={generalInfoConfirmReg}/>
                    <DetailsVotesPageStatusPossibleRevoteCancelReg/>
                </div>
                </div>





                </div>
                <button className={'details-votes-page-general-info__reg-button'}>Зарегистрироваться</button>
            </div>
    )

}

export default DetailsVotesPageGeneralInformation;