import React from "react";
import './DetailsVotesPageResultVotesCardQuestionGraph.css';
import CardQuestionGraphNameColumn from "./CardQuestionGraphNameColumn/CardQuestionGraphNameColumn";
import CardQuestionVerticalGraph from "./CardQuestionVerticalGraph/CardQuestionVerticalGraph";
import CardQuestionHorizontalGraph from "./CardQuestionHorizontalGraph/CardQuestionHorizontalGraph";

const DetailsVotesPageResultVotesCardQuestionGraph = ({hiddenGraph}) => {


    return (
            <div className={'details-votes-page-result-card-graph__wrapper'} hidden={hiddenGraph}>
               <CardQuestionHorizontalGraph/>
               {/* <CardQuestionVerticalGraph/>*/}
                <div className={'details-votes-page-result-card-graph__column-list'}>
                    <CardQuestionGraphNameColumn nameColumn={'Только через КриптоВече'}/>
                    <CardQuestionGraphNameColumn nameColumn={'На общем собрании'}/>
                    <CardQuestionGraphNameColumn nameColumn={'Недействительные бюллетени'}/>
                </div>
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestionGraph;