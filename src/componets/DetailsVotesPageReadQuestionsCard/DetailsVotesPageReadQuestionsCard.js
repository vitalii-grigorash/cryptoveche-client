import React from "react";
import './DetailsVotesPageReadQuestionsCard.css';

const DetailsVotesPageReadQuestionsCard = () => {

    return (

            <div className={'details-votes-page-read-questions__question-block'}>
                <div className={'question-block__title'}>
                    <h3>1. Согласны ли вы с решением №576?</h3>
                    <h5>Необходимо выбрать ровно 1</h5>
                    <span>Материалы вопроса<select><option></option></select></span>
                </div>
                <div className={'question-block__list-questions'}>
                    <ul type={"square"}>
                        <li><span>Да</span></li>
                        <li><span>Нет</span></li>
                        <li><span>Дайте подумать</span></li>
                    </ul>
                </div>
            </div>

    )
}

export default DetailsVotesPageReadQuestionsCard;