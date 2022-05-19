import React from "react";
import './DetailsVotesPageGeneralInformation.css';
import VotesPageTitleTimeZone from "../VotesPageTitleTimeZone/VotesPageTitleTimeZone";
import {detailsVotesPageGenerealInfoData} from "../../detailsVotesPageGenerealInfoData";
import DetailsVotesPageStatusPossibleRevoteCancelReg
    from "../DetailsVotesPageStatusPossibleRevoteCancelReg/DetailsVotesPageStatusPossibleRevoteCancelReg";
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import DetailsVotesPageListStartEndRegVote
    from "../DetailsVotesPageListStartEndRegVote/DetailsVotesPageListStartEndRegVote";
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import MaterialsVote from "../VotesStatusComponents/MaterialsVote/MaterialsVote";


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
                            <span><CurrentStatusVote regStatus={generalInfoRegStatus} voteStatus={generalInfoVoteStatus}/></span>
                            <span><ConfirmRegMaterialsVote confirmStatus={generalInfoConfirmReg}/></span>
                            <span className={'_hidden-possible-cancel-block'}><DetailsVotesPageStatusPossibleRevoteCancelReg/></span>
                        </div>
                    </div>
                        <DetailsVotesPageListStartEndRegVote/>
                            <span className={'_show-possible-cancel-block'}>
                                <DetailsVotesPageStatusPossibleRevoteCancelReg/>
                            </span>
                        </div>
                        <div className={'_hidden-materials-vote'}>
                            <MaterialsVote/>
                        </div>
                <RegistrationButton/>
            </div>
    )

}

export default DetailsVotesPageGeneralInformation;