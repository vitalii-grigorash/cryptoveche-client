import React from "react";
import './CounterBlock.css';
import count_block_img from '../../img/CountBlock_image.svg';

const CounterBlock = ({ stats }) => {

	console.log(33333, stats);

	// Добавление правильной формы существительных рядом с числом
	const CountForm = (number, titles) => {
		number = Math.abs(number);
		if (Number.isInteger(number)) {
			const cases = [2, 0, 1, 1, 1, 2];
			return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
		}
		return titles[1];
	}
	//

	return (
		<div className={'count-block'}>
			<div className={'count-block__style _blue'}>
				<h3>{stats.eventsCount}</h3>
				<span>
					{CountForm(stats.eventsCount, ['голосование', 'голосования', 'голосований'])}
				</span>
				<img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
			</div>
			{/* <div className={'count-block__style _orange'}>
				<h3>23 456 789</h3>
				<span>
					транзакций
				</span>
				<img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
			</div> */}
			<div className={'count-block__style _orange'}>
				<h3>{stats.orgsCount}</h3>
				<span>
					{CountForm(stats.orgsCount, ['организация', 'организации', 'организаций'])}
				</span>
				<img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
			</div>
			<div className={'count-block__style _yellow'}>
				<h3>{stats.usersCount}</h3>
				<span>
					уникальных<p>{CountForm(stats.usersCount, ['пользователя', 'пользователя', 'пользователей'])}</p>
				</span>
				<img alt={'картинка для блока справа'} className={'count-block__style-image'} src={count_block_img} />
			</div>
		</div>
	)
}

export default CounterBlock;
