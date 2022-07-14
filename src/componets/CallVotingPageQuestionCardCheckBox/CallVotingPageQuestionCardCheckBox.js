import React from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import CallVotingCheckBox from "./CallVotingCheckBox/CallVotingCheckBox";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";

const CallVotingPageQuestionCardCheckBox = ({titleName, chooseAnswer, answerSelected, nameFirstColumn, nameSecondColumn, nameThirdColumn, typeCheck}) => {


    return (
                <div className={'call-voting-page-question-card-check__wrapper'}>
                    <div className={'call-voting-page-question-card-check__title'}>
                        <h3>{titleName}</h3>
                        <div className={'call-voting-page-question-card-check__select-answer'}>
                            <span>{chooseAnswer}</span><span>{answerSelected}</span></div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                        <div className={'call-voting-page-question-card-check__header-columns'}>
                            <span/>
                            <span>{nameFirstColumn}</span>
                            <span>{nameSecondColumn}</span>
                            <span>{nameThirdColumn}</span>
                        </div>
                            <CallVotingCheckBox checkBoxNameRow={'Только через КриптоВече'}/>
                            <CallVotingCheckBox checkBoxNameRow={'На общем собрании'}/>
                            <CallVotingCheckBox checkBoxNameRow={'Третий варентос'}/>
                            <CallVotingCheckBox checkBoxNameRow={'Очень совсем уж динный четвертый чтобы стыдно было такие варианты давать блин'}/>
                    </div>
                    <CallVotingPageVoteButtonCheckBox/>
                </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;