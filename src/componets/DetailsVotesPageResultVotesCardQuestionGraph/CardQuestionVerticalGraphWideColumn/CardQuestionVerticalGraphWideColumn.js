import React from "react";
import './CardQuestionVerticalGraphWideColumn.css';

const CardQuestionVerticalGraphWideColumn = () => {


    return (
            <div className={'card-question-vertical-graph-wide-column__wrapper'}>
                   <div className={'card-question-vertical-graph-wide-column__columns'}>
                       <svg className={'card-question-vertical-graph-wide-column__column-svg'}>
                            <rect width={'65'} height={'300'} fill={'#4569FF'}  x="0" y="0" rx="0" ry="0"/>
                       </svg>
                   </div>
                <div className={'card-question-vertical-graph-wide-column__name-column'}>385</div>
            </div>
    )
}

export default CardQuestionVerticalGraphWideColumn;