import React from "react";
import './ConfirmRegMaterialsVote.css';
import icon_no_reg from "../../../img/MyVotes_icon_info.svg";
import icon_reg from '../../../img/MyVotes_icon_checkmark.svg';
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = ({confirmStatus, activeIconReg}) => {

    return (
            <div className={'status-block__materials-vote'}>
                <div className={'materials-vote__status-icon'}>
                    <span><img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={activeIconReg ? icon_reg : icon_no_reg}/></span><span className={activeIconReg ? 'status-icon__color-status-reg' : 'status-icon__color-status'}>{confirmStatus}</span>
                </div>
                <div className={'materials-vote__hidden-materials'}>
                    <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'}/>
                </div>
            </div>
    )

}

export default ConfirmRegMaterialsVote;