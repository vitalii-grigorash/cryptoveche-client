import React, { useEffect, useState } from 'react';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import * as Events from '../../Api/Events';
import './MyVotesBlock.css';

// import handleCurrentEvents from '../App/App'

// import moment from 'moment';

const MyVotesBlockForm = React.memo((props) => {

	const {
		votesData,
		handleCurrentEvents,
		toggleEventRegistration,
		showEventResult
	} = props;

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
		if (votesData.status === 'waiting') {
			setLabelText('Ожидание регистрации');
		} else if (votesData.status === 'registration') {
			if (votesData.isVoting) {
				setLabelText('Регистрация и голосование');
			} else {
				setLabelText('Идет регистрация');
			}
		} else if (votesData.status === 'event waiting') {
			setLabelText('Ожидание голосования');
		} else if (votesData.status === 'voting') {
			setLabelText('Идет голосование');
		} else if (votesData.status === 'ended') {
			setLabelText('Голосование завершено');
		} else if (votesData.status === 'quorum_unpresant') {
			setLabelText('Кворум не достигнут');
		}
	}, [votesData])

	// const registrationUserInEvents = () => {
	// 	requestHelper(Events.registrationUserInEvents, votesData.id)
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// };

	// const sendEventData = () => {
	// 	handleCurrentEvents(votesData);
	// };

	return (
		<div className={'my-votes-block__vote-form'}>
			<h3>{votesData.title}</h3>
			<h5>{votesData.owner.title}</h5>
			<div className={'vote-form__status-block'}>
				<CurrentStatusVote
					regStatus={labelText}
					voteStatus={votesData.type === 'secret' ? 'Тайное' : 'Открытое'} />
				<StartDateVote
					dateTimeDate={startEventDate}
					dateTimeWatch={startEventTime}
				/>
				<div className={'status-and-start-reg-start-vote__add-border-left'}>
					<ConfirmRegMaterialsVote
						isRegistered={votesData.isRegistered}
						isVoted={votesData.isVoted}
						isVoting={votesData.isVoting}
						statusEvent={labelText} />
				</div>
			</div>
			<div className={'votes-form__button-vote-cancel-reg'}>
				{votesData.status === "registration" && (
					<>
						{!votesData.isRegistered ? (
							<button className='reg'
								onClick={() => { toggleEventRegistration(votesData.id) }}
							>
								Зарегистрироваться
							</button>
						) : (
							<>
								{votesData.re_registration && (
									<>
										{!votesData.isVoting && (
											<button className='cancel-reg'
												onClick={() => { toggleEventRegistration(votesData.id) }}
											>
												Отменить регистрацию
											</button>
										)}
									</>
								)}
							</>
						)}
						{votesData.isVoting && (
							<>
								{votesData.isRegistered && (
									<>
										{!votesData.isVoted ? (
											<>
												<button className='button-vote'
													onClick={() => { handleCurrentEvents(votesData) }}
												>
													Проголосовать
												</button>
											</>
										) : (
											<>
												{votesData.re_voting && (
													<button className='button-vote'
														onClick={() => { handleCurrentEvents(votesData) }}
													>
														Переголосовать
													</button>
												)}
											</>
										)}
									</>
								)}
							</>
						)}
					</>
				)}
				{votesData.status === 'voting' && (
					<>
						{votesData.isRegistered ? (
							<>
								{!votesData.isVoted ? (
									<button className='button-vote'
										onClick={() => { handleCurrentEvents(votesData) }}
									>
										Проголосовать
									</button>
								) : (
									<>
										{votesData.re_voting && (
											<button className='button-vote'
												onClick={() => { handleCurrentEvents(votesData) }}
											>
												Переголосовать
											</button>
										)}
									</>
								)}
							</>
						) : (
							<>
								{votesData.isRegistration && (
									<button className='reg'
										onClick={() => { toggleEventRegistration(votesData.id) }}
									>
										Зарегистрироваться
									</button>
								)}
							</>
						)}
					</>
				)}
				{votesData.status === 'ended' && (
					<>
						{votesData.isVoted && (
							<button className='cancel-reg'
								onClick={showEventResult}
							>
								Результаты
							</button>
						)}
					</>
				)}
			</div>
		</div>
	)
})

export default MyVotesBlockForm;
