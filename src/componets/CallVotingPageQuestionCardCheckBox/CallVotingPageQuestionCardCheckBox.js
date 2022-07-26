import React, {useState} from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";



const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        questionName,
        chooseAnswer,
        answerSelected,
        nameColumn,
        nameRow,
    } = props;

    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)


    return (
                <div className={'call-voting-page-question-card-check__wrapper'}>
                    <div className={'call-voting-page-question-card-check__title'}>
                        <h3>{questionName}</h3>
                        <div className={'call-voting-page-question-card-check__select-answer'}>
                            <span>{chooseAnswer}</span><span>{answerSelected}</span></div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    {activeViewTableCheck &&
                        <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                            <table>
                                <thead>
                                <tr className={'select-checkboxes-block__name-columns'}>
                                    <th className={'name-columns__width-column'}></th>
                                    {nameColumn}
                                </tr>
                                </thead>
                                <tbody>
                                    {nameRow}
                                </tbody>
                            </table>
                        </div>
                    }
                    {activeViewListCheck &&
                        <div>
                            <table>
                                <tbody>
                                    {nameRow}
                                </tbody>
                            </table>
                        </div>
                    }
                    <CallVotingPageVoteButtonCheckBox/>
                </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;