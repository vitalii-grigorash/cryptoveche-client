import React from "react";
import './CardQuestionGraphNameColumn.css';

const CardQuestionGraphNameColumn = ({nameColumn}) => {

    return (
        <div className={'card-question-graph-column__wrapper'}>
            <div className={'card-question-graph-column__color-square'}></div><span>{nameColumn}</span>
        </div>
    )

}

export default CardQuestionGraphNameColumn;