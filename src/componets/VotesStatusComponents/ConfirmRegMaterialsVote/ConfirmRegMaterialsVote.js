import React from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg'
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = ({ isRegistered }) => {
    console.log(11111, isRegistered)

    return (
        <div className={'status-block__materials-vote'}>
            <div className={'materials-vote__status-icon'}>
                <span>
                    <img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={isRegistered ? registeredEventIcon : notRegisteredEventIcon} />
                </span>
                <span className={isRegistered ? 'status-icon__color-status_notRegistered' : 'status-icon__color-status_isRegistered'}>{isRegistered ? 'Вы зарегистрированны' : 'Вы не зарегистрированны'}</span>
            </div>
            <div className={'materials-vote__hidden-materials'}>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'} />
            </div>
        </div>
    )
}
export default ConfirmRegMaterialsVote;