import React from "react";
import './ActiveVoteBtn.css';
import {useToggleActVote} from "../../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";


const ActiveVoteBtn = ({hidden}) => {

    const toggleAct = useToggleActVote()

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={toggleAct}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
        </div>
    )
}

export default ActiveVoteBtn;