import React, { useEffect, useState } from 'react';
import './MyVotesBlock.css';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import utcIcon from '../../img/VotesPageActiveVotes_time_icon.svg';
import { useLocation } from "react-router-dom";
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

	const { pathname } = useLocation();

	const startEventDate = votesData.event_start_time.slice(0, 10).split('-').reverse().join('.');
	const startEventTime = votesData.event_start_time.slice(11, votesData.event_start_time.length - 4);

	const startEventRegDate = votesData.registration_start_time.slice(0, 10).split('-').reverse().join('.');
	const startEventRegTime = votesData.registration_start_time.slice(11, votesData.registration_start_time.length - 4);

	const [labelText, setLabelText] = useState('');

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

	return (
		<div className={`my-votes-block__vote-form ${pathname === '/votes-page' && 'my-votes-block__vote-form_votes-page'}`}>
			<div className='my-votes-block__container'>
				<h3>{votesData.title}</h3>
				<h5>{votesData.owner.title}</h5>
				{pathname === '/votes-page' && (
					<div className='my-votes-block__utc-container'>
						<img alt='Иконка часового пояса' src={utcIcon} className='my-votes-block__utc-icon' />
						<p className='my-votes-block__utc-value'>(UTC+3) Россия - Москва</p>
					</div>
				)}
				<div className='vote-form__status-block'>
					<CurrentStatusVote
						regStatus={labelText}
						voteStatus={votesData.type === 'secret' ? 'Тайное' : 'Открытое'} />
					{pathname === '/votes-page' && (
						<StartDateVote
							dateTimeDate={startEventRegDate}
							dateTimeWatch={startEventRegTime}
							title={'Начало регистрации:'}
						/>
					)}
					<StartDateVote
						dateTimeDate={startEventDate}
						dateTimeWatch={startEventTime}
						title={'Начало голосования:'}
					/>
					<div className='status-and-start-reg-start-vote__add-border-left'>
						<ConfirmRegMaterialsVote
							votesData={votesData}
						/>
					</div>
				</div>
			</div>
			<div className={`votes-form__button-vote-cancel-reg ${pathname === '/votes-page' && 'votes-form__button-vote-cancel-reg_votes-page'}`}>
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