import React from "react";
import './CardQuestionHorizontalGraph.css';
import CardQuestionVerticalGraphThinColumn
    from "../CardQuestionVerticalGraphThinColumn/CardQuestionVerticalGraphThinColumn";
import CardQuestionHorizontalGraphColumn from "../CardQuestionHorizontalGraphColumn/CardQuestionHorizontalGraphColumn";

const CardQuestionHorizontalGraph = () => {


    return (

            <div className={'card-question-horizontal-graph__horizontal-grid'}>
                <table className={'horizontal-grid__position-table'}>
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
                </table>
              <CardQuestionHorizontalGraphColumn/>

            </div>

    )
}

export default CardQuestionHorizontalGraph;