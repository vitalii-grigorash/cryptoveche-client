import React, { useEffect, useState } from 'react';
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

	const [labelText, setLabelText] = useState('');

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

	useEffect(() => {
		console.log(votesData);

		if (votesData.status === 'waiting') {
			setLabelText('Ожидание регистрации');
		} else if (votesData.status === 'registration') {
			if (!votesData.isRegistered) {
				setLabelText('Идет регистрация')
			} else if (votesData.isRegistered) {
				if (votesData.isVoting) {
					setLabelText('Регистрация и голосование');
				} else {
					setLabelText('Ожидание голосования');
				}
			}
		} else if (votesData.status === 'event waiting') {
			setLabelText('Ожидание голосования');
		} else if (votesData.isRegistration && votesData.isVoting) {
			setLabelText('Регистрация и голосование');
		} else if (votesData.status === 'voting') {
			setLabelText('Идет голосование');
		} else if (votesData.quorum_type === 'quorum_unpresant') {
			setLabelText('Кворум не достигнут');
		}
	}, [votesData])

	const renderBtnRegistration = (votesData) => {
		let btnText;

		if ((votesData.status === 'registration' || votesData.status === 'event waiting') && !votesData.isRegistered) {
			btnText = 'Зарегистрироваться';
		} else if ((votesData.status === 'registration' || votesData.status === 'event waiting') && votesData.isRegistered && votesData.re_registration && !votesData.isVoting) {
			btnText = 'Отменить регистрацию';
		} else if ((votesData.status === 'registration' || votesData.status === 'event waiting') ||
			(votesData.isRegistered && !votesData.re_registration) ||
			(votesData.status = 'registration' && votesData.isVoting)) {
			btnText = ''
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
					regStatus={labelText}
					voteStatus={votesData.type === 'secret' ? 'Тайное' : 'Открытое'} />
				<StartDateVote dateTimeDate={startEventDate} dateTimeWatch={startEventTime} />
				<div className={'status-and-start-reg-start-vote__add-border-left'}>
					<ConfirmRegMaterialsVote
						isRegistered={votesData.isRegistered}
						isVoted={votesData.isVoted}
						isVoting={votesData.isVoting}
						statusEvent={labelText} />
				</div>
			</div>
			<div className={'votes-form__button-vote-cancel-reg'}>
				{!votesData.re_voting ?
					<button className={
						(votesData.status === 'voting' && votesData.isRegistered) ||
							(votesData.status === 'registration' && votesData.isVoting && votesData.isRegistered)
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
				<button className={votesData.isRegistration && votesData.status !== 'ended' && renderBtnRegistration(votesData) !== '' ? 'cancel-reg' : 'cancel-reg-hide'}
					onClick={() => { registrationUserInEvents() }}>
					{renderBtnRegistration(votesData)}
				</button>
			</div>
		</div>
	)
})

export default MyVotesBlockForm;
