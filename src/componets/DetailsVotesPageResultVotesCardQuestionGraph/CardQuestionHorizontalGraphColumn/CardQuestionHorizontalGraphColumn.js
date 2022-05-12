import React from "react";
import './CardQuestionHorizontalGraphColumn.css';


const CardQuestionHorizontalGraphColumn = () => {

    let widthRectOneColumn = 384;



    function movingTextOneColumn () {
           let x = widthRectOneColumn;
           let sum;
        if(x > 0) {
           sum = x + 10
        } else {
            sum = x
        } return sum;
    }



    
    return (
           <>
                <div className={'card-question-horizontal-graph-column__columns'}>
                    <svg className={'card-question-horizontal-graph-column__column-svg'}>
                        <g>
                            <rect transform="translate(0)" width={widthRectOneColumn} height={'28'} fill={'#FF4970'} opacity={0.8}/>
                            <text transform="translate(0)" x={movingTextOneColumn(widthRectOneColumn)} y={20} fontSize={14} fill={'rgba(54, 59, 77, 0.9)'}>За - {widthRectOneColumn} (80%)</text>
                        </g>
                    </svg>
                    <svg className={'card-question-horizontal-graph-column__column-svg'}>
                        <g>
                            <rect width={'105'} height={'28'} fill={'#FF4970'} opacity={0.1}/>
                            <text x={115} y={20} fontSize={14} fill={'rgba(54, 59, 77, 0.6)'}>Против - 96 (20%)</text>
                        </g>
                    </svg>
                    {/*<div className={'card-question-horizontal-graph-column__name-column'}>За - 384 (80%)</div>*/}
                </div>
            </>
    )
}

export default CardQuestionHorizontalGraphColumn;