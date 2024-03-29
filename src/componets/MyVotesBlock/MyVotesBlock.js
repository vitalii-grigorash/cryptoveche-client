import React from "react";
import './MyVotesBlock.css';
import icon_arrow from '../../img/MyVotes_icon_arrow.svg';
import { Link } from "react-router-dom";
import MyVotesBlockForm from './MyVotesBlockForm';

const MyVotesBlock = (props) => {

  const {
    myVotes,
    handleCurrentEvents,
    toggleEventRegistration,
    showEventResult,
    formatDate,
    formatTime,
    utcOffset
  } = props;

  return (
    <div className={'my-votes-block-wrapper'}>
      <Link className={'my-votes-block__link-votes-page'} to={'/votes-page'}>
        <h2>Мои голосования</h2>
      </Link>
      {myVotes.length !== 0 && (
        <>
          {myVotes.slice(0, 2).map((event) => (
            <MyVotesBlockForm
              key={event.id}
              votesData={event}
              handleCurrentEvents={handleCurrentEvents}
              toggleEventRegistration={toggleEventRegistration}
              showEventResult={showEventResult}
              formatDate={formatDate}
              formatTime={formatTime}
              utcOffset={utcOffset}
            />
          ))}
        </>
      )}
      <div className={'my-votes__link-arrow'}>
        <span className={'link-arrow__show-all'}><Link to={'/votes-page'}>ПОКАЗАТЬ ПОЛНОСТЬЮ</Link></span>
        <span><Link className={'my-votes-block__link-votes-page'} to={'/votes-page'}><img alt={'logo_arrow'} src={icon_arrow} /></Link></span>
      </div>
    </div>
  )
}

export default MyVotesBlock;
