import React, { useState } from "react";
import './DetailsVotesPageResultQuestionGrid.css';
import DetailsVotesPageResultGridTable from '../DetailsVotesPageResultGridTable/DetailsVotesPageResultGridTable';
import DetailsVotesPageResultVotesCardQuestionGraph from "../DetailsVotesPageResultVotesCardQuestionGraph/DetailsVotesPageResultVotesCardQuestionGraph";

const DetailsVotesPageResultQuestionGrid = (props) => {

    const {
        question
    } = props;

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
        <div className='details-votes-page-result-question-grid'>
            <div className='details-votes-page-result-question-grid__title-container'>
                <h3 className="details-votes-page-result-question-grid__title">{question.title}</h3>
                <h5 className="details-votes-page-result-question-grid__rule">Выберите один из вариантов ответа</h5>
            </div>
            <div className='details-votes-page-result-votes-card__switch-table-gistogramma'>
                <div className='tooltip'>
                    <div onClick={toggleGraphShow} className='switch-table-gistogramma__gistogramma'></div>
                    <span className='tooltiptext'>Показать графиком</span>
                </div>
                <div className='tooltip'>
                    <div onClick={toggleTableShow} className='switch-table-gistogramma__table'></div>
                    <span className='tooltiptext'>Показать таблицей</span>
                </div>
            </div>
            {tableResult && (
                <div className="details-votes-page-result-question-grid__tables-container">
                    {question.answers.map((answer) => (
                        <DetailsVotesPageResultGridTable
                            key={answer.id}
                            answer={answer}
                        />
                    ))}
                </div>
            )}
            {graphResult && (
                <DetailsVotesPageResultVotesCardQuestionGraph />
            )}
        </div>
    )
}

export default DetailsVotesPageResultQuestionGrid;
