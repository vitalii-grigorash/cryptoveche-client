import React, { useEffect, useState } from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg';
import warningIcon from '../../../img/warning-status-icon.svg';
import votedBlueIcon from '../../../img/my-votes-blue-checkmark.svg';
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = (props) => {

  const {
    votesData
  } = props;

  const [statusIcon, setStatusIcon] = useState('');
  const [statusText, setStatusText] = useState('');
  const [statusClassName, setStatusClassName] = useState('');

  useEffect(() => {
    if (votesData.status === 'waiting') {
      setStatusIcon(warningIcon);
      setStatusText('Ожидайте регистрации');
      setStatusClassName('status-icon__color-status_warning');
    } else if (votesData.status === 'registration') {
      if (votesData.isRegistered) {
        if (votesData.isVoting) {
          if (votesData.isVoted) {
            setStatusIcon(votedBlueIcon);
            setStatusText('Вы проголосовали');
            setStatusClassName('status-icon__color-status_voted');
          } else {
            setStatusIcon(notRegisteredEventIcon);
            setStatusText('Вы не проголосовали');
            setStatusClassName('status-icon__color-status_not-registered');
          }
        } else {
          setStatusIcon(registeredEventIcon);
          setStatusText('Вы зарегистрированы');
          setStatusClassName('status-icon__color-status_registered');
        }
      } else {
        setStatusIcon(notRegisteredEventIcon);
        setStatusText('Вы не зарегистрированы');
        setStatusClassName('status-icon__color-status_not-registered');
      }
    } else if (votesData.status === 'event waiting') {
      if (votesData.isRegistered) {
        setStatusIcon(registeredEventIcon);
        setStatusText('Вы зарегистрированы');
        setStatusClassName('status-icon__color-status_registered');
      } else {
        setStatusIcon(notRegisteredEventIcon);
        setStatusText('Вы не зарегистрированы');
        setStatusClassName('status-icon__color-status_not-registered');
      }
    } else if (votesData.status === 'voting') {
      if (votesData.isRegistered) {
        if (votesData.isVoted) {
          setStatusIcon(votedBlueIcon);
          setStatusText('Вы проголосовали');
          setStatusClassName('status-icon__color-status_voted');
        } else {
          setStatusIcon(notRegisteredEventIcon);
          setStatusText('Вы не проголосовали');
          setStatusClassName('status-icon__color-status_not-registered');
        }
      } else {
        setStatusIcon(notRegisteredEventIcon);
        setStatusText('Вы не зарегистрированы');
        setStatusClassName('status-icon__color-status_not-registered');
      }
    } else if (votesData.status === 'ended' || votesData.status === 'quorum_unpresant') {
      if (votesData.isVoted) {
        setStatusIcon(votedBlueIcon);
        setStatusText('Вы проголосовали');
        setStatusClassName('status-icon__color-status_voted');
      } else {
        setStatusIcon(notRegisteredEventIcon);
        setStatusText('Вы не проголосовали');
        setStatusClassName('status-icon__color-status_not-registered');
      }
    }
  },
    [
      votesData.isRegistered,
      votesData.isVoted,
      votesData.status
    ])

  return (
    <div className='status-block__materials-vote'>
      <div className='materials-vote__status-icon'>
        <img className='status-icon__color-icon' alt='иконка статуса регистрации' src={statusIcon} />
        <p className={statusClassName}>
          {statusText}
        </p>
      </div>
      <div className={'materials-vote__hidden-materials'}>
        <MaterialsVoteQuestion materialsVoteQuestion='Материалы голосования' />
      </div>
    </div>
  )
}

export default ConfirmRegMaterialsVote;
