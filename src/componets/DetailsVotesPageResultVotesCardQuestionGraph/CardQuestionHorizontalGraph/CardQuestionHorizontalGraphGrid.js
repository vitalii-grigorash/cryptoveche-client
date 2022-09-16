import React from "react";
import './CardQuestionHorizontalGraphRow.css';
import CardQuestionHorizontalGraphColumnGrid
    from "../CardQuestionHorizontalGraphColumn/CardQuestionHorizontalGraphColumnGrid";

const CardQuestionHorizontalGraphGrid = () => {


    return (

        <div className={'card-question-horizontal-graph__horizontal-grid'}>
            <table className={'horizontal-grid__position-table'}>
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
            <CardQuestionHorizontalGraphColumnGrid/>
        </div>
    )
}

export default CardQuestionHorizontalGraphGrid;