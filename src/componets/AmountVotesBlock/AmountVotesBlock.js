import React, { useEffect, useState } from "react";
import './AmountVotesBlock.css';
import Gistogramma from "./Gistogramma/Gistogramma";
import gistogramma_procent_row_icon from "../../img/AmountVotesGistogramma_procent_icon.svg";
import gistogramma_procent_row_icon_negative from '../../img/AmountVotesGistogramma_procent_icon_negative.png'

const AmountVotesBlock = ({ statsData }) => {

	const [averageValueVoiting, setAverageValueVoiting] = useState(0);
	const [sortedArray, setSortedArray] = useState([]);
	const [difference, setDifference] = useState(0);
	const [differenceStyle, setDifferenceStyle] = useState('');
	const filterSortedArrayVoted = sortedArray.map(el => el.voted);

	const splitArrayIntoTwoPart = (array = [], subGroupLength = 0) => {
		let index = 0;
		const newArray = [];
		while (index < array.length) {
			newArray.push(array.slice(index, index += subGroupLength));
		}
		return newArray;
	}
	
	useEffect(() => {
		if (statsData && Object.keys(statsData).length > 0) {
			let sumVoiting = 0;
			for (let obj of statsData.voted) {
				sumVoiting += obj.voted;
			}
			setAverageValueVoiting(Math.floor(sumVoiting / statsData.voted.length))
		} else {
			setAverageValueVoiting(0)
		}
	}, [statsData])

	useEffect(() => {
		if (statsData.voted && statsData.voted.length > 0) {
			setSortedArray(statsData.voted.sort((a, b) => a.day > b.day ? 1 : -1))
		}
	}, [statsData])

	useEffect(() => {
		if (sortedArray && sortedArray.length > 1) {
			let getArrayIntoTwoPart = splitArrayIntoTwoPart(filterSortedArrayVoted, Math.floor(sortedArray.length / 2));
			let sumPrevArrayVoted = getArrayIntoTwoPart[0].reduce((acc, el) => acc + el, 0);
			let sumLastArrayVoted = getArrayIntoTwoPart[1].reduce((acc, el) => acc + el, 0);
		    let a = sumPrevArrayVoted;
		    let b = sumLastArrayVoted;
			
			setDifference(Number(((b * 100 / a) - 100).toFixed(1)))
				// (a > b)
				// 	?
				// 	Number((-(((a * 100) / b) - 100)).toFixed(1))
				// 	:
				// 	Number((((b * 100) / a) - 100).toFixed(1))

		} else {
			setDifference(0)
		}
	}, [sortedArray])

	useEffect(() => {
		if (difference >= 0 || isNaN(difference)) {
			setDifferenceStyle('gistogramma-and-total-amount__procent')
		} else {
			setDifferenceStyle('gistogramma-and-total-amount__procent_negative')
		}
	}, [difference])

	return (
		<div className={'amount-votes-wrapper'}>
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
					{difference + '%'}
				</span>
				{statsData.voted && statsData.voted.length > 20 && <Gistogramma statsVoted={statsData.voted} />}
				<div className={'total-amount'}>
					<h1>{averageValueVoiting.toFixed(0)}</h1>
					<span>человек голосует ежедневно</span>
				</div>
			</div>
		</div>
	);
}
export default AmountVotesBlock;
