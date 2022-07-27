import React from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg'
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = ({ isRegistered, isVoted, isVoting,statusEvent }) => {

	// status: "ended", 
	// isRegistration: false началась ли регистрация
	// isRegistered: true зарегистрирован ли юзер на текущее голосование
	// isVoting: false началось ли голосование
	// isVoted: true проголосовал ли юзе по текущему евенту


  const renderLabelStatus = (isRegistered, isVoted, statusEvent) => {
    let labelText;
    if ((statusEvent === 'Ожидание регистрации' || statusEvent === 'Идет регистрация' || statusEvent === 'Идет голосование' || statusEvent === 'Ожидание голосования') && !isRegistered) {
      labelText = 'Вы не зарегистрированны';
    } else if ((statusEvent === 'Ожидание регистрации' || statusEvent === 'Идет регистрация') && isRegistered) {
      labelText = 'Вы зарегистрированны'
    } else if ((statusEvent === 'Ожидание голосования' || statusEvent === 'Идет голосование' || statusEvent === 'Регистрация и голосование') && !isVoted) {
      labelText = 'Вы не проголосовали'
    } else if ((statusEvent === 'Ожидание голосования' || statusEvent === 'Идет голосование') && isVoted) {
      labelText = 'Вы проголосовали'
    }

    return labelText;
  };

  return (
    <div className={'status-block__materials-vote'}>
      <div className={'materials-vote__status-icon'}>
        <span>
          <img className={'status-icon__color-icon'} alt={'иконка статуса регистрации'} src={
            renderLabelStatus(isRegistered, isVoted, statusEvent) === 'Вы проголосовали' ||
              renderLabelStatus(isRegistered, isVoted, statusEvent) === 'Вы зарегистрированны'
              ? registeredEventIcon
              : notRegisteredEventIcon
          } />
        </span>
        <p>
          <span className={
            renderLabelStatus(isRegistered, isVoted, statusEvent) === 'Вы проголосовали' ||
              renderLabelStatus(isRegistered, isVoted, statusEvent) === 'Вы зарегистрированны'
              ? 'status-icon__color-status_isRegistered'
              : 'status-icon__color-status_notRegistered'
          }>
            {renderLabelStatus(isRegistered, isVoted, statusEvent)}
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
