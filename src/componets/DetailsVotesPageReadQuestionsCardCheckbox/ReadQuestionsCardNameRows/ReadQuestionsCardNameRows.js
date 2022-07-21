import React from "react";
import './ReadQuestionsCardNameRows.css';

const ReadQuestionsCardNameRows = ({nameQuestionRow, checkBoxReadQuestion}) => {

    return (
            <>
                <tr className={'call-voting-name-rows__wrapper'}>
                    <td className={'call-voting-name-rows__name-row'}>
                        {nameQuestionRow}
                    </td>
                    {checkBoxReadQuestion}
                </tr>
            </>
    )
}
export default ReadQuestionsCardNameRows;

