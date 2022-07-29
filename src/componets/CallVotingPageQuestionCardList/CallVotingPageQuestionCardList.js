import React, {useState, useReducer, useContext, useRef} from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import {CallVotingListProvider, useCallVotingList} from "../../contexts/CallVotingListContext";




const CallVotingPageQuestionCardList = (props) => {

    const {
        questionName,
        chooseAnswer,
        listNameAnswers
    } = props;

    const colorGreen = useRef(null)

   //
   const {countAnswer} = useCallVotingList()


    return (
                <div className={'call-voting-page-question-card-list__wrapper'}>
                        <div className={'call-voting-page-question-card-list__title'}>
                            <h3>{questionName}</h3>
                            <div className={'call-voting-page-question-card-list__select-answer'}>
                                <span>{chooseAnswer}</span>
                                <span ref={colorGreen}>Сейчас выбрано: {countAnswer.count}</span>
                            </div>
                            <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                        </div>
                        <div className={'call-voting-page-question-card-list__main-content'}>
                            {listNameAnswers}
                        </div>
                    <CallVotingPageVoteButtonList/>
                </div>
    )
}
export default CallVotingPageQuestionCardList;