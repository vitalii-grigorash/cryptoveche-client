import React, { useEffect, useRef, useState } from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = (props) => {

    const {
        activeVoteBtn,
        activeRevoteBtn,
        sendVote,
        answersArray
    } = props;

    // const [enableVoting, setEnableVoting] = useState(true);
    // const [enableRevoting, setEnableRevoting] = useState(false);

    const [isButtonActive, setButtonActive] = useState(false);

    useEffect(() => {
        console.log('use effect на кнопке проголосовать');
        if (answersArray.length === 0) {
            setButtonActive(false);
        } else if (answersArray.length === 1) {
            setButtonActive(true);
        } else if (answersArray.length > 1) {
            setButtonActive(false);
        }
    }, [answersArray]);

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
            {/* {enableRevoting && (
                <>
                    <button
                        type="button"
                        className={activeVoteBtn ? 'call-voting-page-vote-button-list__button active' : 'call-voting-page-vote-button-list__button'}
                        onClick={onVoteClick}
                    >
                        Проголосовать
                    </button>
                    <button
                        type="button"
                        className={activeRevoteBtn ? 'call-voting-page-revote-button-list__button active' : 'call-voting-page-revote-button-list__button'}
                        onClick={onVoteClick}
                    >
                        Переголосовать
                    </button>
                </>
            )
            }
            {enableVoting && (
                <button
                    type="button"
                    className={activeVoteBtn ? 'call-voting-page-vote-button-list__button active' : 'call-voting-page-vote-button-list__button'}
                    onClick={onVoteClick}
                >
                    Проголосовать
                </button>
            )
            } */}
        </>
    )
}

export default CallVotingPageVoteButtonList;
