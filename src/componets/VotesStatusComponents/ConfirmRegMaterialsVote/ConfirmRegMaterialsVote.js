import React from "react";
import './ConfirmRegMaterialsVote.css';
import icon_info from "../../../img/MyVotes_icon_info.svg";

const ConfirmRegMaterialsVote = ({confirmStatus}) => {

    return (
            <div className={'status-block__materials-vote'}>
                <div className={'materials-vote__status-icon'}>
                    <span><img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={icon_info}/></span><span className={'status-icon__color-status'}>{confirmStatus}</span>
                </div>
                    <div className={'materials-vote__select'}><span>Материалы голосования</span><select><option></option></select></div>
            </div>
    )

}

export default ConfirmRegMaterialsVote;