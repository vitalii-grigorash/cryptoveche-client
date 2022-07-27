import React from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import { Link } from "react-router-dom";
import MyVotesBlockForm from './MyVotesBlockForm';


const MyVotesBlock = React.memo(({ myVotes, requestHelper }) => {

  const shortEventsData = myVotes.slice(0, 2)

  return (
    <div className={'my-votes-block-wrapper'}>
      <h2>Мои голосования</h2>
      {shortEventsData && shortEventsData.map(votesData => <MyVotesBlockForm key={votesData.id} votesData={votesData} requestHelper={requestHelper} />)}
      <div className={'my-votes__link-arrow'}>
        <span className={'link-arrow__show-all'}><Link to={'/votes-page'}>ПОКАЗАТЬ ПОЛНОСТЬЮ</Link></span>
        <span><Link to={'/votes-page'}><img alt={'logo_arrow'} src={icon_arrow} /></Link></span>
      </div>
    </div>
  )
})
export default MyVotesBlock;
