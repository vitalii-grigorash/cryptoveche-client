import React from "react";
import './ReadQuestionsCardNameColumns.css';

const ReadQuestionsCardNameColumns = ({nameQuestionColumn}) => {

    return (
            <>
                <th className={'read-questions-card-name-columns__wrapper'}>{nameQuestionColumn}</th>
            </>

        )
}

export default ReadQuestionsCardNameColumns;
