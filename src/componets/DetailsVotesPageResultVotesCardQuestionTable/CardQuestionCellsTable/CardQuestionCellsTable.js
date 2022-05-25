import React from "react";
import './CardQuestionCellsTable.css';

const CardQuestionCellsTable = ({varinantAnswer, result}) => {


    return (
        <>
            <tr>
                <td>{varinantAnswer}</td>
                <td>{result}</td>
            </tr>
        </>
    )
}

export default CardQuestionCellsTable;