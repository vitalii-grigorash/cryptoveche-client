import React from "react";
import './CardQuestionGraphThinColumn.css';

const CardQuestionGraphThinColumn = () => {


    return (

        <div className={'card-question-graph-thin-column__wrapper'}>
            {/*<div className={'card-question-graph-wide-column__column'}>*/}
            {/*</div>*/}
            <div className={'card-question-graph-thin-column__columns'}>
                <svg className={'card-question-graph-thin-column__column-svg'}>
                    <rect width={'28'} height={'224'} fill={'#0084FE'}  x="0" y="0" rx="0" ry="0"/>
                </svg>
                <svg className={'card-question-graph-thin-column__column-svg'}>
                    <rect width={'28'} height={'128'} fill={'#FF4970'}  x="0" y="0" rx="0" ry="0"/>
                </svg>
                <svg className={'card-question-graph-thin-column__column-svg'}>
                    <rect width={'28'} height={'64'} fill={'#F9C521'}  x="0" y="0" rx="0" ry="0"/>
                </svg>
            </div>

            <div className={'card-question-graph-thin-column__name-column'}>Вариант один какой-то</div>
        </div>
    )

}

export default CardQuestionGraphThinColumn;