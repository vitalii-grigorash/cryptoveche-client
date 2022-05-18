import React from "react";
import './DetailsVotesPageGeneralInformation.css';
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";
import {detailsVotesPageGenerealInfoData} from "../../detailsVotesPageGenerealInfoData";
import DetailsVotesPageStatusPossibleRevoteCancelReg
    from "../DetailsVotesPageStatusPossibleRevoteCancelReg/DetailsVotesPageStatusPossibleRevoteCancelReg";
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import DetailsVotesPageListStartRegStartVote
    from "../DetailsVotesPageListStartRegStartVote/DetailsVotesPageListStartRegStartVote";
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";


const DetailsVotesPageGeneralInformation = () => {


    const generalInfo = detailsVotesPageGenerealInfoData.find(item => item.id === 1)
    const generalInfoTitle = generalInfo.titleVoteData
    const generalInfoRegStatus = generalInfo.regStatus
    const generalInfoVoteStatus = generalInfo.voteStatus
    const generalInfoConfirmReg = generalInfo.confirmStatus


    return (
            <div className={'details-votes-page-general-info__wrapper'}>
                <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true} hiddenResultBtn={true} hiddenBulletinBtn={true}/>
                <div className={'details-votes-page-general-info__main-content'}>
                    <div className={'details-votes-page-general-info__main-content-current-status-vote'}>
                        <span className={'main-content-current-status-vote__title'}>
                            <VotesPageTitleTimeZone titleVoteData={generalInfoTitle} nameTimezone={'Часовой пояс: UTC+3'}/>
                        </span>
                        <div className={'main-content-current-status-vote__status-vote-possible-revote'}>
                            <CurrentStatusVote regStatus={generalInfoRegStatus} voteStatus={generalInfoVoteStatus}/>
                            <ConfirmRegMaterialsVote confirmStatus={generalInfoConfirmReg}/>
                            <DetailsVotesPageStatusPossibleRevoteCancelReg/>
                        </div>
                        </div>
                            <DetailsVotesPageListStartRegStartVote/>
                        </div>
                    <RegistrationButton/>
            </div>
    )

}

export default DetailsVotesPageGeneralInformation;