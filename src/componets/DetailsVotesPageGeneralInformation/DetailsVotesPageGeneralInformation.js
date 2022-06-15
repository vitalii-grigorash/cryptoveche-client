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
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import DetailsVotesPageMobileModal from "../DetailsVotesPageMobileModal/DetailsVotesPageMobileModal";


const DetailsVotesPageGeneralInformation = () => {


    const generalInfo = detailsVotesPageGenerealInfoData.find(item => item.id === 1)
    const generalInfoTitle = generalInfo.titleVoteData
    const generalInfoRegStatus = generalInfo.regStatus
    const generalInfoVoteStatus = generalInfo.voteStatus
    const generalInfoConfirmReg = generalInfo.confirmStatus


    return (
            <div>
                <div className={'details-votes-page-general-info__main-content'}>
                    <div className={'details-votes-page-general-info__main-content-current-status-vote'}>
                        <h1 className={'details-votes-page-result-votes__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
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
                            <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'}/>
                        </div>
                <RegistrationButton/>
                <DetailsVotesPageMobileModal/>
            </div>
    )

}

export default DetailsVotesPageGeneralInformation;