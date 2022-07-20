import React from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import CallVotingNameRows from "./CallVotingNameRows/CallVotingNameRows";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";
import CallVotingNameColumns from "./CallVotingNameColumns/CallVotingNameColumns";
import CallVotingCheckBox from "./CallVotingCheckBox/CallVotingCheckBox";

const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        questionName,
        chooseAnswer,
        answerSelected,
        nameColumn,
        checkBoxNameRow,
        callVotingCheckProp,
        typeCheck
    } = props;

    return (
                <div className={'call-voting-page-question-card-check__wrapper'}>
                    <div className={'call-voting-page-question-card-check__title'}>
                        <h3>{questionName}</h3>
                        <div className={'call-voting-page-question-card-check__select-answer'}>
                            <span>{chooseAnswer}</span><span>{answerSelected}</span></div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                        <div className={'call-voting-page-question-card-check__header-columns'}>
                            <span/>
                            {nameColumn}
                        </div>
                            {checkBoxNameRow}
                            {/*<CallVotingCheckBox callVotingCheckProp={callVotingCheckProp}/>*/}
                    </div>
                    <CallVotingPageVoteButtonCheckBox/>
                </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;