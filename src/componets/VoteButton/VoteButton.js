import React, { useEffect, useState } from "react";
import './VoteButton.css';

const VoteButton = (props) => {

    const {
        sendVote,
        buttonValidationArray
    } = props;

    const [isButtonActive, setButtonActive] = useState(false);

    useEffect(() => {
        if (buttonValidationArray.length === 0) {
            setButtonActive(false);
        } else {
            const isValid = buttonValidationArray.find((question => question.isValid === false));
            if (isValid === undefined) {
                setButtonActive(true);
            } else {
                setButtonActive(false);
            }
        }
    }, [buttonValidationArray]);

    return (
        <>
            {isButtonActive ? (
                <button
                    type="button"
                    className='vote-button'
                    onClick={sendVote}
                >
                    Проголосовать
                </button>
            ) : (
                <button
                    type="button"
                    className='vote-button vote-button_disabled'
                >
                    Проголосовать
                </button>
            )}
        </>
    )
}

export default VoteButton;