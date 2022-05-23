import React from "react";
import './CallVotingPageQuestionCard.css';
import CallVotingPageVoteButton from "../ButtonsComponets/CallVotingPageVoteButton/CallVotingPageVoteButton";
import CallVotingPageCheckboxRow from "../CallVotingPageCheckboxRow/CallVotingPageCheckboxRow";
import CallVotingPageCheckboxColumns from "../CallVotingPageCheckboxColumns/CallVotingPageCheckboxColumns";
import CallVotingPageCheckboxTable from "../CallVotingPageCheckboxTable/CallVotingPageCheckboxTable";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";

const CallVotingPageQuestionCard = ({titleName, chooseAnswer, answerSelected}) => {


    return (
            <div className={'call-voting-page-question-card__wrapper'}>
                    <div className={'call-voting-page-question-card__title'}>
                        <h3>{titleName}</h3>
                        <div className={'call-voting-page-question-card__select-answer'}>
                            <span>{chooseAnswer}</span><span>{answerSelected}</span></div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    <div className={'call-voting-page-question-card__main-content'}>
                        <CallVotingPageCheckboxRow labelCheckbox={'Да'}/>
                        <CallVotingPageCheckboxRow labelCheckbox={'Нет'}/>
                        <CallVotingPageCheckboxRow labelCheckbox={'Дайте подумать'}/>
                       {/*<CallVotingPageCheckboxTable/>*/}
                    </div>
                    <CallVotingPageVoteButton/>
            </div>
    )
}
export default CallVotingPageQuestionCard;