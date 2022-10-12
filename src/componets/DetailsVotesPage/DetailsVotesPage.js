import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import './DetailsVotesPage.css';
import './DetailsVotesPageResultVotes.css';
import DetailsVotesPageDaysEndRegStartVote from '.././DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote';
import DetailsVotesPageGeneralInformation from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";
import DetailsVotesPageResultVotesCardQuestion from "../DetailsVotesPageResultVotesCardQuestion/DetailsVotesPageResultVotesCardQuestion";
import TitleVotesDetailsCallVotingProfile from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import DetailsVotesPageReadQuestions from "../DetailsVotesPageReadQuestions/DetailsVotesPageReadQuestions";
import row_next from '../../img/MyVotes_icon_arrow.svg';
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
        utcOffset,
        handleResultTabOpen,
        isReloadDetailsPage,
        handleReloadDetailsPage,
        handleReloadPage,
        isReloadPage,
        activatePreloader,
        disactivatePreloader
    } = props;

    const navigate = useNavigate();
    const [btnGeneralInfo, setBtnGeneralInfo] = useState(true);
    const [btnReadQuestions, setBtnReadQuestions] = useState(false);
    const [btnResult, setBtnResult] = useState(false);
    const [btnMyBulletin, setBtnMyBulletin] = useState(false);
    const [currentEventData, setCurrentEventData] = useState({});
    const [questionsTemplateRow, setQuestionsTemplateRow] = useState([]);
    const [questionsTemplateGrid, setQuestionsTemplateGrid] = useState([]);
    const [isShowResults, setShowResults] = useState(false);
    const [isShowTimer, setShowTimer] = useState(true);
    const [results, setResults] = useState([]);
    const [isVoted, setVoted] = useState(false);
    const [isNotFullyVoted, setNotFullyVoted] = useState(false);
    const [ballots, setBallots] = useState([]);
    const switchButtonsRef = useRef(null);
    const [activeRowNext, setActiveRowNext] = useState(true);
    const [activeRowPrev, setActiveRowPrev] = useState(false)

    function getCurrentEvent() {
        if (localStorage.getItem('currentEvent')) {
            activatePreloader();
            const currentEvent = localStorage.getItem('currentEvent');
            const event = JSON.parse(currentEvent);
            const body = {
                id: event.id
            }
            requestHelper(Events.getEvent, body)
                .then((data) => {
                    if (!data.isDeleted) {
                        setCurrentEventData(data);
                        templateRow(data.questions);
                        templateGrid(data.questions);
                        setBallots(data.ballots);
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
                .finally(() => {
                    disactivatePreloader();
                })
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        if (currentEventData.questions !== undefined) {
            if (currentEventData.ballots !== undefined) {
                const filteredAnswer = currentEventData.questions.filter(a => currentEventData.ballots.find(p => p.bulletinId === a.bulletinId))
                if (filteredAnswer.length === 0) {
                    setVoted(false);
                    setNotFullyVoted(false);
                } else {
                    if (filteredAnswer.length === currentEventData.questions.length) {
                        setVoted(true);
                        setNotFullyVoted(false);
                    } else {
                        setNotFullyVoted(true);
                        setVoted(false);
                    }
                }
            }
        }
    }, [currentEventData.ballots, currentEventData.questions]);

    function onGenerelInfoClick() {
        setBtnGeneralInfo(true);
        setBtnReadQuestions(false);
        setBtnResult(false);
        setBtnMyBulletin(false);
        handleResultTabOpen();
    }

    function onReadQuestionsClick() {
        setBtnReadQuestions(true);
        setBtnGeneralInfo(false);
        setBtnResult(false);
        setBtnMyBulletin(false);
        handleResultTabOpen();
    }

    function onResultsClick() {
        setBtnResult(true);
        setBtnGeneralInfo(false);
        setBtnReadQuestions(false);
        setBtnMyBulletin(false);
        handleResultTabOpen();
    }

    function onMyBulletinClick() {
        setBtnMyBulletin(true);
        setBtnGeneralInfo(false);
        setBtnReadQuestions(false);
        setBtnResult(false);
        handleResultTabOpen();
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
        if (currentEventData.id !== undefined) {
            if (isResultTabOpen) {
                if (isShowResults) {
                    setBtnResult(true);
                    setBtnGeneralInfo(false);
                    setBtnReadQuestions(false);
                    setBtnMyBulletin(false);
                    handleResultTabOpen();
                } else {
                    setBtnGeneralInfo(true);
                    setBtnReadQuestions(false);
                    setBtnResult(false);
                    setBtnMyBulletin(false);
                }
            }
        }
    },  // eslint-disable-next-line
        [
            isResultTabOpen,
            isShowResults,
            currentEventData.id
        ]
    );

    useEffect(() => {
        if (isReloadPage) {
            getCurrentEvent();
            handleReloadPage();
        }
        // eslint-disable-next-line
    }, [isReloadPage]);

    useEffect(() => {
        getCurrentEvent();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (isReloadDetailsPage) {
            getCurrentEvent();
            handleReloadDetailsPage();
            setBtnGeneralInfo(true);
            setBtnResult(false);
            setBtnReadQuestions(false);
            setBtnMyBulletin(false);
            handleResultTabOpen();
        }
        // eslint-disable-next-line
    }, [isReloadDetailsPage]);

    useEffect(() => {
        if (currentEventData.status === 'ended' || currentEventData.status === 'quorum_unpresant') {
            setShowTimer(false);
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    }, [currentEventData]);

    function toggleBtnNext() {
        switchButtonsRef.current.style.scrollBehavior = 'smooth'
        window.location.replace('#btnMyBallots')
        window.scrollBy(0,-500);
        setBtnMyBulletin(true)
        setBtnResult(false)
        setBtnGeneralInfo(false)
        setBtnReadQuestions(false)
        setActiveRowPrev(true)
        setActiveRowNext(false)
    }

    function toggleBtnPrev() {
        switchButtonsRef.current.style.scrollBehavior = 'smooth'
        window.location.replace('#btnGeneralInfo')
        window.scrollBy(0,-500);
        setBtnMyBulletin(false)
        setBtnResult(false)
        setBtnGeneralInfo(true)
        setBtnReadQuestions(false)
        setActiveRowNext(true)
        setActiveRowPrev(false)
    }

    return (
        <div className={'details-votes-page__wrapper'}>
            <TitleVotesDetailsCallVotingProfile
                firstLetter={'КлиентКриптовече'}
                secondLetter={'Детали голосования'}
                titleName={'Детали голосования'}
                mobileLetter={'Назад к списку голосований'}
            />
            {isShowTimer && (
                <DetailsVotesPageDaysEndRegStartVote
                    formatDate={formatDate}
                    pointStartTimeReg={currentEventData.registration_start_time}
                    pointEndTimeReg={currentEventData.registration_end_time}
                    pointStartTimeVote={currentEventData.event_start_time}
                    pointEndTimeVote={currentEventData.event_end_time}
                />
            )}
            <div className={'details-votes-page__main-content'}>
                <div ref={switchButtonsRef} className={'details-votes-page-switch__buttons'}>
                    <h2 id={'btnGeneralInfo'} onClick={onGenerelInfoClick} className={btnGeneralInfo ? 'active-details-votes-page-switch-buttons__button' : 'details-votes-page-switch-buttons__button'}>Общая информация</h2>
                    <h2 onClick={onReadQuestionsClick} className={btnReadQuestions ? 'active-details-votes-page-switch-buttons__button' : 'details-votes-page-switch-buttons__button'}>
                        <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                        <span className={'_mobile-read-questions-bnt'}>Вопросы</span>
                    </h2>
                    {isShowResults && (
                        <>
                            <h2 onClick={onResultsClick} className={btnResult ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Результат</h2>
                            <h2 id={'btnMyBallots'} onClick={onMyBulletinClick} className={btnMyBulletin ? 'active-results-page-switch-buttons__button' : 'results-page-switch-buttons__button'}>Мой бюллетень</h2>
                        </>
                    )}
                </div>
                {isShowResults && (
                    <div className={'detail-votes-page__row-prev-next-btn'}>
                        <img className={activeRowPrev ? 'row-prev-next-btn__row-prev active' : 'row-prev-next-btn__row-prev'} alt={'стрелка к кнопке общ.инфа'} src={row_next} onClick={() => toggleBtnPrev()}/>
                        <img className={activeRowNext ? 'row-prev-next-btn__row-next active' : 'row-prev-next-btn__row-next'} alt={'стрелка к кнопке бюллитень'} src={row_next} onClick={() => toggleBtnNext()}/>
                    </div>
                )}
                {btnGeneralInfo && (
                    <>
                        {currentEventData.id !== undefined && (
                            <>
                                <DetailsVotesPageGeneralInformation
                                    currentEventData={currentEventData}
                                    handleCurrentEvents={handleCurrentEvents}
                                    toggleEventRegistration={toggleEventRegistration}
                                    showEventResult={showEventResult}
                                    formatDate={formatDate}
                                    formatTime={formatTime}
                                    utcOffset={utcOffset}
                                    isVoted={isVoted}
                                    isNotFullyVoted={isNotFullyVoted}
                                />
                            </>
                        )}
                    </>
                )}
                {currentEventData.id !== undefined && (
                    <>
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
                                isVoted={isVoted}
                                ballots={ballots}
                            />
                        )}
                        {isShowResults && (
                            <>
                                {btnResult && (
                                    <DetailsVotesPageResultVotesCardQuestion
                                        currentEventData={currentEventData}
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
                                        isVoted={isVoted}
                                        ballots={ballots}
                                    />
                                )}
                                {/*<DetailsVotesPageResultVotesWaitingResults/>*/}
                            </>
                        )}
                    </>
                )}

            </div>
        </div>
    )
}
export default DetailsVotesPage;
