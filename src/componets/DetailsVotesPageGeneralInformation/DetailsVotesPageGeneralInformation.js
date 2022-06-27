import React, {useState} from "react";
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
import VotesPageSuccessRegLaterModal from "../VotesPageSuccessRegLaterModal/VotesPageSuccessRegLaterModal";


const DetailsVotesPageGeneralInformation = () => {


    const  [successRegModal, setSuccessRegModal] = useState(false)

    const generalInfo = detailsVotesPageGenerealInfoData.find(item => item.id === 1)
    const generalInfoTitle = generalInfo.titleVoteData
    const generalInfoRegStatus = generalInfo.regStatus
    const generalInfoVoteStatus = generalInfo.voteStatus
    const generalInfoConfirmReg = generalInfo.confirmStatus



    return (
            <div>
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
                            <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'}/>
                        </div>
                <VotesPageSuccessRegLaterModal active={successRegModal} setActive={setSuccessRegModal}/>
                <RegistrationButton />
            </div>
    )

}

export default DetailsVotesPageGeneralInformation;