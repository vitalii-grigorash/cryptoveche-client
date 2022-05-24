import React from "react";
import './DetailsVotesPageReadQuestionsCardCheckbox.css';
import ReadQuestionsCardCheckbox from "./ReadQuestionsCardCheckbox/ReadQuestionsCardCheckbox";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";

const DetailsVotesPageReadQuestionsCardCheckbox = ({checkBoxNameRow, nameQuestionCard, nameSelectAnswerQuestion, typeCheck, nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {

    return (
            <div className={'read-questions-card-checkbox__checkbox-question-block'}>
                <div className={'checkbox-question-block__title'}>
                    <h3>{nameQuestionCard}</h3>
                    <h5>{nameSelectAnswerQuestion}</h5>
                    <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                </div>
                <div className={'checkbox-question-block__select-checkboxes-block'}>
                    <div className={'checkbox-question-block__header-columns'}>
                        <span/>
                        <span>{nameFirstColumn}</span>
                        <span>{nameSecondColumn}</span>
                        <span>{nameThirdColumn}</span>
                    </div>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={checkBoxNameRow} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'Вольфганг Амадей Моцарт очень длинное здесь что-то должно быть'} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={typeCheck}/>
                </div>
            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardCheckbox;