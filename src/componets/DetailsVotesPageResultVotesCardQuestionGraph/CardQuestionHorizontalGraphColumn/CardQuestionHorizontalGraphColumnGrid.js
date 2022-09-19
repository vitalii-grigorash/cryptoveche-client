import React from "react";
import './CardQuestionHorizontalGraphColumnGrid.css';
import HorizontalGraphColumnGrid from "./HorizontalGraphColumnGrid/HorizontalGraphColumnGrid";


const CardQuestionHorizontalGraphColumnGrid = (props) => {

    const {
        result,
        colorName
    } = props;

    const newCol = result.map(function(el) {
        return {...el, color: colorName}
    } )

    const bun = new Array(colorName)
    console.log(newCol)

    return (
        <div className={'card-question-horizontal-graph-column-grid__columns'}>
            {
                newCol.map((el, i) => {
                    return (
                        <HorizontalGraphColumnGrid
                            key={i}
                            resultValue={el.favor}
                            nameColumns={el.value}
                            colorColumns={el.color}
                        />
                    )
                })
            }
        </div>
    )
}
export default CardQuestionHorizontalGraphColumnGrid;