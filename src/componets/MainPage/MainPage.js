import React, { useEffect, useState } from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import * as Stats from '../../Api/Stats';

const MainPage = (props) => {

	const {
		allEvents,
		requestHelper,
		handleCurrentEvents,
		toggleEventRegistration,
		showEventResult
	} = props;

	// const sortArchiveEvents = allEvents.filter(el => el.status === 'ended').sort((a, b) => a.registration_end_time > b.registration_end_time ? 1 : -1);
	const sortActualEvents = allEvents.filter(el => el.status !== 'ended').filter(el => el.status !== 'quorum_unpresant').sort((a, b) => a.registration_end_time > b.registration_end_time ? 1 : -1);

	const [statsData, setStatsData] = useState({});
	const [actualVote, setActualVote] = useState({});


	useEffect(() => {
		requestHelper(Stats.getStats)
			.then((data) => {
				setStatsData(data)
			})
			return () => setStatsData({})
	}, []);

	useEffect(() => {
		const [nextVote] = sortActualEvents.slice(0, 1)
		if (nextVote) {
			setActualVote(nextVote)
		}
		return () => setActualVote({})
	}, [allEvents])


	return (
		<div>
			<div className={'main-content__title'}>
				Добро пожаловать в КриптоВече!
			</div>
			<CounterBlock stats={statsData} />
			<div className={'main-content__my-votes-actual'}>
				<MyVotesBlock
					myVotes={sortActualEvents}
					handleCurrentEvents={handleCurrentEvents}
					toggleEventRegistration={toggleEventRegistration}
					showEventResult={showEventResult}
				/>
				{actualVote && Object.keys(actualVote).length > 0 && <ActualBlock 
				actualVote={actualVote} // удалить в дальнейшем
				sortActualEvents={sortActualEvents}
				handleCurrentEvents={handleCurrentEvents}
				toggleEventRegistration={toggleEventRegistration}
				/>}
				<ScanQRMobile />
			</div>
			<div className={'main-content__amount-votes-and-calendar-votes'}>
				<div className={'gistogramma-and-observer-cryptoveche'}>
					<AmountVotesBlock statsData={statsData} />
					<ObserverCryptoBlock />
				</div>
				<CalendarVotes requestHelper={requestHelper} />
			</div>
		</div>
	)

}

export default MainPage;
