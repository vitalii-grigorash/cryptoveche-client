import React from 'react';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import * as Events from '../../Api/Events';
// import moment from 'moment';

const MyVotesBlockForm = React.memo(({ votesData, requestHelper }) => {

  //   const dateToday = `${moment().format('L')}`; // Получение текущей даты в формате, аналогичном с данными от сервера
  //   const timeNow = `${moment().format()}`.slice(11, 16); // Получение текущего времени в формате, аналогичном  с данными от сервера

  const startEventDate = votesData.event_start_time.slice(0, 10).split('-').reverse().join('.');
  const startEventTime = votesData.event_start_time.slice(11, votesData.event_start_time.length - 4)

  // status: "ended", 
  // isRegistration: false началась ли регистрация
  // isRegistered: true зарегистрирован ли юзер на текущее голосование
  // isVoting: false началось ли голосование
  // isVoted: true проголосовал ли юзе по текущему евенту

  // "waiting"; ожидание регистарции
  // "registration"; идет регистрация
  // "event waiting"; ожидание голосования
  // "voting"; идет голосование
  // "quorum_unpresant"; куорум не достигнут
  // "ended"; завершено 

  const renderRegStatus = (votesData) => {
    let labelText;

    console.log(votesData);

    if (votesData.status === 'waiting') {
      labelText = 'Ожидание регистрации';
    } else if (votesData.status === 'registration') {
      if (votesData.isVoting) {
        labelText = 'Идет голосование'
      } else if (!votesData.isVoting) {
        labelText = 'Ожидание голосования';
      } else {
        labelText = 'Идет регистрация';
      }
    } else if (votesData.status === 'event waiting') {
      labelText = 'Ожидание голосования';
    } else if (votesData.status === 'voting' || (votesData.status === 'voiting')) {
      labelText = 'Идет голосование';
    } else if (votesData.isRegistration && votesData.isVoting) {
      labelText = 'Регистрация и голосование';
    } else if (votesData.quorum_type === 'quorum_unpresant') {
      labelText = 'Кворум не достигнут';
    }

    return labelText;
  };

  const renderBtnRegistration = (votesData) => {
    let btnText;

    if (votesData.status === 'registration' && !votesData.isRegistered) {
      btnText = 'Зарегистрироваться';
    } else if (votesData.isRegistered && votesData.isRegistration) {
      btnText = 'Отменить регистрацию';
    }
    return btnText
  };

  const registrationUserInEvents = () => {
    requestHelper(Events.registrationUserInEvents, votesData.id)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={'my-votes-block__vote-form'}>
      <h3>{votesData.title}</h3>
      <h5>{votesData.owner.title}</h5>
      <div className={'vote-form__status-block'}>
        <CurrentStatusVote
          regStatus={renderRegStatus(votesData)}
          voteStatus={votesData.type === 'secret' ? 'Тайное' : 'Открытое'} />
        <StartDateVote dateTimeDate={startEventDate} dateTimeWatch={startEventTime} />
        <div className={'status-and-start-reg-start-vote__add-border-left'}><ConfirmRegMaterialsVote isRegistered={votesData.isRegistered} isVoted={votesData.isVoted} isVoting={votesData.isVoting}statusEvent={renderRegStatus(votesData)} /></div>
      </div>
      <div className={'votes-form__button-vote-cancel-reg'}>
        {!votesData.re_voting ?
          <button className={
            (votesData.status === 'voting' && votesData.isRegistered) ||
              (votesData.status === 'registration' && votesData.isVoting)
              ? 'button-vote'
              : 'button-vote-hide'}>
            Проголосовать
          </button>
          :
          <button className={votesData.status === 'voting' && votesData.isRegistered && votesData.re_voting
            ? 'button-vote'
            : 'button-vote-hide'}>
            Переголосовать
          </button>}
        <button className={votesData.isRegistration && votesData.status !== 'ended' ? 'cancel-reg' : 'cancel-reg-hide'}
          onClick={() => { registrationUserInEvents() }}>
          {renderBtnRegistration(votesData)}
        </button>
      </div>
    </div>
  )
})

export default MyVotesBlockForm;
