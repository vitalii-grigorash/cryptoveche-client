// import React from "react";
import React from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import { Link } from "react-router-dom";
import { config } from '../../config';
import { myVotesDataTest } from '../../testMyEvents.js';
import MyVotesBlockForm from './MyVotesBlockForm';

const shortEventsDate =  myVotesDataTest.slice(0, 2)

const API_URL = config.java_api_url

const MyVotesBlock = ({ myVotesData }) => {

    return (
        <div className={'my-votes-block-wrapper'}>
            <h2>Мои голосования</h2>
            {shortEventsDate && shortEventsDate.map(votesData => <MyVotesBlockForm key={votesData.id} votesData={votesData} />)}
            <div className={'my-votes__link-arrow'}>
                <span><Link to={'/votes-page'}>ПОКАЗАТЬ ПОЛНОСТЬЮ</Link></span>
                <span><Link to={'/votes-page'}><img alt={'logo_arrow'} src={icon_arrow} /></Link></span>
            </div>
        </div>
    )
}
export default MyVotesBlock;