import React from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg'
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = ({ isRegistered }) => {

    return (
        <div className={'status-block__materials-vote'}>
            <div className={'materials-vote__status-icon'}>
                <span>
                    <img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={isRegistered ? registeredEventIcon : notRegisteredEventIcon} />
                </span>
                <p>
                    <span className={isRegistered ? 'status-icon__color-status_isRegistered' : 'status-icon__color-status_notRegistered'}>
                        {isRegistered ? 'Вы зарегистрированны' : 'Вы не зарегистрированны'}
                    </span>
                </p>
            </div>
            <div className={'materials-vote__hidden-materials'}>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы голосования'} />
            </div>
        </div>
    )
}
export default ConfirmRegMaterialsVote;