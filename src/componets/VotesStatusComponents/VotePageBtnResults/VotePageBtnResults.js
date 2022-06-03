import React from "react";
import './VotePageBtnResults.css';
import {useNavigate} from "react-router-dom";


const VotePageBtnResults = () => {

    const linkResultPage = useNavigate();

    return (
        <div>
            <button className={'vote-page-button-results'} onClick={() => linkResultPage('/main/votes-page-details-result')}>Результаты</button>
        </div>
    )
}
export default VotePageBtnResults;