import React from "react";
import './VotePageBtnResults.css';
import {useNavigate} from "react-router-dom";


const VotePageBtnResults = () => {

    const linkResultPage = useNavigate();

    return (
        <div>
            <button className={'vote-page-button-results'} onClick={() => linkResultPage('/votes-page/result-vote')}>Результаты</button>
        </div>
    )
}
export default VotePageBtnResults;