import React from "react";
import './DetailsVotesPageReadQuestionsCardList.css';
import ReadQuestionsCardList from "./ReadQuestionsCardList/ReadQuestionsCardList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";


const DetailsVotesPageReadQuestionsCardList = (props) => {
    const { nameQuestionCard,
            nameSelectAnswerQuestion,
            nameCardList } = props;

    return (
            <div className={'read-questions-card-list__list-question-block'}>
                <div className={'list-question-block__title'}>
                    <h3>{nameQuestionCard}</h3>
                    <h5>{nameSelectAnswerQuestion}</h5>
                    <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                </div>
                {nameCardList}
            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardList;