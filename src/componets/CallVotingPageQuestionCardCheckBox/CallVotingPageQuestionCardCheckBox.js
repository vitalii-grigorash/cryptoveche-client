import React, {useState} from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";



const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        questionName,
        rulesAnswer,
        answerSelected,
        columnsGrid,
        rowsGrid,
    } = props;

    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)


    return (
                <div className={'call-voting-page-question-card-check__wrapper'}>
                    <div className={'call-voting-page-question-card-check__title'}>
                        <h3>{questionName}</h3>
                        <div className={'call-voting-page-question-card-check__select-answer'}>
                            <span>Выберите один из вариантов ответа напротив каждого кандидата<p>{rulesAnswer}</p></span>
                            <span>{answerSelected}</span></div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    {activeViewTableCheck &&
                        <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                            <table>
                                <thead>
                                <tr className={'select-checkboxes-block__name-columns'}>
                                    <th className={'name-columns__width-column'}></th>
                                    {columnsGrid}
                                </tr>
                                </thead>
                                <tbody>
                                    {rowsGrid}
                                </tbody>
                            </table>
                        </div>
                    }
                    {activeViewListCheck &&
                        <div>
                            <table>
                                <tbody>
                                {rowsGrid}
                                </tbody>
                            </table>
                        </div>
                    }
                    <CallVotingPageVoteButtonCheckBox/>
                </div>
    )
}
export default CallVotingPageQuestionCardCheckBox;