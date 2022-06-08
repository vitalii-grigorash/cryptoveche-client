import React from "react";
import './CardQuestionHorizontalGraph.css';
import CardQuestionHorizontalGraphColumn from "../CardQuestionHorizontalGraphColumn/CardQuestionHorizontalGraphColumn";

const CardQuestionHorizontalGraph = () => {


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
                <CardQuestionHorizontalGraphColumn/>
                <CardQuestionHorizontalGraphColumn/>


            </div>

    )
}

export default CardQuestionHorizontalGraph;