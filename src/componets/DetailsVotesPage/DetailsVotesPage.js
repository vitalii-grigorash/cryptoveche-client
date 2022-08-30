import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './DetailsVotesPage.css';
import './DetailsVotesPageResultVotes.css';
import DetailsVotesPageDaysEndRegStartVote from '.././DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote';
import DetailsVotesPageGeneralInformation from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";
import DetailsVotesPageResultVotesCardQuestion from "../DetailsVotesPageResultVotesCardQuestion/DetailsVotesPageResultVotesCardQuestion";
import TitleVotesDetailsCallVotingProfile from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import DetailsVotesPageReadQuestions from "../DetailsVotesPageReadQuestions/DetailsVotesPageReadQuestions";
// import DetailsVotesPageResultVotesWaitingResults from "../DetailsVotesPageResultVotesWaitingResults/DetailsVotesPageResultVotesWaitingResults";
import * as Events from '../../Api/Events';

const DetailsVotesPage = (props) => {

    const {
        requestHelper,
        handleCurrentEvents,
        toggleEventRegistration,
        showEventResult,
        isResultTabOpen,
        formatDate,
        formatTime,
        utcOffset
    } = props;

    const navigate = useNavigate();

    const [btnGeneralInfo, setBtnGeneralInfo] = useState(false);
    const [btnReadQuestions, setBtnReadQuestions] = useState(false);
    const [btnResult, setBtnResult] = useState(false);
    const [btnMyBulletin, setBtnMyBulletin] = useState(false);
    const [currentEventData, setCurrentEventData] = useState({});
    const [questionsTemplateRow, setQuestionsTemplateRow] = useState([]);
    const [questionsTemplateGrid, setQuestionsTemplateGrid] = useState([]);
    const [isShowResults, setShowResults] = useState(false);
    const [isShowTimer, setShowTimer] = useState(true);
    const [results, setResults] = useState([]);

    function onGenerelInfoClick() {
        setBtnGeneralInfo(true);
        setBtnReadQuestions(false);
        setBtnResult(false);
        setBtnMyBulletin(false);
    }
    function onReadQuestionsClick() {
        setBtnReadQuestions(true);
        setBtnGeneralInfo(false);
        setBtnResult(false);
        setBtnMyBulletin(false);
    }

    function onResultsClick() {
        setBtnResult(true);
        setBtnGeneralInfo(false);
        setBtnReadQuestions(false);
        setBtnMyBulletin(false);
    }

    function onMyBulletinClick() {
        setBtnMyBulletin(true);
        setBtnGeneralInfo(false);
        setBtnReadQuestions(false);
        setBtnResult(false);
    }

    function templateRow(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions');
        setQuestionsTemplateRow(filteredQuestions);
    }

    function templateGrid(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'grid' || e.template === 'radio_grid');
        setQuestionsTemplateGrid(filteredQuestions);
    }

    useEffect(() => {
        if (localStorage.getItem('currentEvent')) {
            const currentEvent = localStorage.getItem('currentEvent');
            const event = JSON.parse(currentEvent);
            const body = {
                id: event.id
            }
            requestHelper(Events.getEvent, body)
                .then((data) => {
                    setCurrentEventData(data);
                    templateRow(data.questions);
                    templateGrid(data.questions);
                    if (data.results.questions) {
                        setResults(data.results.questions);
                    }
                    if (isResultTabOpen) {
                        if (isShowResults) {
                            setBtnResult(true);
                            setBtnGeneralInfo(false);
                            setBtnReadQuestions(false);
                            setBtnMyBulletin(false);
                        } else {
                            setBtnGeneralInfo(true);
                            setBtnReadQuestions(false);
                        }
                    } else {
                        if (btnGeneralInfo) {
                            setBtnGeneralInfo(true);
                            setBtnReadQuestions(false);
                        } else if (btnReadQuestions) {
                            setBtnReadQuestions(true);
                            setBtnGeneralInfo(false);
                        } else {
                            setBtnGeneralInfo(true);
                            setBtnReadQuestions(false);
                        }
                    }
                });
        } else {
            navigate('/');
        }
    }, // eslint-disable-next-line
        [
            navigate,
            requestHelper,
            isResultTabOpen,
            isShowResults
        ]
    )

    useEffect(() => {
        if (currentEventData.status === 'ended' || currentEventData.status === 'quorum_unpresant') {
            setShowTimer(false);
            if (currentEventData.type === 'secret') {
                setShowResults(false);
            } else if (currentEventData.type === 'open') {
                setShowResults(true);
            }
        }
    }, [currentEventData])

    return (
        <div className={'details-votes-page__wrapper'}>
            <TitleVotesDetailsCallVotingProfile
                firstLetter={'КлиентКриптовече'}
                secondLetter={'Детали голосования'}
                titleName={'Детали голосования'}
                mobileLetter={'Назад к списку голосований'}
            />
            {isShowTimer && (
                <DetailsVotesPageDaysEndRegStartVote />
            )}
            <div className={'details-votes-page__main-content'}>
                <div className={'details-votes-page-switch__buttons'}>
                    <h2 onClick={onGenerelInfoClick} className={btnGeneralInfo ? 'active-details-votes-page-switch-buttons__button' : 'details-votes-page-switch-buttons__button'}>Общая информация</h2>
                    <h2 onClick={onReadQuestionsClick} className={btnReadQuestions ? 'active-details-votes-page-switch-buttons__button' : 'details-votes-page-switch-buttons__button'}>
                        <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                        <span className={'_mobile-read-questions-bnt'}>Вопросы</span>
                    </h2>
                    {isShowResults && (
                        <>
                            <h2 onClick={onResultsClick} className={btnResult ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Результат</h2>
                            <h2 onClick={onMyBulletinClick} className={btnMyBulletin ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Мой бюллетень</h2>
                        </>
                    )}
                </div>
                {btnGeneralInfo && (
                    <DetailsVotesPageGeneralInformation
                        currentEventData={currentEventData}
                        handleCurrentEvents={handleCurrentEvents}
                        toggleEventRegistration={toggleEventRegistration}
                        showEventResult={showEventResult}
                        formatDate={formatDate}
                        formatTime={formatTime}
                        utcOffset={utcOffset}
                    />
                )}
                {btnReadQuestions && (
                    <DetailsVotesPageReadQuestions
                        currentEventData={currentEventData}
                        questionsTemplateRow={questionsTemplateRow}
                        questionsTemplateGrid={questionsTemplateGrid}
                        handleCurrentEvents={handleCurrentEvents}
                        toggleEventRegistration={toggleEventRegistration}
                        showEventResult={showEventResult}
                        requestHelper={requestHelper}
                        isMyBulletinTabActive={false}
                        results={results}
                    />
                )}
                {isShowResults && (
                    <>
                        {btnResult && (
                            <DetailsVotesPageResultVotesCardQuestion
                                currentEventData={currentEventData}
                                titleName={'1. Согласны ли вы с решением №576?'}
                                answerSelected={'Выберите ровно 1'}
                            />
                        )}
                        {btnMyBulletin && (
                            <DetailsVotesPageReadQuestions
                                currentEventData={currentEventData}
                                questionsTemplateRow={questionsTemplateRow}
                                questionsTemplateGrid={questionsTemplateGrid}
                                handleCurrentEvents={handleCurrentEvents}
                                toggleEventRegistration={toggleEventRegistration}
                                showEventResult={showEventResult}
                                requestHelper={requestHelper}
                                isMyBulletinTabActive={true}
                                results={results}
                            />
                        )}
                        {/*<DetailsVotesPageResultVotesWaitingResults/>*/}
                    </>
                )}
            </div>
        </div>
    )
}

export default DetailsVotesPage;
