import React from "react";
import './DetailsVotesPageResultVotesCardQuestion.css';
import table_icon from '../../img/DetailsVotesPageResult_noactive_table_icon.svg';
import gistogramma_icon from '../../img/DetailsVotesPageResult_noactive_gistogram_icon.svg'
import DetailsVotesPageResultVotesCardQuestionTable
    from "../DetailsVotesPageResultVotesCardQuestionTable/DetailsVotesPageResultVotesCardQuestionTable";



const DetailsVotesPageResultVotesCardQuestion = () => {

    return (
        <div className={'details-votes-page-result-votes-card__wrapper'}>
            <div className={'details-votes-page-result-votes-card__title'}>
                <h3>1. Согласны ли вы с решением №576?</h3>
                <h5>Необходимо выбрать ровно 1</h5>
            </div>
            <div className={'details-votes-page-result-votes-card__switch-table-gistogramma'}>
                <div className="tooltip">
                    <div className={'switch-table-gistogramma__gistogramma'}></div>
                    <span className="tooltiptext">Показать графиком</span>
                </div>
                <div className="tooltip">
                    <div className={'switch-table-gistogramma__table'}></div>
                    <span className="tooltiptext">Показать таблицей</span>
                </div>

            </div>
            <DetailsVotesPageResultVotesCardQuestionTable/>
        </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestion;