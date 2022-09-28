import React from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = (props) => {

    const {
        isBulletinVoted,
        isReVoting,
        onReVoteClick,
    } = props;

    return (
        <>
            {isBulletinVoted && (
                <div className="call-voting-page-revote__container">
                    {isReVoting && (
                        <button
                            type="button"
                            className='call-voting-page-revote__button'
                            onClick={onReVoteClick}
                        >
                            Переголосовать
                        </button>
                    )}
                    <p className="call-voting-page-revote__success-text">Ваш бюллетень учтен!</p>
                </div>
            )}
        </>
    )
}

export default CallVotingPageVoteButtonList;
