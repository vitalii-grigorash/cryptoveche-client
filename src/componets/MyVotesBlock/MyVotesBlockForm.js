import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
// import moment from 'moment';

const MyVotesBlockForm = ({ votesData }) => {

  //   const dateToday = `${moment().format('L')}`; // Получение текущей даты в формате, аналогичном с данными от сервера
  //   const timeNow = `${moment().format()}`.slice(11, 16); // Получение текущего времени в формате, аналогичном  с данными от сервера

  const startEventDate = votesData.event_start_time.slice(0, 10).split('-').reverse().join('.');
  const startEventTime = votesData.event_start_time.slice(11, votesData.event_start_time.length - 4)
  const isRegistered = votesData.isRegistered;

  // status: "ended", 
  // isRegistration: false началась ли регистрация
  // isRegistered: true зарегистрирован ли юзер на текущее голосование
  // isVoting: false началось ли голосование
  // isVoted: true проголосовал ли юзе по текущему евенту

  const renderBtnRegistration = (votesData) => {
    let btnText;

    if (!votesData.isRegistered && votesData.isRegistration) {
      btnText = 'Зарегистрироваться';
    } else if (votesData.isRegistered && votesData.isRegistration) {
      btnText = 'Отменить регистрацию';
    }
    return btnText
  };

  const renderRegStatus = (votesData) => {
    let labelText;

    if ((votesData.isVoted && !votesData.re_voting)  || votesData.status === 'ended') {
      labelText = 'Голосование завершено';
    } else if (!votesData.isRegistration && !votesData.isRegistered) {
      labelText = 'Ожидание регистрации';
    } else if (votesData.isRegistration && !votesData.isRegistered) {
      labelText = 'Идет регистрация';
    } else if (!votesData.isVoting && !votesData.isVoted) {
      labelText = 'Ожидание голосования';
    } else if (votesData.isVoting) {
      labelText = 'Идет голосование';
    }
    return labelText;
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
          <div className={'status-and-start-reg-start-vote__add-border-left'}><ConfirmRegMaterialsVote isRegistered={isRegistered} /></div>
        </div>
        <div className={'votes-form__button-vote-cancel-reg'}>
          {!votesData.re_voting ?
            <button className={votesData.isVoting && votesData.isRegistered && votesData.status !== 'ended' ? 'button-vote' : 'button-vote-hide'}>
              Проголосовать
            </button>
            :
            <button className={votesData.isVoting && votesData.isRegistered && votesData.status !== 'ended' ? 'button-vote' : 'button-vote-hide'}>
              Переголосовать
            </button>}
          <button className={votesData.isRegistration && votesData.status !== 'ended' ? 'cancel-reg' : 'cancel-reg-hide'}>
            {renderBtnRegistration(votesData)}
          </button>
        </div>
      </div>
  )
}

export default MyVotesBlockForm;