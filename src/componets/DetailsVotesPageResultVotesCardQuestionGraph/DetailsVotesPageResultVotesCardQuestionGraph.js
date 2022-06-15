import React from "react";
import './DetailsVotesPageResultVotesCardQuestionGraph.css';
import CardQuestionGraphNameColumn from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumn";
import CardQuestionVerticalGraph from "./CardQuestionVerticalGraph/CardQuestionVerticalGraph";
import CardQuestionHorizontalGraph from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraph";


const DetailsVotesPageResultVotesCardQuestionGraph = () => {



    return (
            <div className={'details-votes-page-result-card-graph__wrapper'}>
               {/*<CardQuestionHorizontalGraph/>*/}
                <CardQuestionVerticalGraph/>
                <div className={'details-votes-page-result-card-graph__column-list'}>
                    <CardQuestionGraphNameColumn nameColumn={'Только через КриптоВече'} colorSquare={'blue'}/>
                    <CardQuestionGraphNameColumn nameColumn={'На общем собрании'} colorSquare={'red'}/>
                    <CardQuestionGraphNameColumn nameColumn={'Недействительные бюллетени'} colorSquare={'yellow'}/>
                </div>
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestionGraph;