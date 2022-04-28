import React from "react";
import './ConfirmRegMaterialsVote.css';
import icon_info from "../../../img/MyVotes_icon_info.svg";

const ConfirmRegMaterialsVote = ({confirmStatus}) => {

    return (

            <div className={'status-block__materials-vote'}>
                <span className={'materials-vote__red'}><img alt={'иконка статуса регистрации'} src={icon_info}/>{confirmStatus}</span>
                <div className={'materials-vote__select'}><span>Материалы голосования</span><select><option></option></select></div>
            </div>

    )

}

export default ConfirmRegMaterialsVote;