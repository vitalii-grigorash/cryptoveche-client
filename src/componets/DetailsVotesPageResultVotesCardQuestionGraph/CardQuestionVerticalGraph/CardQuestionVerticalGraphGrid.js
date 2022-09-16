import React from "react";
import './CardQuestionVerticalGraphGrid.css';
import CardQuestionVerticalGraphThinColumn from "../CardQuestionVerticalGraphThinColumn/CardQuestionVerticalGraphThinColumn";

const CardQuestionVerticalGraphGrid = () => {
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
                    <tr><td></td></tr>
                </tbody>
            </table>
            <CardQuestionVerticalGraphThinColumn />
            <CardQuestionVerticalGraphThinColumn />
            <CardQuestionVerticalGraphThinColumn />
        </div>
    )
}
export default CardQuestionVerticalGraphGrid;
