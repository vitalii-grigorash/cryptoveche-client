import React from "react";
import './CardQuestionVerticalGraphThinColumn.css';

const CardQuestionVerticalGraphThinColumn = () => {


    return (

            <div className={'card-question-vertical-graph-thin-column__wrapper'}>
                <div className={'card-question-vertical-graph-thin-column__columns'}>
                    <svg className={'card-question-vertical-graph-thin-column__column-svg'}>
                        <rect width={'28'} height={'224'} fill={'#0084FE'} opacity={0.8}/>
                    </svg>
                    <svg className={'card-question-vertical-graph-thin-column__column-svg'}>
                        <rect width={'28'} height={'128'} fill={'#FF4970'} opacity={0.5}/>
                    </svg>
                    <svg className={'card-question-vertical-graph-thin-column__column-svg'}>
                        <rect width={'28'} height={'64'} fill={'#F9C521'}  opacity={0.5}/>
                    </svg>
                </div>
                    <div className={'card-question-vertical-graph-thin-column__name-column'}>Вариант один какой-то</div>
            </div>
    )

}

export default CardQuestionVerticalGraphThinColumn;