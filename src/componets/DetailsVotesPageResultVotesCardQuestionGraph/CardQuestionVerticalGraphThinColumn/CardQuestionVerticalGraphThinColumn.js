import React from "react";
import './CardQuestionVerticalGraphThinColumn.css';
import VerticalGraphThinColumn from "./VerticalGraphThinColumn/VerticalGraphThinColumn";

const CardQuestionVerticalGraphThinColumn = (props) => {

    const {
        nameAnswer,
        result
    } = props;

    return (
            <div className={'card-question-vertical-graph-thin-column__wrapper'}>
                <div className={'card-question-vertical-graph-thin-column__columns'}>
                    {
                        result.map((el, i) => {
                            return (
                                <VerticalGraphThinColumn
                                key={i}
                                result={el.favor}
                                />
                            )
                        })
                    }
                </div>
                    <div className={'card-question-vertical-graph-thin-column__name-column'}>{nameAnswer}</div>
            </div>
    )
}
export default CardQuestionVerticalGraphThinColumn;