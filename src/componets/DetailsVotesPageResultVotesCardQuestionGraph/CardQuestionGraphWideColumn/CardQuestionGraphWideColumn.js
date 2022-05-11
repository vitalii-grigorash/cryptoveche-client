import React from "react";
import './CardQuestionGraphWideColumn.css';

const CardQuestionGraphWideColumn = () => {

    let heightColumn = 384;



    return (
            <div className={'card-question-graph-wide-column__wrapper'}>
                {/*<div className={'card-question-graph-wide-column__column'}>*/}
                {/*</div>*/}
                   <div className={'card-question-graph-wide-column__columns'}>
                       <svg className={'card-question-graph-wide-column__column-svg'}>
                            <rect width='65' height={heightColumn} fill={'#4569FF'}  x="0" y="0" rx="0" ry="0"/>
                       </svg>
                   </div>
                <div className={'card-question-graph-wide-column__name-column'}>{heightColumn}</div>
            </div>
    )
}

export default CardQuestionGraphWideColumn;