import React from "react";
import './DetailsVotesPageResultVotesWaitingResults.css';
import waiting_result_img from '../../img/DetailsVotesPageResultVotes_waiting_result_img.svg';

const DetailsVotesPageResultVotesWaitingResults = () => {

    return (

        <div className={'details-votes-page-result-waiting-results__wrapper'}>
            <img className={''} alt={'картинка'} src={waiting_result_img}/>
            <span>Результаты голосования пока что находятся в обработке. Пожалуйста, зайдите в этот раздел позднее.</span>
        </div>
    )
}

export default DetailsVotesPageResultVotesWaitingResults;