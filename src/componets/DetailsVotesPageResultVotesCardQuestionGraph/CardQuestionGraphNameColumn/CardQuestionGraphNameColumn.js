import React from "react";
import './CardQuestionGraphNameColumn.css';

const CardQuestionGraphNameColumn = ({nameColumn, colorSquare}) => {

      let styleBG = colorSquare;

    const style = {
        background: styleBG,
        width: '10px',
        height: '10px',
        opacity: '0.5',
    }

    return (
            <div className={'card-question-graph-column__wrapper'}>
                <div style={style}></div><span>{nameColumn}</span>
            </div>
    )

}

export default CardQuestionGraphNameColumn;