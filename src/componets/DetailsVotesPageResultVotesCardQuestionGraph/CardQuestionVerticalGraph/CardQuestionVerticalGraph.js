import React from "react";
import './CardQuestionVerticalGraph.css';
import CardQuestionVerticalGraphThinColumn from "../CardQuestionVerticalGraphThinColumn/CardQuestionVerticalGraphThinColumn";
import CardQuestionVerticalGraphWideColumn from "../CardQuestionVerticalGraphWideColumn/CardQuestionVerticalGraphWideColumn";

const CardQuestionVerticalGraph = () => {


    return (
        <div className={'card-question-vertical-graph__vertical-grid'}>
            <table className={'vertical-grid__position-table'}>
                <tbody>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <tr><td></td></tr>
                <td></td>
                </tbody>
            </table>
            <CardQuestionVerticalGraphWideColumn/>
            {/*<CardQuestionVerticalGraphThinColumn/>*/}
        </div>
    )
}

export default CardQuestionVerticalGraph;