import React, { useEffect, useState } from "react";
import './AmountVotesBlock.css';
import Gistogramma from "./Gistogramma/Gistogramma";
import gistogramma_procent_row_icon from "../../img/AmountVotesGistogramma_procent_icon.svg";
import gistogramma_procent_row_icon_negative from '../../img/AmountVotesGistogramma_procent_icon_negative.png'


const AmountVotesBlock = ({ statsData }) => {

	const [averageValueVoiting, setAverageValueVoiting] = useState(0);
	const [sortedArray, setSortedArray] = useState([]);
	const [difference, setDifference] = useState();
	const [differenceStyle, setDifferenceStyle] = useState();

	useEffect(() => {
		if (statsData && Object.keys(statsData).length > 0) {
			let sumVoiting = 0;
			for (let obj of statsData.voted) {
				sumVoiting += obj.voted;
			}
			setAverageValueVoiting(sumVoiting / statsData.voted.length)
		}
	}, [statsData])

	useEffect(() => {
		if (statsData.voted && statsData.voted.length > 0) {
			setSortedArray(statsData.voted.slice(statsData.voted.length - 9, statsData.voted.length).sort((a, b) => a.day > b.day ? 1 : -1))
		}
	}, [statsData])

	useEffect(() => {
		if (sortedArray && sortedArray.length > 0) {
			const a = sortedArray[sortedArray.length - 2].voted;
			const b = sortedArray[sortedArray.length - 1].voted;
			setDifference(
				(a > b)
					?
					Number((-(((a * 100) / b) - 100)).toFixed(1))
					:
					Number((((b * 100) / a) - 100).toFixed(1))
			)
		} else {
			setDifference(0)
		}
	}, [sortedArray, difference])

	useEffect(() => {
		if (difference >= 0 || isNaN(difference)) {
			setDifferenceStyle('gistogramma-and-total-amount__procent')
		} else {
			setDifferenceStyle('gistogramma-and-total-amount__procent_negative')
		}
	}, [difference])

	return (
		<div className={'amount-votes-wrapper main-content__elem3'}>
			<h3>Количество голосующих</h3>
			<h4>Динамика голосующих по дням</h4>
			<div className={'amount-votes__gistogramma-and-total-amount'}>
				{difference && typeof (difference) === 'number' && difference !== Infinity
					?
					<img className={'gistogramma-and-total-amount__row'} alt={'динамика'} src={difference >= 0
						?
						gistogramma_procent_row_icon
						:
						gistogramma_procent_row_icon_negative}

					/>
					:
					<>
					</>
				}
				<span className={differenceStyle}>
					{(difference && typeof (difference) === 'number' && difference !== Infinity && difference + '%') || ''}
				</span>
				{statsData.voted && statsData.voted.length > 0 && <Gistogramma statsVoted={statsData.voted} />}
				<div className={'total-amount'}>
					<h1>{averageValueVoiting.toFixed(1)}</h1>
					<span>человек голосует ежедневно</span>
				</div>
			</div>
		</div>
	);
}

export default AmountVotesBlock;
