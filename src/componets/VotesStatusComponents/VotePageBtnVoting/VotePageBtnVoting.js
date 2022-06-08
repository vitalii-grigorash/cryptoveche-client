import React from "react";
import './VotePageBtnVoting.css';
import {useNavigate} from "react-router-dom";


const VotePageBtnVoting = () => {

    const linkCallVotingPage = useNavigate();


    return (
            <div className={'vote-page-button-voting'}>
                <button className={'vote-page-button-voting__btn'} onClick={() => linkCallVotingPage('/main/call-voting-page')}>Проголосовать</button>
            </div>
    )
}

export default VotePageBtnVoting;