import React, {useState, useRef} from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import {CallVotingListContext} from "../../contexts/CallVotingListContext";


const CallVotingPageQuestionCardList = (props) => {

    const {
        questionName,
        rulesAnswer,
        listNameAnswers
    } = props;

    const colorGreen = useRef(null)

    const { Provider } = CallVotingListContext;

    const [countAnswer, setCountAnswer] = useState({
        count: 0,
        changeCountAnswer: changeCountAnswer
    })

    function changeCountAnswer() {
        if (countAnswer.count === 0) {
            setCountAnswer({...countAnswer, count: +1})
            colorGreen.current.style.color = '#4ED4A9'
        }
    }

    return (
        <Provider value={countAnswer}>
                <div className={'call-voting-page-question-card-list__wrapper'}>
                        <div className={'call-voting-page-question-card-list__title'}>
                            <h3>{questionName}</h3>
                            <div className={'call-voting-page-question-card-list__select-answer'}>
                                <span>{rulesAnswer}</span>
                                <span ref={colorGreen}>Сейчас выбрано: {countAnswer.count}</span>
                            </div>
                            <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                        </div>
                        <div className={'call-voting-page-question-card-list__main-content'}>
                            {listNameAnswers}
                        </div>
                    <CallVotingPageVoteButtonList/>
                </div>
        </Provider>
    )
}
export default CallVotingPageQuestionCardList;