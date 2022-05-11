import React from "react";
import './DetailsVotesPageResultVotesCardQuestionGraph.css';
import CardQuestionGraphNameColumn from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumn";
import CardQuestionGraphWideColumn from "./CardQuestionGraphWideColumn/CardQuestionGraphWideColumn";

const DetailsVotesPageResultVotesCardQuestionGraph = () => {


    return (
            <div className={'details-votes-page-result-card-graph__wrapper'}>
                <div className={'details-votes-page-result-card-graph__grid'}>
                        <table className={'grid__position-table'}>
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
                    <CardQuestionGraphWideColumn/>
                    <CardQuestionGraphWideColumn/>
                    <CardQuestionGraphWideColumn/>

                </div>
                <div className={'details-votes-page-result-card-graph__column-list'}>
                    <CardQuestionGraphNameColumn nameColumn={'Только через КриптоВече'}/>
                    <CardQuestionGraphNameColumn nameColumn={'На общем собрании'}/>
                    <CardQuestionGraphNameColumn nameColumn={'Недействительные бюллетени'}/>
                </div>
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestionGraph;