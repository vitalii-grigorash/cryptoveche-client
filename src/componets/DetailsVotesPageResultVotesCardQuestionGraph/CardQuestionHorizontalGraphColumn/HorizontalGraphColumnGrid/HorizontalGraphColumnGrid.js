import React from "react";
import '../CardQuestionHorizontalGraphColumnGrid.css';

const HorizontalGraphColumnGrid = (props) => {

    const {
        resultValue,
        nameColumns,
        colorColumns
    } = props;

    let widthRectOneColumn = resultValue;

    function movingTextOneColumn (x) {
        let sum;
        if(x > 0) {
            sum = x + 10
        } else {
            sum = x
        }
        return sum;
    }

    return (
        <svg className={'card-question-horizontal-graph-column-grid__column-svg'}>
            <g>
                <rect width={widthRectOneColumn + 1} height={'28'} fill={colorColumns}/>
                <text x={movingTextOneColumn(widthRectOneColumn) + 12} y={'55%'} fontSize={12} fill={'rgba(54, 59, 77, 0.9)'}>{nameColumns} - {widthRectOneColumn}   ({((widthRectOneColumn / 600) * 100).toFixed(1)}%)</text>
            </g>
        </svg>
    )
}
export default HorizontalGraphColumnGrid;
