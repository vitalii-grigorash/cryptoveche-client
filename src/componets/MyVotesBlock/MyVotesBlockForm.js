import './MyVotesBlock.css';
import CurrentStatusVote from "../VotesStatusComponents/CurrentStatusVote/CurrentStatusVote";
import StartDateVote from "../VotesStatusComponents/StartDateVote/StartDateVote";
import ConfirmRegMaterialsVote from "../VotesStatusComponents/ConfirmRegMaterialsVote/ConfirmRegMaterialsVote";
import { myVotesBlockData } from '../../myVotesBlockData';
import { useEffect } from 'react';
import moment from 'moment';


const MyVotesBlockForm = ({ votesData }) => {

	const myVotesRunVote = myVotesBlockData.find(item => item.id === 2)
	const runVotesRegStatus = myVotesRunVote.myVotesRegStatus
	const runVotesConfirmStatus = myVotesRunVote.myVotesConfirmStatus

	const startEventDate = votesData.event_start_time.slice(0, 10)
	const startEventTime = votesData.event_start_time.slice(10, votesData.event_start_time.length)

	
	const compareDateRegEvents = (date) => {
		const dateAndTimeNow = `${moment().format('L')} ${moment().format('LTS')}`.slice(0, -3);
		if (date === votesData.registration_start_time) { // 

		}
	} // toDO
	

	return (
		<div className={'my-votes-block__vote-form'}>
			<h3>{votesData.title}</h3>
			<h5>{votesData.owner.title}</h5>
			<div className={'vote-form__status-block'}>
				<CurrentStatusVote regStatus={runVotesRegStatus} voteStatus={votesData.type === 'secret' ? 'Закрытое' : 'Открытое'} />
				<StartDateVote dateTimeDate={startEventDate} dateTimeWatch={startEventTime} />
				<div className={'status-and-start-reg-start-vote__add-border-left'}><ConfirmRegMaterialsVote confirmStatus={runVotesConfirmStatus} /></div>
			</div>
			<div className={'votes-form__button-vote-cancel-reg'}>
				<button className={'button-vote'}>Проголосовать</button>
				<button className={'cancel-reg'}>Отменить регистрацию</button>
			</div>
		</div>
	)
}

export default MyVotesBlockForm;
