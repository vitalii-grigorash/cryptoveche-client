import React from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import CallVotingList from "./CallVotingList/CallVotingList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";


const CallVotingPageQuestionCardList = ({titleName, chooseAnswer, selectValue}) => {




    return (
            <div className={'call-voting-page-question-card-list__wrapper'}>
                    <div className={'call-voting-page-question-card-list__title'}>
                        <h3>{titleName}</h3>
                        <div className={'call-voting-page-question-card-list__select-answer'}>
                            <span>{chooseAnswer}</span>
                            <span>Сейчас выбрано: {selectValue}</span>
                        </div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    <div className={'call-voting-page-question-card-list__main-content'}>
                        <CallVotingList labelCheckbox={'Да'}/>
                        <CallVotingList labelCheckbox={'Нет'}/>
                        <CallVotingList labelCheckbox={'Дайте подумать'}/>
                    </div>
                <CallVotingPageVoteButtonList/>
            </div>
    )
}
export default CallVotingPageQuestionCardList;