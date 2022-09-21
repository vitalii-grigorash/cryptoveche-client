import React, { useEffect, useState } from "react";
import './CallVotingPage.css';
import mobile_icon_details_vote from '../../img/CallVotingMobileIcon.svg';
import DetailsVotesPageDaysEndRegStartVote
    from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import CallVotingPageQuestionCardList from "../CallVotingPageQuestionCardList/CallVotingPageQuestionCardList";
import CallVotingPageQuestionCardCheckBox
    from "../CallVotingPageQuestionCardCheckBox/CallVotingPageQuestionCardCheckBox";
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

    function addAnswer(data) {
        const dataToAdd = {
            for_user_id: data.for_user_id,
            question_id: data.question_id,
            res: [
                data.resData
            ]
        }
        const foundObject = arrayToSend.find(question => question.question_id === data.question_id);
        if (foundObject !== undefined) {
            foundObject.res.push(data.resData);
            const filteredArray = arrayToSend.filter(question => question.question_id !== data.question_id);
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
        } else {
            setArrayToSend([...arrayToSend, dataToAdd]);
        }
    }

    function removeAnswer(questionId, rowId) {
        const foundObject = arrayToSend.find(question => question.question_id === questionId);
        const newResArray = foundObject.res.filter(response => response.id !== rowId);
        foundObject.res = newResArray;
        if (foundObject.res.length === 0) {
            const filteredArray = arrayToSend.filter(question => question.question_id !== questionId);
            setArrayToSend(filteredArray);
        } else {
            const filteredArray = arrayToSend.filter(question => question.question_id !== questionId);
            filteredArray.push(foundObject);
            setArrayToSend(filteredArray);
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

        console.log(body);

        requestHelper(Events.vote, body)
            .then((data) => {
                console.log(data);
                if (data.status === 'ok') {
                    setArrayToSend([]);
                    setButtonValidationArray([]);
                    getEvent();
                    handleSendEventTrigger();
                }
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
                            eventId={currentEventData.id}
                            requestHelper={requestHelper}
                            isReVoting={currentEventData.re_voting}
                            results={results}
                            materialsQuestion={question.materials}
                            getEvent={getEvent}
                            currentEventData={currentEventData}
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
