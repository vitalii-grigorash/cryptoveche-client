import React from "react";
import './CardQuestionHorizontalGraphColumn.css';


const CardQuestionHorizontalGraphColumnRow = (props) => {

    const {
        result,
        colorColumns
    } = props;

    let widthRectOneColumn = result;

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
                <div className={'card-question-horizontal-graph-column__columns'}>
                    <svg className={'card-question-horizontal-graph-column__column-svg'}>
                        <g>
                            <rect width={widthRectOneColumn + 2} height={'28'} fill={colorColumns}/>
                            <text x={movingTextOneColumn(widthRectOneColumn) + 10} y={'35%'} fontSize={14} fill={'rgba(54, 59, 77, 0.9)'}>{widthRectOneColumn}  ({(widthRectOneColumn).toFixed(0) }%)</text>
                        </g>
                    </svg>
                </div>

    )
}

export default CardQuestionHorizontalGraphColumnRow;