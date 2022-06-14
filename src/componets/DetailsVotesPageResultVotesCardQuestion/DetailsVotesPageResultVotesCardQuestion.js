import React from "react";
import './DetailsVotesPageResultVotesCardQuestion.css';
import DetailsVotesPageResultVotesCardQuestionTable
    from "../DetailsVotesPageResultVotesCardQuestionTable/DetailsVotesPageResultVotesCardQuestionTable";
import DetailsVotesPageResultVotesCardQuestionGraph
    from "../DetailsVotesPageResultVotesCardQuestionGraph/DetailsVotesPageResultVotesCardQuestionGraph";
import {useToggleActVote, useToggleArchVote} from "../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";



const DetailsVotesPageResultVotesCardQuestion = ({titleName, answerSelected}) => {

    const toggleAct = useToggleActVote();
    const toggleArch = useToggleArchVote()



    return (
            <div className={'details-votes-page-result-votes-card__wrapper'}>
                <div className={'details-votes-page-result-votes-card__title'}>
                    <h3>{titleName}</h3>
                    <h5>{answerSelected}</h5>
                </div>
                <div className={'details-votes-page-result-votes-card__switch-table-gistogramma'}>
                    <div className={'tooltip'}>
                        <div onClick={toggleArch} className={'switch-table-gistogramma__gistogramma'}></div>
                        <span className={'tooltiptext'}>Показать графиком</span>
                    </div>
                    <div className={'tooltip'}>
                        <div onClick={toggleAct} className={'switch-table-gistogramma__table'}></div>
                        <span className={'tooltiptext'}>Показать таблицей</span>
                    </div>
                </div>
                <DetailsVotesPageResultVotesCardQuestionTable/>
                <DetailsVotesPageResultVotesCardQuestionGraph/>
            </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestion;