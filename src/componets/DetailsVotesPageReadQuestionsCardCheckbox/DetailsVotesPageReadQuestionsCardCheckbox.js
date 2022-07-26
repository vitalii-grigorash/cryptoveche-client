import React from "react";
import './DetailsVotesPageReadQuestionsCardCheckbox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";

const DetailsVotesPageReadQuestionsCardCheckbox = (props) => {

    const  {nameQuestionCard,
             nameSelectAnswerQuestion,
             nameQuestionColumn,
             nameQuestionRow} = props;

    return (
            <div className={'read-questions-card-checkbox__checkbox-question-block'}>
                <div className={'checkbox-question-block__title'}>
                        <h3>{nameQuestionCard}</h3>
                        <h5>{nameSelectAnswerQuestion}</h5>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                </div>
                <div className={'checkbox-question-block__select-checkboxes-block'}>
                        <table>
                            <thead>
                            <tr className={'select-checkboxes-block__name-columns'}>
                                <th className={'name-columns__width-column'}></th>
                                {nameQuestionColumn}
                            </tr>
                            </thead>
                            <tbody>
                               {nameQuestionRow}
                            </tbody>
                        </table>
                    </div>

            </div>
    )
}

export default DetailsVotesPageReadQuestionsCardCheckbox;