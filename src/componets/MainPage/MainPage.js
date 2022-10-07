import React, { useEffect, useState } from "react";
import './MainPage.css';
import CounterBlock from "../CounterBlock/CounterBlock";
import MyVotesBlock from "../MyVotesBlock/MyVotesBlock";
import ActualBlock from "../ActualBlock/ActualBlock";
import ScanQRMobile from "../ScanQRMobile/ScanQRMobile";
import AmountVotesBlock from "../AmountVotesBlock/AmountVotesBlock";
// import ObserverCryptoBlock from "../ObserverCryptoBlock/ObserverCryptoBlock";
import CalendarVotes from "../CalendarVotes/CalendarVotes";
import * as Stats from '../../Api/Stats';
import EmptyStatesComponent from "../EmptyStatesComponent/EmptyStatesComponent";

const MainPage = (props) => {

	const {
		allEvents,
		requestHelper,
		handleCurrentEvents,
		toggleEventRegistration,
		showEventResult,
		formatDate,
		formatTime,
		utcOffset,
		isLoggedIn
	} = props;

	const [statsData, setStatsData] = useState({});
	const [activeEmptyState, setActiveEmptyState] = useState(false);
	const [activeActualState, setActiveActualState] = useState(false);
	const [sortActualEvents, setSortActualEvents] = useState([]);

	useEffect(() => {
		if (allEvents.length !== 0) {
			const sortedActualEvents = allEvents.filter(el => el.status !== 'ended').filter(el => el.status !== 'quorum_unpresant').sort((a, b) => a.registration_end_time > b.registration_end_time ? 1 : -1);
			setSortActualEvents(sortedActualEvents);
		}
	}, [allEvents]);

	useEffect(() => {
		if (isLoggedIn) {
			requestHelper(Stats.getStats)
				.then((data) => {
					setStatsData(data);
				})
		}
		// eslint-disable-next-line
	}, [isLoggedIn]);

	useEffect(() => {
		if (sortActualEvents.length !== 0) {
			setActiveActualState(true);
			setActiveEmptyState(false);
		} else {
			setActiveEmptyState(true);
			setActiveActualState(false);
		}
	}, [sortActualEvents.length]);

	return (
		<div>
			<div className={'main-content__title'}>
				Добро пожаловать в КриптоВече!
			</div>
			<CounterBlock stats={statsData} />
			{activeActualState && (
				<>
					<div className={'main-content__my-votes-actual'}>
						<MyVotesBlock
							myVotes={sortActualEvents}
							handleCurrentEvents={handleCurrentEvents}
							toggleEventRegistration={toggleEventRegistration}
							showEventResult={showEventResult}
							formatDate={formatDate}
							formatTime={formatTime}
							utcOffset={utcOffset}
						/>
						{sortActualEvents.length !== 0 && (
							<ActualBlock
								sortActualEvents={sortActualEvents}
								handleCurrentEvents={handleCurrentEvents}
								toggleEventRegistration={toggleEventRegistration}
								formatDate={formatDate}
								formatTime={formatTime}
							/>
						)}
						{/* <ScanQRMobile /> */}
					</div>
					<div className={'main-content__amount-votes-and-calendar-votes'}>
						<div className={'gistogramma-and-observer-cryptoveche'}>
							<AmountVotesBlock
								statsData={statsData}
								formatDate={formatDate}
							/>
							{/* <ObserverCryptoBlock /> */}
						</div>
						<CalendarVotes
							allEvents={allEvents}
							formatTime={formatTime}
							formatDate={formatDate} />
					</div>
				</>
			)}
			{activeEmptyState && (
				<div className={'main-content__empty-states-wrapper'}>
					<div className={'main-content__empty-states-myvotes-block'}>
						<MyVotesBlock
							myVotes={sortActualEvents}
							handleCurrentEvents={handleCurrentEvents}
							toggleEventRegistration={toggleEventRegistration}
							showEventResult={showEventResult}
							formatDate={formatDate}
							formatTime={formatTime}
							utcOffset={utcOffset}
						/>
					</div>
					<div className={'main-content__empty-states-observer-amount'}>
						{/* <ObserverCryptoBlock /> */}
						<AmountVotesBlock
							statsData={statsData}
							formatDate={formatDate} 
						/>
					</div>
					<div className={'main-content__empty-states-component'}>
						<EmptyStatesComponent />
					</div>
					<div className={'main-content__empty-states-qr-code'}>
						<ScanQRMobile />
					</div>
				</div>
			)}
		</div>
	)
}

export default MainPage;
