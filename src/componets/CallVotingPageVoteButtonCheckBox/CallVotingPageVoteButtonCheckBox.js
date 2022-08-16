import React, { useEffect, useState } from "react";
import './CallVotingPageVoteButtonCheckBox.css';

const CallVotingPageVoteButtonCheckBox = (props) => {

    const {
        sendVote,
        isBulletinVoted,
        isReVoting,
        onRevoteClick,
        isRequiredGridRows,
        rows,
        answersArray
    } = props;

    const [isButtonActive, setButtonActive] = useState(true);

    useEffect(() => {
        if (isRequiredGridRows) {
            if (rows.length === answersArray.length) {
                setButtonActive(true);
            } else {
                setButtonActive(false);
            }
        }
    }, [isRequiredGridRows, rows.length, answersArray.length])

    return (
        <div className="call-voting-page-vote-button-check__button-container">
            {isBulletinVoted ? (
                <>
                    {isReVoting && (
                        <button className='call-voting-page-vote-button-check__revote-button' onClick={onRevoteClick}>Переголосовать</button>
                    )}
                </>
            ) : (
                <>
                    {isButtonActive ? (
                        <button className='call-voting-page-vote-button-check__vote-button' onClick={sendVote}>Проголосовать</button>
                    ) : (
                        <button className='call-voting-page-vote-button-check__disabled-vote-button'>Проголосовать</button>
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
