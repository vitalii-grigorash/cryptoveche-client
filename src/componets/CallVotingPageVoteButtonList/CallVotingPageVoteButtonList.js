import React from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = (props) => {

    const {
        sendVote,
        isBulletinVoted,
        isReVoting,
        onReVoteClick,
        isButtonActive,
    } = props;

    return (
        <>
            {isBulletinVoted ? (
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
            ) : (
                <>
                    {isButtonActive ? (
                        <button
                            type="button"
                            onClick={sendVote}
                            className='call-voting-page-vote-button-list__button-active'
                        >
                            Проголосовать
                        </button>
                    ) : (
                        <button
                            type="button"
                            className='call-voting-page-vote-button-list__button'
                        >
                            Проголосовать
                        </button>
                    )}
                </>
            )}
        </>
    )
}

export default CallVotingPageVoteButtonList;
