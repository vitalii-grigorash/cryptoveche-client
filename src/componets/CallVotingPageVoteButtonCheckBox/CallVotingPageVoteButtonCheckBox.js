import React from "react";
import './CallVotingPageVoteButtonCheckBox.css';

const CallVotingPageVoteButtonCheckBox = (props) => {

    const {
        sendVote
    } = props;

    return (
        <>
            <button className={'call-voting-page-vote-button-check__button'} onClick={sendVote}>Проголосовать</button>
        </>
    )
}
export default CallVotingPageVoteButtonCheckBox;