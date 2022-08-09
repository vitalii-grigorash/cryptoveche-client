import React from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = (props) => {

    const {
        sendVote,
        isReVoting,
        isButtonActive,
        isBulletinVoted
    } = props;

    console.log(isReVoting);
    console.log(isBulletinVoted);

    return (
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
    )
}

export default CallVotingPageVoteButtonList;
