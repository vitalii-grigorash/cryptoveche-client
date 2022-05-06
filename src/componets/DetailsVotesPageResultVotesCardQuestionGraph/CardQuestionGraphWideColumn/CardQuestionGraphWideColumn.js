import React from "react";
import './CardQuestionGraphWideColumn.css';

const CardQuestionGraphWideColumn = () => {


    return (
            <div className={'card-question-graph-wide-column__wrapper'}>
               <svg className={'card-question-graph-wide-column__columns'}>
                   <rect width='65' height='200' fill={'#4569FF'}  x="0" y="41" rx="0" ry="0"/>
               </svg>
            </div>
    )
}

export default CardQuestionGraphWideColumn;