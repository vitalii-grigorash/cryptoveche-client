import React from "react";
import './ActiveVoteBtn.css';
import {useNavigate} from "react-router-dom";


const ActiveVoteBtn = ({hidden}) => {

    const linkVotesPage = useNavigate();

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={() => {linkVotesPage('/main/votes-page')}}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
        </div>
    )
}

export default ActiveVoteBtn;