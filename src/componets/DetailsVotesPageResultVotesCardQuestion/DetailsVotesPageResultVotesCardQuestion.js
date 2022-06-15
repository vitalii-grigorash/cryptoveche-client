import React, {useState} from "react";
import './DetailsVotesPageResultVotesCardQuestion.css';
import DetailsVotesPageResultVotesCardQuestionTable
    from "../DetailsVotesPageResultVotesCardQuestionTable/DetailsVotesPageResultVotesCardQuestionTable";
import DetailsVotesPageResultVotesCardQuestionGraph
    from "../DetailsVotesPageResultVotesCardQuestionGraph/DetailsVotesPageResultVotesCardQuestionGraph";




const DetailsVotesPageResultVotesCardQuestion = ({titleName, answerSelected}) => {

    const [graphResult, setGraphResult] = useState(false)
    const [tableResult, setTableResult] = useState(true)

    function toggleGraphShow() {
        setGraphResult(true)
        setTableResult(false)
    }
    function toggleTableShow() {
        setTableResult(true)
        setGraphResult(false)
    }

    return (
            <div className={'details-votes-page-result-votes-card__wrapper'}>
                <div className={'details-votes-page-result-votes-card__title'}>
                    <h1 className={'details-votes-page-result-votes__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                    <h3>{titleName}</h3>
                    <h5>{answerSelected}</h5>
                </div>
                <div className={'details-votes-page-result-votes-card__switch-table-gistogramma'}>
                    <div className={'tooltip'}>
                        <div onClick={() => {toggleGraphShow()}} className={'switch-table-gistogramma__gistogramma'}></div>
                        <span className={'tooltiptext'}>Показать графиком</span>
                    </div>
                    <div className={'tooltip'}>
                        <div onClick={() => {toggleTableShow()}} className={'switch-table-gistogramma__table'}></div>
                        <span className={'tooltiptext'}>Показать таблицей</span>
                    </div>
                </div>
                {tableResult && (
                    <DetailsVotesPageResultVotesCardQuestionTable/>
                )}
                {graphResult && (
                    <DetailsVotesPageResultVotesCardQuestionGraph/>
                )}
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestion;