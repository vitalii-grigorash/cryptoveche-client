import React, { useEffect, useState } from "react";
import './CallVotingPage.css';
import mobile_icon_details_vote from '../../img/CallVotingMobileIcon.svg';
import DetailsVotesPageDaysEndRegStartVote from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import CallVotingPageQuestionCardList from "../CallVotingPageQuestionCardList/CallVotingPageQuestionCardList";
import CallVotingPageQuestionCardCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingPageQuestionCardCheckBox";
import { useNavigate } from "react-router-dom";
import * as Events from '../../Api/Events';
import VoteButton from "../VoteButton/VoteButton";

const CallVotingPage = (props) => {

    const {
        requestHelper,
        handleCurrentEvents
    } = props;

    const navigate = useNavigate();

    const [currentEventData, setCurrentEventData] = useState({});
    const [questionsTemplateRow, setQuestionsTemplateRow] = useState([]);
    const [questionsTemplateGrid, setQuestionsTemplateGrid] = useState([]);
    const [results, setResults] = useState([]);
    const [arrayToSend, setArrayToSend] = useState([]);
    const [isEventSended, setEventSended] = useState(false);
    const [buttonValidationArray, setButtonValidationArray] = useState([]);
    const [votedArray, setVotedArray] = useState([]);

    function templateRow(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions');
        setQuestionsTemplateRow(filteredQuestions);
    }

    function templateGrid(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'grid' || e.template === 'radio_grid');
        setQuestionsTemplateGrid(filteredQuestions);
    }

    function getEvent() {
        if (localStorage.getItem('currentEvent')) {
            const currentEvent = localStorage.getItem('currentEvent');
            const event = JSON.parse(currentEvent);
            const body = {
                id: event.id
            }
            requestHelper(Events.getEvent, body)
                .then((data) => {
                    if (data.status !== 'ended' || data.status !== 'quorum_unpresant') {
                        setCurrentEventData(data);
                        templateRow(data.questions);
                        templateGrid(data.questions);
                        if (data.results.questions) {
                            setResults(data.results.questions);
                        }
                    } else {
                        navigate('/');
                    }
                })
                .catch((err) => {
                    throw new Error(err.message);
                })
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        getEvent();
        // eslint-disable-next-line
    }, [])

    function validateSendVoteButton(isButtonActive, questionId) {
        const currentQuestion = arrayToSend.find((question => question.question_id === questionId));
        if (currentQuestion !== undefined) {
            const foudedQuestion = buttonValidationArray.find((question) => question.id === questionId);
            if (foudedQuestion === undefined) {
                const questionValidation = {
                    id: questionId,
                    isValid: isButtonActive
                }
                setButtonValidationArray([...buttonValidationArray, questionValidation]);
            } else {
                const filteredValidationArray = buttonValidationArray.filter((question => question.id !== questionId));
                foudedQuestion.isValid = isButtonActive
                filteredValidationArray.push(foudedQuestion);
                setButtonValidationArray(filteredValidationArray);
            }
        } else {
            const foudedQuestion = buttonValidationArray.find((question) => question.id === questionId);
            if (foudedQuestion !== undefined) {
                const filteredValidationArray = buttonValidationArray.filter((question => question.id !== questionId));
                setButtonValidationArray(filteredValidationArray);
            }
        }
    }

    function addSimpleAnswer(foundObject, filteredArray, data) {
        foundObject.res.push(data.resData);
        filteredArray.push(foundObject);
        setArrayToSend(filteredArray);
    }

    function addGridAnswer(foundObject, filteredArray, data) {
        const objToAdd = foundObject.res.find(obj => obj.id === data.resData.id);
        if (objToAdd === undefined) {
            foundObject.res.push(data.resData);
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        } else {
            objToAdd.values.push(data.resData.values[0]);
            const filteredAnswersArray = foundObject.res.filter((answer => answer.id !== data.resData.id));
            filteredAnswersArray.push(objToAdd);
            foundObject.res = filteredAnswersArray;
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        }
    }

    function addRadioGridAnswer(foundObject, filteredArray, data) {
        const objToAdd = foundObject.res.find(obj => obj.id === data.resData.id);
        if (objToAdd === undefined) {
            foundObject.res.push(data.resData);
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        } else {
            objToAdd.values = [data.resData.values[0]];
            const filteredAnswersArray = foundObject.res.filter((answer => answer.id !== data.resData.id));
            filteredAnswersArray.push(objToAdd);
            foundObject.res = filteredAnswersArray;
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        }
    }

    function addAnswer(data, template) {
        const dataToAdd = {
            for_user_id: data.for_user_id,
            question_id: data.question_id,
            res: [
                data.resData
            ]
        }
        const foundObject = arrayToSend.find(question => question.question_id === data.question_id);
        const filteredArray = arrayToSend.filter(question => question.question_id !== data.question_id);
        if (foundObject !== undefined) {
            if (template === 'grid') {
                addGridAnswer(foundObject, filteredArray, data);
            } else if (template === 'radio_grid') {
                addRadioGridAnswer(foundObject, filteredArray, data);
            } else {
                addSimpleAnswer(foundObject, filteredArray, data);
            }
        } else {
            setArrayToSend([...arrayToSend, dataToAdd]);
        }
    }

    function removeSimpleAnswer(foundObject, filteredArray, rowId) {
        const newResArray = foundObject.res.filter(response => response.id !== rowId);
        foundObject.res = newResArray;
        if (foundObject.res.length === 0) {
            setArrayToSend(filteredArray);
        } else {
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        }
    }

    function removeGridAnswer(foundObject, filteredArray, rowId, columnId) {
        const currentAnswer = foundObject.res.find(answer => answer.id === rowId);
        const filteredAnswersArray = foundObject.res.filter((answer => answer.id !== rowId));
        const newValues = currentAnswer.values.filter((column => column !== columnId));
        currentAnswer.values = newValues;
        if (filteredAnswersArray.length === 0) {
            setArrayToSend(filteredArray);
        } else {
            if (currentAnswer.values.length === 0) {
                foundObject.res = filteredAnswersArray;
                filteredArray.push(foundObject);
                setArrayToSend(filteredArray);
            } else {
                filteredAnswersArray.push(currentAnswer)
                foundObject.res = filteredAnswersArray;
                filteredArray.push(foundObject);
                setArrayToSend(filteredArray);
            }
        }
    }

    function removeRadioGridAnswer(foundObject, filteredArray, rowId) {
        const filteredAnswersArray = foundObject.res.filter((answer => answer.id !== rowId));
        foundObject.res = filteredAnswersArray
        if (foundObject.res.length === 0) {
            setArrayToSend(filteredArray);
        } else {
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        }
    }

    function removeAnswer(questionId, rowId, columnId, template) {
        const foundObject = arrayToSend.find(question => question.question_id === questionId);
        const filteredArray = arrayToSend.filter(question => question.question_id !== questionId);
        if (template === 'grid') {
            removeGridAnswer(foundObject, filteredArray, rowId, columnId);
        } else if (template === 'radio_grid') {
            removeRadioGridAnswer(foundObject, filteredArray, rowId);
        } else {
            removeSimpleAnswer(foundObject, filteredArray, rowId);
        }
    }

    function handleSendEventTrigger() {
        if (isEventSended) {
            setEventSended(false);
        } else {
            setEventSended(true);
        }
    }

    function sendVote() {
        const body = {
            eventId: currentEventData.id,
            eventArray: arrayToSend
        }
        requestHelper(Events.vote, body)
            .then((data) => {
                if (data.status === 'ok') {
                    setVotedArray(arrayToSend);
                    setArrayToSend([]);
                    setButtonValidationArray([]);
                    getEvent();
                    handleSendEventTrigger();
                }
            })
            .catch((err) => {
                throw new Error(err.message);
            })
    }

    return (
        <div className='call-voting-page__wrapper'>
            <TitleVotesDetailsCallVotingProfile
                firstLetter='КлиентКриптовече'
                secondLetter='Голосование по повестке'
                titleName='Голосование по повестке' mobileLetter='Назад на главную' />
            <div className='call-voting-page__title'>
                <h2 className='call-voting-page-title__title'>{currentEventData.title}</h2>
                <button className='call-voting-page-title__details-btn'
                    onClick={() => { handleCurrentEvents(currentEventData, true) }}>Детали голосования
                </button>
                <span className='call-voting-page-title__details-icon'
                    onClick={() => { handleCurrentEvents(currentEventData, true) }}><img alt='иконка' src={mobile_icon_details_vote} />
                    ДЕТАЛИ ГОЛОСОВАНИЯ
                </span>
            </div>
            <DetailsVotesPageDaysEndRegStartVote
                pointEndTimeReg={currentEventData.registration_end_time}
                pointStartTimeVote={currentEventData.event_start_time}
                pointStartTimeReg={currentEventData.registration_start_time}
            />
            {
                questionsTemplateRow.map((item => {
                    return (
                        <CallVotingPageQuestionCardList
                            key={item.id}
                            questionName={item.title}
                            questionColumns={item.options.columns}
                            questionRows={item.options.rows}
                            question={item}
                            isReVoting={currentEventData.re_voting}
                            materialsQuestion={item.materials}
                            currentEventData={currentEventData}
                            addAnswer={addAnswer}
                            removeAnswer={removeAnswer}
                            isEventSended={isEventSended}
                            handleSendEventTrigger={handleSendEventTrigger}
                            validateSendVoteButton={validateSendVoteButton}
                            votedArray={votedArray}
                        />
                    )
                }))
            }
            {
                questionsTemplateGrid.map((question => {
                    return (
                        <CallVotingPageQuestionCardCheckBox
                            key={question.id}
                            questionTitle={question.title}
                            columns={question.options.columns}
                            rows={question.options.rows}
                            question={question}
                            isReVoting={currentEventData.re_voting}
                            results={results}
                            materialsQuestion={question.materials}
                            currentEventData={currentEventData}
                            addAnswer={addAnswer}
                            removeAnswer={removeAnswer}
                            isEventSended={isEventSended}
                            handleSendEventTrigger={handleSendEventTrigger}
                            validateSendVoteButton={validateSendVoteButton}
                            votedArray={votedArray}
                        />
                    )
                }))
            }
            <VoteButton
                sendVote={sendVote}
                buttonValidationArray={buttonValidationArray}
            />
        </div>
    )
}

export default CallVotingPage;
