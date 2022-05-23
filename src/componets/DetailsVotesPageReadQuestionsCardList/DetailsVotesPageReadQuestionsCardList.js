import React from "react";
import './DetailsVotesPageReadQuestionsCardList.css';
import ReadQuestionsCardList from "./ReadQuestionsCardList/ReadQuestionsCardList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";


const DetailsVotesPageReadQuestionsCardList = ({nameQuestionCard, nameSelectAnswerQuestion}) => {

    return (
            <div className={'read-questions-card-list__list-question-block'}>
                <div className={'list-question-block__title'}>
                    <h3>{nameQuestionCard}</h3>
                    <h5>{nameSelectAnswerQuestion}</h5>
                    <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                </div>
                    <ReadQuestionsCardList nameCardList={'Да'}/>
                    <ReadQuestionsCardList nameCardList={'Нет'}/>
                    <ReadQuestionsCardList nameCardList={'Дайте подумать'}/>
            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardList;