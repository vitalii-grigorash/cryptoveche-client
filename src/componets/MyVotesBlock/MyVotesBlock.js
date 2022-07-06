import React, { useEffect } from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import { Link } from "react-router-dom";
// import { options } from '../../config';
import { myVotesDataTest } from '../../testMyEvents';
import MyVotesBlockForm from './MyVotesBlockForm'

// const API_URL = options.apiUrl;


const MyVotesBlock = ({ myVotesData }) => {

	useEffect(() => {

		console.log(myVotesDataTest);

	}, []);


	return (
		<div className={'my-votes-block-wrapper'}>
			<h2>Мои голосования</h2>
			{myVotesDataTest && myVotesDataTest.map(votesData => <MyVotesBlockForm key={votesData.id} votesData={votesData} />)}
			<div className={'my-votes__link-arrow'}>
				<span><Link to={'/votes-page'}>ПОКАЗАТЬ ПОЛНОСТЬЮ</Link></span>
				<span><Link to={'/votes-page'}><img alt={'logo_arrow'} src={icon_arrow} /></Link></span>
			</div>
		</div>
	)
}

export default MyVotesBlock;
