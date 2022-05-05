import React from "react";
import './CallVotingPageQuestionCard.css';
import CallVotingPageVoteButton from "../ButtonsComponets/CallVotingPageVoteButton/CallVotingPageVoteButton";
import CallVotingPageCheckboxRow from "../CallVotingPageCheckboxRow/CallVotingPageCheckboxRow";
import CallVotingPageCheckboxColumns from "../CallVotingPageCheckboxColumns/CallVotingPageCheckboxColumns";
import CallVotingPageCheckboxTable from "../CallVotingPageCheckboxTable/CallVotingPageCheckboxTable";

const CallVotingPageQuestionCard = ({titleName}) => {


    return (
            <div className={'call-voting-page-question-card__wrapper'}>
                    <div className={'call-voting-page-question-card__title'}>
                        <h3>{titleName}</h3>
                        <div className={'call-voting-page-question-card__select-answer'}><span>Необходимо выбрать ровно 1</span><span>Сейчас выбрано: 0</span></div>
                        <span className={'call-voting-page-question-card__materials'}>Материалы вопроса<select><option></option></select></span>
                    </div>
                    <div className={'call-voting-page-question-card__main-content'}>
                        {/*<CallVotingPageCheckboxRow labelCheckbox={'Да'}/>*/}
                        {/*<CallVotingPageCheckboxRow labelCheckbox={'Нет'}/>*/}
                        {/*<CallVotingPageCheckboxRow labelCheckbox={'Дайте подумать'}/>*/}
                       <CallVotingPageCheckboxTable/>
                    </div>
                    <CallVotingPageVoteButton/>
            </div>
    )
}
export default CallVotingPageQuestionCard;