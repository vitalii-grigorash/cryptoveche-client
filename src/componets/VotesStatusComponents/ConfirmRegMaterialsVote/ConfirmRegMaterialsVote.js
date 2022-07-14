import React from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg'
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = ({ isRegistered }) => {

    return (
        <div className={'status-block__materials-vote'}>
            <div className={'materials-vote__status-icon'}>
                <span><img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={icon_info}/></span><span className={'status-icon__color-status'}>{confirmStatus}</span>
            </div>
            <div className={'materials-vote__hidden-materials'}>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'}/>
            </div>
        </div>
    )

}

export default ConfirmRegMaterialsVote;