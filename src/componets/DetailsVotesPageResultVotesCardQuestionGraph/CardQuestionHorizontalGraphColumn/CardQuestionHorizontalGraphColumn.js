import React from "react";
import './CardQuestionHorizontalGraphColumn.css';


const CardQuestionHorizontalGraphColumn = () => {

    let widthRectOneColumn = 385;
    let widthRectTwoColumn = 96;


    function movingTextOneColumn () {
           let x = widthRectOneColumn;
           let sum;
        if(x > 0) {
           sum = x + 10
        } else {
            sum = x
        } return sum;
    }

    function movingTextTwoColumn () {
        let x = widthRectTwoColumn;
        let sum;
        if(x > 0) {
            sum = x + 10
        } else {
            sum = x
        } return sum;
    }



    return (
                <div className={'card-question-horizontal-graph-column__columns'}>
                    <svg className={'card-question-horizontal-graph-column__column-svg'}>
                        <g>
                            <rect width={widthRectOneColumn} height={'28'} fill={'#FF4970'}/>
                            <text x={movingTextOneColumn(widthRectOneColumn)} y={'64%'} fontSize={14} fill={'rgba(54, 59, 77, 0.9)'}>За - {widthRectOneColumn}   ({(widthRectOneColumn*0.208).toFixed(0) }%)</text>
                        </g>
                    </svg>
                    <svg className={'card-question-horizontal-graph-column__column-svg'}>
                        <g>
                            <rect width={widthRectTwoColumn} height={'28'} fill={'#FF4970'} opacity={0.1}/>
                            <text x={movingTextTwoColumn(widthRectTwoColumn)} y={'64%'} fontSize={14} fill={'rgba(54, 59, 77, 0.6)'}>Против - {widthRectTwoColumn} ({(widthRectTwoColumn*0.208).toFixed(0) }%)</text>
                        </g>
                    </svg>
                </div>

    )
}

export default CardQuestionHorizontalGraphColumn;