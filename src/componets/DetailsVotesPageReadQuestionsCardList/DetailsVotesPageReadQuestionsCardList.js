import React from "react";
import './DetailsVotesPageReadQuestionsCardList.css';
import ReadQuestionsCardList from "./ReadQuestionsCardList/ReadQuestionsCardList";


const DetailsVotesPageReadQuestionsCardList = ({nameQuestionCard, nameSelectAnswerQuestion}) => {

    return (
            <div className={'details-votes-page-read-questions__question-block'}>
                <div className={'question-block__title'}>
                    <h3>{nameQuestionCard}</h3>
                    <h5>{nameSelectAnswerQuestion}</h5>
                    <span>Материалы вопроса<select><option></option></select></span>
                </div>
                    <ReadQuestionsCardList nameCardList={'Да'}/>
                    <ReadQuestionsCardList nameCardList={'Нет'}/>
                    <ReadQuestionsCardList nameCardList={'Дайте подумать'}/>
            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardList;