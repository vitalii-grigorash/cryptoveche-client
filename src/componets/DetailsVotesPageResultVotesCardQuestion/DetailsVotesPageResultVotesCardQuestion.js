import React from "react";
import './DetailsVotesPageResultVotesCardQuestion.css';
import DetailsVotesPageResultVotesCardQuestionTable
    from "../DetailsVotesPageResultVotesCardQuestionTable/DetailsVotesPageResultVotesCardQuestionTable";
import DetailsVotesPageResultVotesCardQuestionGraph
    from "../DetailsVotesPageResultVotesCardQuestionGraph/DetailsVotesPageResultVotesCardQuestionGraph";



const DetailsVotesPageResultVotesCardQuestion = ({titleName, answerSelected, hiddenTable, hiddenGraph}) => {



    return (
            <div className={'details-votes-page-result-votes-card__wrapper'}>
                <div className={'details-votes-page-result-votes-card__title'}>
                    <h3>{titleName}</h3>
                    <h5>{answerSelected}</h5>
                </div>
                <div className={'details-votes-page-result-votes-card__switch-table-gistogramma'}>
                    <div className={'tooltip'}>
                        <div className={'switch-table-gistogramma__gistogramma'}></div>
                        <span className={'tooltiptext'}>Показать графиком</span>
                    </div>
                    <div className={'tooltip'}>
                        <div className={'switch-table-gistogramma__table'}></div>
                        <span className={'tooltiptext'}>Показать таблицей</span>
                    </div>
                </div>
                <DetailsVotesPageResultVotesCardQuestionTable hiddenTable={hiddenTable}/>
                {/*<DetailsVotesPageResultVotesCardQuestionGraph hiddenGraph={hiddenGraph}/>*/}
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestion;