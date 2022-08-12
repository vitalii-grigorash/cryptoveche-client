import React, { useEffect, useState } from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";
import CallVotingNameRows from './CallVotingNameRows/CallVotingNameRows';
import * as Events from '../../Api/Events';

const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        questionTitle,
        columns,
        rows,
        question,
        eventId,
        requestHelper
    } = props;

    const [isListView, setListView] = useState(false);
    const [answersArray, setAnswersArray] = useState([]);
    const [isBulletinVoted, setBulletinVoted] = useState(false);

    useEffect(() => {
        if (columns.length > 4) {
            setListView(true);
        }
    }, [columns.length])

    function addAnswerToArray(rowId, columnId) {
        if (answersArray.length === 0) {
            const dataToAdd = {
                id: rowId, // здесь мы отправляем id строк rows.id
                values: [
                    columnId // здесь мы отправляем массив из id колонок columns.id
                ]
            }
            setAnswersArray([...answersArray, dataToAdd]);
        } else {
            const newColumnsArray = answersArray.map((row) => {

                const dataToAdd = {
                    id: row.id,
                    values: []
                }

                if (row.id === rowId) {

                    const newColumnsArray = row.values.map((column) => {
                        const columnsArray = []
                        if (column !== columnId) {
                            columnsArray.push(columnId);
                        } else {
                            columnsArray.push(column);
                        }
                        return columnsArray
                    })
                    console.log(newColumnsArray);
                    dataToAdd.values.push(newColumnsArray);
                }

                return dataToAdd;
            })

            console.log(newColumnsArray);
        }
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
        }
        const body = {
            eventId: eventId,
            eventArray: [
                dataToSend
            ]
        }

        console.log(body);
        // requestHelper(Events.vote, body)
        //     .then((data) => {
        //         if (data.status === 'ok') {
        //             setBulletinVoted(true);
        //             setAnswersArray([]);
        //         }
        //     })
    }

    return (
        <div className={'call-voting-page-question-card-check__wrapper'}>
            <div className={'call-voting-page-question-card-check__title'}>
                <h3>{questionTitle}</h3>
                <div className={'call-voting-page-question-card-check__select-answer'}>
                    <span>
                        Выберите один из вариантов ответа напротив каждого кандидата
                        {question.is_required_grid_rows && (
                            <p>Все строки обязательны для заполнения</p>
                        )}
                    </span>
                    <span>Вы проголосовали</span>
                </div>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'} />
            </div>
            {!isListView ? (
                <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                    <div className={'select-checkboxes-block__name-columns'}>
                        <div className={'name-columns__width-column'} />
                        {columns.map(el => (
                            <p key={el.id} className={'call-voting-name-columns__wrapper'}>{el.value}</p>
                        ))}
                    </div>
                    <div>
                        {rows.map(row => (
                            <CallVotingNameRows
                                key={row.id}
                                rowId={row.id}
                                rowValue={row.value}
                                question={question}
                                columns={question.options.columns}
                                isListView={isListView}
                                addAnswerToArray={addAnswerToArray}
                                removeAnswerFromArray={removeAnswerFromArray}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    {rows.map(row => (
                        <CallVotingNameRows
                            key={row.id}
                            rowId={row.id}
                            rowValue={row.value}
                            question={question}
                            columns={question.options.columns}
                            isListView={isListView}
                            addAnswerToArray={addAnswerToArray}
                            removeAnswerFromArray={removeAnswerFromArray}
                        />
                    ))}
                </div>
            )}
            <CallVotingPageVoteButtonCheckBox
                sendVote={sendVote}
            />
        </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;
