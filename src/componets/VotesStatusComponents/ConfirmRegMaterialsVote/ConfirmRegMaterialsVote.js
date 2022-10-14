import React, { useEffect, useState } from "react";
import './ConfirmRegMaterialsVote.css';
import notRegisteredEventIcon from "../../../img/MyVotes_icon_info.svg";
import registeredEventIcon from '../../../img/MyVotes_icon_checkmark.svg';
import warningIcon from '../../../img/warning-status-icon.svg';
import votedBlueIcon from '../../../img/my-votes-blue-checkmark.svg';
import MaterialsVoteQuestion from "../MaterialsVoteQuestion/MaterialsVoteQuestion";

const ConfirmRegMaterialsVote = (props) => {

  const {
    votesData,
    isVoted,
    isNotFullyVoted,
    hideStatus
  } = props;

  const [statusIcon, setStatusIcon] = useState('');
  const [statusText, setStatusText] = useState('');
  const [statusClassName, setStatusClassName] = useState('');
  const [activeMaterials, setActiveMaterials] = useState(false);

  useEffect(() => {
    if (votesData.isProcessing) {
      setStatusIcon(warningIcon);
      setStatusText('В обработке...');
      setStatusClassName('status-icon__color-status_warning');
    } else {
      if (votesData.status === 'waiting') {
        setStatusIcon(warningIcon);
        setStatusText('Ожидайте регистрации');
        setStatusClassName('status-icon__color-status_warning');
      } else if (votesData.status === 'registration') {
        if (votesData.isRegistered) {
          if (votesData.isVoting) {
            if (isVoted) {
              setStatusIcon(votedBlueIcon);
              setStatusText('Вы проголосовали');
              setStatusClassName('status-icon__color-status_voted');
            } else {
              if (isNotFullyVoted) {
                setStatusIcon(warningIcon);
                setStatusText('Вы проголосовали не по всем вопросам');
                setStatusClassName('status-icon__color-status_warning');
              } else {
                setStatusIcon(notRegisteredEventIcon);
                setStatusText('Вы не проголосовали');
                setStatusClassName('status-icon__color-status_not-registered');
              }
            }
          } else {
            setStatusIcon(registeredEventIcon);
            setStatusText('Вы зарегистрированы');
            setStatusClassName('status-icon__color-status_registered');
          }
        } else {
          if (votesData.isVoting) {
            setStatusIcon(notRegisteredEventIcon);
            setStatusText('Вы не проголосовали');
            setStatusClassName('status-icon__color-status_not-registered');
          } else {
            setStatusIcon(notRegisteredEventIcon);
            setStatusText('Вы не зарегистрированы');
            setStatusClassName('status-icon__color-status_not-registered');
          }
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
          if (isVoted) {
            setStatusIcon(votedBlueIcon);
            setStatusText('Вы проголосовали');
            setStatusClassName('status-icon__color-status_voted');
          } else {
            if (isNotFullyVoted) {
              setStatusIcon(warningIcon);
              setStatusText('Вы проголосовали не по всем вопросам');
              setStatusClassName('status-icon__color-status_warning');
            } else {
              setStatusIcon(notRegisteredEventIcon);
              setStatusText('Вы не проголосовали');
              setStatusClassName('status-icon__color-status_not-registered');
            }
          }
        } else {
          setStatusIcon(notRegisteredEventIcon);
          setStatusText('Вы не зарегистрированы');
          setStatusClassName('status-icon__color-status_not-registered');
        }
      } else if (votesData.status === 'ended' || votesData.status === 'quorum_unpresant') {
        if (isVoted) {
          setStatusIcon(votedBlueIcon);
          setStatusText('Вы проголосовали');
          setStatusClassName('status-icon__color-status_voted');
        } else {
          if (isNotFullyVoted) {
            setStatusIcon(warningIcon);
            setStatusText('Вы проголосовали не по всем вопросам');
            setStatusClassName('status-icon__color-status_warning');
          } else {
            setStatusIcon(notRegisteredEventIcon);
            setStatusText('Вы не проголосовали');
            setStatusClassName('status-icon__color-status_not-registered');
          }
        }
      }
    }

  },
    [
      votesData.isRegistered,
      isVoted,
      isNotFullyVoted,
      votesData.status,
      votesData.isVoting,
      votesData.isProcessing
    ]
  );

  useEffect(() => {
    if (votesData.materials !== undefined) {
      if (votesData.materials.length !== 0) {
        setActiveMaterials(true);
      }
    }
  }, [votesData.materials]);

  return (
    <div className='status-block__materials-vote'>
      {!hideStatus && (
        <div className='materials-vote__status-icon'>
          <img className='status-icon__color-icon' alt='иконка статуса регистрации' src={statusIcon} />
          <p className={statusClassName}>
            {statusText}
          </p>
        </div>
      )}
      {activeMaterials &&
        <div className={'materials-vote__hidden-materials'}>
          <MaterialsVoteQuestion currentMaterialsVote={votesData} materialsVoteName={'Материалы голосования'} />
        </div>
      }
    </div>
  )
}

export default ConfirmRegMaterialsVote;
