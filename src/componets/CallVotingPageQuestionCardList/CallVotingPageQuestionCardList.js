import React, { useState, useRef } from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingList from "../CallVotingPageQuestionCardList/CallVotingList/CallVotingList";
import * as Events from '../../Api/Events';

const CallVotingPageQuestionCardList = (props) => {

    const {
        questionName,
        rulesAnswer,
        questionColumns,
        questionRows,
        question,
        eventId,
        requestHelper
    } = props;

    console.log(question);

    const [answersArray, setAnswersArray] = useState([]);

    console.log(answersArray);

    function addAnswerToArray(rowId, columnId) {
        const dataToAdd = {
            id: rowId, // здесь мы отправляем id строк rows.id
            values: [
                columnId
            ] // здесь мы отправляем массив из id колонок columns.id
        }
        setAnswersArray([...answersArray, dataToAdd]);
    }

    function removeAnswerFromArray(rowId) {
        const filteredAnswers = answersArray.filter((answer => answer.id !== rowId));
        setAnswersArray(filteredAnswers);
    }

    function sendVote() {
        const dataToSend = {
            for_user_id: "",
            question_id: question.id, // здесь мы отправляем id вопроса questions.id
            res: answersArray
            // res: [
            //     {
            //         id: '249f2ae0-af6e-4130-b326-da04c27907dc', // здесь мы отправляем id строк rows.id
            //         values: [
            //             'cbfed193-b99d-418a-829c-d4f407434fca',
            //             '905451cc-e34d-4da0-b646-7307023385a5'
            //         ] // здесь мы отправляем массив из id колонки columns.id
            //     },
            //     {
            //         id: 'f64579e8-e590-4c95-9dc9-f71572862dcd', // здесь мы отправляем id строк rows.id
            //         values: [
            //             'f031c96d-02e1-4c3c-a391-eaed8390c402',
            //             'e63b6cce-c064-4273-8b33-6fa717ce702e'
            //         ] // здесь мы отправляем массив из id колонки columns.id
            //     },
            //     {
            //         id: '96d2b2d8-766e-48d6-8a2a-448d7dec336c', // здесь мы отправляем id строк rows.id
            //         values: [
            //             'cbfed193-b99d-418a-829c-d4f407434fca',
            //             'f031c96d-02e1-4c3c-a391-eaed8390c402',
            //             '905451cc-e34d-4da0-b646-7307023385a5',
            //             'e63b6cce-c064-4273-8b33-6fa717ce702e'
            //         ] // здесь мы отправляем массив из id колонки columns.id
            //     }
            // ]
        }

        const body = {
            eventId: eventId,
            eventArray: [
                dataToSend
            ]
        }

        // console.log(body);

        requestHelper(Events.vote, body)
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <div className='call-voting-page-question-card-list__wrapper'>
            <div className='call-voting-page-question-card-list__title'>
                <h3>{questionName}</h3>
                <div className='call-voting-page-question-card-list__select-answer'>
                    <span>{rulesAnswer}</span>
                    <span
                        className={`call-voting-page-question-card-list__selected-answers ${answersArray.length === 0 ? '' : answersArray.length > 1 ? 'call-voting-page-question-card-list__selected-answers_red' : 'call-voting-page-question-card-list__selected-answers_green'}`}
                    >
                        Сейчас выбрано: {answersArray.length}
                    </span>
                </div>
                <MaterialsVoteQuestion materialsVoteQuestion='Материалы вопроса' />
            </div>
            <div className='call-voting-page-question-card-list__main-content'>
                {questionRows.map(elem => {
                    return <CallVotingList
                        key={elem.id}
                        rowId={elem.id}
                        nameAnswer={elem.value}
                        addAnswerToArray={addAnswerToArray}
                        removeAnswerFromArray={removeAnswerFromArray}
                        questionColumns={questionColumns}
                    />
                })}
            </div>
            <CallVotingPageVoteButtonList
                sendVote={sendVote}
                answersArray={answersArray}
            />
        </div>
    )
}

export default CallVotingPageQuestionCardList;
