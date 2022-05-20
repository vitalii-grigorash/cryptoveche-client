import React from "react";
import './DetailsVotesPageReadQuestionsCardCheckbox.css';
import ReadQuestionsCardCheckbox from "./ReadQuestionsCardCheckbox/ReadQuestionsCardCheckbox";

const DetailsVotesPageReadQuestionsCardCheckbox = ({nameQuestionCard, nameSelectAnswerQuestion, typeCheck, nameFirstColumn, nameSecondColumn, nameThirdColumn}) => {

    return (
            <div className={'read-questions-card-checkbox__checkbox-question-block'}>
                <div className={'checkbox-question-block__title'}>
                    <h3>{nameQuestionCard}</h3>
                    <h5>{nameSelectAnswerQuestion}</h5>
                    <span>Материалы вопроса<select><option></option></select></span>
                </div>
                <div className={'checkbox-question-block__select-checkboxes-block'}>
                    <div className={'checkbox-question-block__header-columns'}>
                        <span/>
                        <span>{nameFirstColumn}</span>
                        <span>{nameSecondColumn}</span>
                        <span>{nameThirdColumn}</span>
                    </div>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'Вариант один какой-то'} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'Вольфганг Амадей Моцарт очень длинное здесь что-то должно быть'} typeCheck={typeCheck}/>
                    <ReadQuestionsCardCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={typeCheck}/>
                </div>
            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardCheckbox;