import React from "react";
import './ReadQuestionsCardNameRows.css';

const ReadQuestionsCardNameRows = ({nameQuestionRow, checkBoxReadQuestion}) => {

    return (
            <>
                <tr className={'read-questions-card-name-rows__wrapper'}>
                    <td className={'read-questions-card-name-rows__name-row'}>
                        {nameQuestionRow}
                    </td>
                    {checkBoxReadQuestion}
                </tr>
            </>
    )
}
export default ReadQuestionsCardNameRows;

