import React, { useEffect, useState } from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";
import CallVotingNameRows from './CallVotingNameRows/CallVotingNameRows';
import greenIcon from '../../img/votet-status-icon.svg';

const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        questionTitle,
        columns,
        rows,
        question,
        isReVoting,
        results,
        materialsQuestion,
        currentEventData,
        addAnswer,
        removeAnswer,
        isEventSended,
        handleSendEventTrigger,
        validateSendVoteButton,
        votedArray
    } = props;

    const [isListView, setListView] = useState(false);
    const [answersArray, setAnswersArray] = useState([]);
    const [isBulletinVoted, setBulletinVoted] = useState(false);
    const [activeMaterialsQuestion, setActiveMaterialsQuestion] = useState(false);

    useEffect(() => {
        const filteredBulletin = currentEventData.ballots.find(ballot => ballot.bulletinId === question.bulletinId);
        if (filteredBulletin !== undefined) {
            if (filteredBulletin.bulletinId === question.bulletinId) {
                setBulletinVoted(true);
            }
        } else {
            const currentQuestionAnswer = votedArray.find((answer => answer.question_id === question.id))
            if (currentQuestionAnswer !== undefined) {
                setBulletinVoted(true);
            }
        }
    }, [currentEventData.ballots, question.bulletinId, votedArray, question.id])

    useEffect(() => {
        if (isEventSended) {
            setAnswersArray([]);
            handleSendEventTrigger();
        }
        // eslint-disable-next-line
    }, [isEventSended]);

    useEffect(() => {
        if (question.is_required_grid_rows) {
            if (rows.length === answersArray.length) {
                validateSendVoteButton(true, question.id);
            } else {
                validateSendVoteButton(false, question.id);
            }
        } else {
            validateSendVoteButton(true, question.id);
        }
        // eslint-disable-next-line
    }, [question.is_required_grid_rows, rows.length, answersArray.length, question.id]);

    useEffect(() => {
        if (columns.length > 4) {
            setListView(true);
        } if (materialsQuestion.length !== 0) {
            setActiveMaterialsQuestion(true)
        }
    }, [columns.length, materialsQuestion.length])

    function addGridAnswer(rowId, columnId) {
        const dataToAdd = {
            id: rowId,
            values: [
                columnId
            ]
        }
        const dataToSend = {
            for_user_id: "",
            question_id: question.id, // здесь мы отправляем id вопроса questions.id
            resData: dataToAdd
        }
        addAnswer(dataToSend, question.template);
        const objToAdd = answersArray.find(obj => obj.id === rowId);
        if (objToAdd === undefined) {
            const dataToAdd = {
                id: rowId,
                values: [
                    columnId
                ]
            }
            setAnswersArray([...answersArray, dataToAdd]);
        } else {
            objToAdd.values.push(columnId);
            const filteredAnswersArray = answersArray.filter((answer => answer.id !== rowId));
            filteredAnswersArray.push(objToAdd);
            setAnswersArray(filteredAnswersArray);
        }
    }

    function removeGridAnswer(rowId, columnId) {
        removeAnswer(question.id, rowId, columnId, question.template);
        const obj = answersArray.find(obj => obj.id === rowId);
        const filteredAnswersArray = answersArray.filter((answer => answer.id !== rowId));
        const newValues = obj.values.filter((column => column !== columnId));
        obj.values = newValues;
        if (obj.values.length === 0) {
            setAnswersArray(filteredAnswersArray);
        } else {
            filteredAnswersArray.push(obj);
            setAnswersArray(filteredAnswersArray);
        }
    }

    function addRadioGridAnswer(rowId, columnId) {
        const dataToAdd = {
            id: rowId,
            values: [
                columnId
            ]
        }
        const dataToSend = {
            for_user_id: "",
            question_id: question.id, // здесь мы отправляем id вопроса questions.id
            resData: dataToAdd
        }
        addAnswer(dataToSend, question.template);
        const objToAdd = answersArray.find(obj => obj.id === rowId);
        if (objToAdd === undefined) {
            const dataToAdd = {
                id: rowId,
                values: [
                    columnId
                ]
            }
            setAnswersArray([...answersArray, dataToAdd]);
        } else {
            objToAdd.values = [columnId];
            const filteredAnswersArray = answersArray.filter((answer => answer.id !== rowId));
            filteredAnswersArray.push(objToAdd);
            setAnswersArray(filteredAnswersArray);
        }
    }

    function removeRadioGridAnswer(rowId, columnId) {
        removeAnswer(question.id, rowId, columnId, question.template);
        const filteredAnswers = answersArray.filter((answer => answer.id !== rowId));
        setAnswersArray(filteredAnswers);
    }

    function addAnswerToArray(rowId, columnId) {
        if (question.template === 'grid') {
            addGridAnswer(rowId, columnId);
        } else {
            addRadioGridAnswer(rowId, columnId);
        }
    }

    function removeAnswerFromArray(rowId, columnId) {
        if (question.template === 'grid') {
            removeGridAnswer(rowId, columnId);
        } else {
            removeRadioGridAnswer(rowId, columnId);
        }
    }

    function onRevoteClick() {
        setBulletinVoted(false);
    }

    return (
        <div className={`call-voting-page-question-card-check__main ${isBulletinVoted && 'call-voting-page-question-card-check__main_voted'}`}>
            <div className={'call-voting-page-question-card-check__wrapper'}>
                <div className={'call-voting-page-question-card-check__title'}>
                    <h3>{questionTitle}</h3>
                    <div className={'call-voting-page-question-card-check__select-answer'}>
                        <span className={`call-voting-page-question-card-check__rule-text ${isBulletinVoted && 'call-voting-page-question-card-check__rule-text_voted'}`}>
                            Выберите один из вариантов ответа напротив каждого кандидата
                            {question.is_required_grid_rows && (
                                <p>Все строки обязательны для заполнения</p>
                            )}
                        </span>
                        {isBulletinVoted && (
                            <div className="call-voting-page-question-card-check__voted-container">
                                <img className="call-voting-page-question-card-check__icon" src={greenIcon} alt="Иконка" />
                                <p className="call-voting-page-question-card-check__voted-text">Вы проголосовали</p>
                            </div>
                        )}
                    </div>
                    {activeMaterialsQuestion &&
                        <MaterialsVoteQuestion currentMaterialsQuestion={materialsQuestion} materialsVoteName={'Материалы вопроса'} />
                    }
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
                                    isBulletinVoted={isBulletinVoted}
                                    answersArray={answersArray}
                                    isMyBulletinTabActive={false}
                                    results={results}
                                    currentEventData={currentEventData}
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
                                isBulletinVoted={isBulletinVoted}
                                answersArray={answersArray}
                                isMyBulletinTabActive={false}
                                results={results}
                                currentEventData={currentEventData}
                            />
                        ))}
                    </div>
                )}
                <CallVotingPageVoteButtonCheckBox
                    isBulletinVoted={isBulletinVoted}
                    isReVoting={isReVoting}
                    onRevoteClick={onRevoteClick}
                />
            </div>
        </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;
