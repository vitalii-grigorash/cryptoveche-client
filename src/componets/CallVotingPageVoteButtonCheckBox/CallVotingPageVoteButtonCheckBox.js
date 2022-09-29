import React from "react";
import './CallVotingPageVoteButtonCheckBox.css';

const CallVotingPageVoteButtonCheckBox = (props) => {

    const {
        isBulletinVoted,
        isReVoting,
        onRevoteClick
    } = props;

    return (
        <div className="call-voting-page-vote-button-check__button-container">
            {isBulletinVoted && (
                <>
                    {isReVoting && (
                        <button className='call-voting-page-vote-button-check__revote-button' onClick={onRevoteClick}>Переголосовать</button>
                    )}
                </>
            )}
            {isBulletinVoted && (
                <p className="call-voting-page-vote-button-check__button-voted-message">Ваш бюллетень учтен!</p>
            )}
        </div>
    )
}

export default CallVotingPageVoteButtonCheckBox;
