import React from "react";
import './DetailsVotesPageReadQuestionsCardCheckbox.css';
import ReadQuestionsCardCheckbox from "./ReadQuestionsCardCheckbox/ReadQuestionsCardCheckbox";

const DetailsVotesPageReadQuestionsCardCheckbox = ({nameQuestionCard, nameSelectAnswerQuestion}) => {

    return (
        <div className={'details-votes-page-read-questions__question-block'}>
            <div className={'question-block__title'}>
                <h3>{nameQuestionCard}</h3>
                <h5>{nameSelectAnswerQuestion}</h5>
                <span>Материалы вопроса<select><option></option></select></span>
            </div>
            <div className={'question-block__header-columns'}>
                <span/>
                <span>Прoтив</span>
                <span>Воздержаться</span>
                <span>За</span>
            </div>
            <div className={'question-block__select-checkboxes-block'}>
                <ReadQuestionsCardCheckbox checkBoxNameRow={'Вариант один какой-то'} typeCheck={'checkbox'}/>
                <ReadQuestionsCardCheckbox checkBoxNameRow={'А вот и второй'} typeCheck={'checkbox'}/>
                <ReadQuestionsCardCheckbox checkBoxNameRow={'Некий третий варик'} typeCheck={'checkbox'}/>
                <ReadQuestionsCardCheckbox checkBoxNameRow={'Вольфганг Амадей Моцарт очень длинное здесь что-то должно быть'} typeCheck={'checkbox'}/>
            </div>
        </div>
    )
}

export default DetailsVotesPageReadQuestionsCardCheckbox;