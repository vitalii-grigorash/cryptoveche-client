import React, { useEffect, useState } from "react";
import './VotesPage.css';
// import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
// import { activeVotesData } from "../../activeVotesData";
import VotesPagePaginationTableSearch from "../VotesPagePaginationTableSearch/VotesPagePaginationTableSearch";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import qr_cod_icon from '../../img/TitleVotesDetailsQRcod.svg';
// import VotesPageArchiveVotes from "../VotesPageArchiveVotes/VotesPageArchiveVotes";
import VotesPageFilterSortButtons from "../VotesPageFilterSortButtons/VotesPageFilterSortButtons";
import MyVotesBlockForm from '../MyVotesBlock/MyVotesBlockForm';
import { Validation } from '../../utils/Validation';

const VotesPage = (props) => {

    const {
        allEvents,
        handleCurrentEvents,
        toggleEventRegistration,
        showEventResult
    } = props;

    const eventsSearchActive = Validation();
    const eventsSearchArchive = Validation();

    const [btnActiveVotes, setBtnActiveVotes] = useState(true);
    const [btnArchiveVotes, setBtnArchiveVotes] = useState(false);
    const [activeEvents, setActiveEvents] = useState([]);
    const [archiveEvents, setArchiveEvents] = useState([]);
    const [statusFilterArray, setStatusFilterArray] = useState([]);
    const [typeFilterArray, setTypeFilterArray] = useState([]);
    const [registerDateFrom, setRegisterDateFrom] = useState('');
    const [registerDateTo, setRegisterDateTo] = useState('');
    const [eventStartDateFrom, setEventStartDateFrom] = useState('');
    const [eventStartDateTo, setEventStartDateTo] = useState('');
    const [isResetAllCheckboxClick, setResetAllCheckboxClick] = useState(false);
    const [activeEventsSearchInput, setActiveEventsSearchInput] = useState('');
    const [archiveEventsSearchInput, setArchiveEventsSearchInput] = useState('');
    const [activeEventsForRender, setActiveEventsForRender] = useState([]);
    const [archiveEventsForRender, setArchiveEventsForRender] = useState([]);

    const [showResultsFrom, setShowResultsFrom] = useState(0);
    const [resultsShow, setResultsShow] = useState(5);
    const [result, setResult] = useState(5);
    const [pageCount, setPageCount] = useState(1);
    const [selectedResultsShow, setSelectedResultsShow] = useState(5);

    const [showResultsFromArchive, setShowResultsFromArchive] = useState(0);
    const [resultsShowArchive, setResultsShowArchive] = useState(5);
    const [resultArchive, setResultArchive] = useState(5);
    const [pageCountArchive, setPageCountArchive] = useState(1);
    const [selectedResultsShowArchive, setSelectedResultsShowArchive] = useState(5);

    useEffect(() => {
        splitEvents(allEvents);
    }, [allEvents])

    function handleShowResultsFrom(value) {
        if (btnActiveVotes) {
            setShowResultsFrom(value);
        } else {
            setShowResultsFromArchive(value);
        }
    }

    function handleResultsShow(value) {
        if (btnActiveVotes) {
            setResultsShow(value);
        } else {
            setResultsShowArchive(value);
        }
    }

    function showPrevResults() {
        if (btnActiveVotes) {
            if (resultsShow <= result) {
                return
            } else {
                setShowResultsFrom(showResultsFrom - result);
                handleShowResultsFrom(showResultsFrom - result);
                setResultsShow(resultsShow - result);
                handleResultsShow(resultsShow - result);
                setPageCount(pageCount - 1);
            }
        } else {
            if (resultsShowArchive <= resultArchive) {
                return
            } else {
                setShowResultsFromArchive(showResultsFromArchive - resultArchive);
                handleShowResultsFrom(showResultsFromArchive - resultArchive);
                setResultsShowArchive(resultsShowArchive - resultArchive);
                handleResultsShow(resultsShowArchive - resultArchive);
                setPageCountArchive(pageCountArchive - 1);
            }
        }
    }

    function showNextResults() {
        const sortList = btnActiveVotes ? activeEventsForRender : archiveEventsForRender
        if (btnActiveVotes) {
            if (resultsShow >= sortList.length) {
                return
            } else {
                setShowResultsFrom(0 + resultsShow);
                handleShowResultsFrom(0 + resultsShow);
                setResultsShow(result + resultsShow);
                handleResultsShow(result + resultsShow);
                setPageCount(pageCount + 1);
            }
        } else {
            if (resultsShowArchive >= sortList.length) {
                return
            } else {
                setShowResultsFromArchive(0 + resultsShowArchive);
                handleShowResultsFrom(0 + resultsShowArchive);
                setResultsShowArchive(resultArchive + resultsShowArchive);
                handleResultsShow(resultArchive + resultsShowArchive);
                setPageCountArchive(pageCountArchive + 1);
            }
        }
    }

    function onChoiceClick(value) {
        if (btnActiveVotes) {
            setResultsShow(value);
            handleResultsShow(value);
            setResult(value);
            setSelectedResultsShow(value);
            setShowResultsFrom(0);
            handleShowResultsFrom(0);
            setPageCount(1);
        } else {
            setResultsShowArchive(value);
            handleResultsShow(value);
            setResultArchive(value);
            setSelectedResultsShowArchive(value);
            setShowResultsFromArchive(0);
            handleShowResultsFrom(0);
            setPageCountArchive(1);
        }
    }

    function eventsSearchInput(value) {
        if (btnActiveVotes) {
            setActiveEventsSearchInput(value);
        } else if (btnArchiveVotes) {
            setArchiveEventsSearchInput(value);
        }
    }

    useEffect(() => {
        if (btnActiveVotes) {
            if (activeEventsSearchInput === '') {
                setActiveEventsForRender(activeEvents);
            } else {
                const dataForRender = [];
                activeEvents.forEach((event) => {
                    if (event.title.toLowerCase().includes(activeEventsSearchInput.toLowerCase())) {
                        dataForRender.push(event);
                    }
                })
                setActiveEventsForRender(dataForRender);
            }
        } else if (btnArchiveVotes) {
            if (archiveEventsSearchInput === '') {
                setArchiveEventsForRender(archiveEvents);
            } else {
                const dataForRender = [];
                archiveEvents.forEach((event) => {
                    if (event.title.toLowerCase().includes(archiveEventsSearchInput.toLowerCase())) {
                        dataForRender.push(event);
                    }
                })
                setArchiveEventsForRender(dataForRender);
            }
        }
    },
        [
            activeEventsSearchInput,
            activeEvents,
            archiveEvents,
            archiveEventsSearchInput,
            btnActiveVotes,
            btnArchiveVotes
        ]
    );

    function splitEvents(events) {
        setActiveEvents([]);
        setArchiveEvents([]);
        if (events.length !== 0) {
            events.forEach((event) => {
                if (event.status === 'ended' || event.status === 'quorum_unpresant') {
                    setArchiveEvents(archiveEvents => [...archiveEvents, event]);
                } else {
                    setActiveEvents(activeEvents => [...activeEvents, event]);
                }
            })
        }
    }

    function checkboxFilterArrayAdd(selectedCheckboxValue) {
        if (selectedCheckboxValue === 'open' || selectedCheckboxValue === 'secret') {
            setTypeFilterArray([...typeFilterArray, selectedCheckboxValue]);
        } else {
            setStatusFilterArray([...statusFilterArray, selectedCheckboxValue]);
        }
    }

    function checkboxFilterArrayRemove(selectedCheckboxValue) {
        if (selectedCheckboxValue === 'open' || selectedCheckboxValue === 'secret') {
            const filteredItems = typeFilterArray.filter(typeFilter => typeFilter !== selectedCheckboxValue);
            setTypeFilterArray(filteredItems);
        } else {
            const filteredItems = statusFilterArray.filter(statusFilter => statusFilter !== selectedCheckboxValue);
            setStatusFilterArray(filteredItems);
        }
    }

    function applyDateEventStartFilter(events) {
        const dateFrom = eventStartDateFrom !== '' ? new Date(eventStartDateFrom) : null;
        const dateTo = eventStartDateTo !== '' ? new Date(eventStartDateTo) : null;
        const filteredEvents = events.filter((event) => {
            const eventDate = new Date(event.event_start_time);
            return !((dateFrom && dateFrom > eventDate) || (dateTo && dateTo < eventDate));
        })
        splitEvents(filteredEvents);
    }

    function applyDateRegisterFilter(events) {
        const dateFrom = registerDateFrom !== '' ? new Date(registerDateFrom) : null;
        const dateTo = registerDateTo !== '' ? new Date(registerDateTo) : null;
        const filteredEvents = events.filter((event) => {
            const eventDate = new Date(event.registration_start_time);
            return !((dateFrom && dateFrom > eventDate) || (dateTo && dateTo < eventDate));
        })
        applyDateEventStartFilter(filteredEvents);
    }

    function applyTypeFilter(events) {
        if (typeFilterArray.length === 0) {
            applyDateRegisterFilter(events);
        } else {
            const filteredEvents = events.filter(event => typeFilterArray.find(typeFilter => typeFilter === event.type))
            applyDateRegisterFilter(filteredEvents);
        }
    }

    function onApplyFilterClick() {
        if (statusFilterArray.length === 0) {
            applyTypeFilter(allEvents);
        } else {
            const filteredEvents = allEvents.filter(event => statusFilterArray.find(statusFilter => statusFilter === event.status))
            applyTypeFilter(filteredEvents);
        }
    }

    function changeAllCheckbox() {
        setResetAllCheckboxClick(false);
    }

    function onResetFilterClick() {
        setStatusFilterArray([]);
        setTypeFilterArray([]);
        setRegisterDateFrom('');
        setRegisterDateTo('');
        setEventStartDateFrom('');
        setEventStartDateTo('');
        setResetAllCheckboxClick(true);
        splitEvents(allEvents);
    }

    function registerDateFromChange(evt) {
        setRegisterDateFrom(evt.target.value);
    }

    function registerDateToChange(evt) {
        setRegisterDateTo(evt.target.value);
    }

    function eventStartDateFromChange(evt) {
        setEventStartDateFrom(evt.target.value);
    }

    function eventStartDateToChange(evt) {
        setEventStartDateTo(evt.target.value);
    }

    function toggleActiveHide() {
        setBtnActiveVotes(true)
        setBtnArchiveVotes(false)
    }
    function toggleArchiveShow() {
        setBtnActiveVotes(false)
        setBtnArchiveVotes(true)
    }

    return (
        <div className='votes-page-block__wrapper'>
            <TitleVotesDetailsCallVotingProfile
                firstLetter='Главная'
                secondLetter='Голосования'
                titleName='Голосования'
                mobileLetter='Назад на главную'
            />
            <img className='votes-page-block__qr-cod' alt='qr-код' src={qr_cod_icon} />
            <div className='votes-page-block__navigation-menu'>
                <VotesPageFilterSortButtons
                    checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                    checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    onApplyFilterClick={onApplyFilterClick}
                    onResetFilterClick={onResetFilterClick}
                    registerDateFromChange={registerDateFromChange}
                    registerDateToChange={registerDateToChange}
                    eventStartDateFromChange={eventStartDateFromChange}
                    eventStartDateToChange={eventStartDateToChange}
                    registerDateFrom={registerDateFrom}
                    registerDateTo={registerDateTo}
                    eventStartDateFrom={eventStartDateFrom}
                    eventStartDateTo={eventStartDateTo}
                    changeAllCheckbox={changeAllCheckbox}
                    isResetAllCheckboxClick={isResetAllCheckboxClick}
                />
                <VotesPagePaginationTableSearch
                    eventsSearchActive={eventsSearchActive}
                    eventsSearchArchive={eventsSearchArchive}
                    eventsSearchInput={eventsSearchInput}
                    btnActiveVotes={btnActiveVotes}
                    btnArchiveVotes={btnArchiveVotes}
                    sortList={btnActiveVotes ? activeEventsForRender : archiveEventsForRender}
                    onChoiceClick={onChoiceClick}
                    selectedResultsShow={btnActiveVotes ? selectedResultsShow : selectedResultsShowArchive}
                    pageCount={btnActiveVotes ? pageCount : pageCountArchive}
                    showPrevResults={showPrevResults}
                    showNextResults={showNextResults}
                />
            </div>
            <div className='votes-page-block__main-content'>
                <div className='votes-page-switch-buttons'>
                    <div>
                        <h2 onClick={() => { toggleActiveHide() }} className={btnActiveVotes ? 'active-votes-page-switch-buttons__button' : 'votes-page-switch-buttons__button'}>Активные <span className='_active-vote-bnt _mobile-active-vote-bnt'>голосования</span></h2>
                    </div>
                    <div>
                        <h2 onClick={() => { toggleArchiveShow() }} className={btnArchiveVotes ? 'active-votes-page-switch-buttons__button' : 'votes-page-switch-buttons__button'}>Архивные <span className='_active-vote-bnt _mobile-active-vote-bnt'>голосования</span></h2>
                    </div>
                </div>
                {btnActiveVotes && (
                    <>
                        {activeEventsForRender.slice(showResultsFrom, resultsShow).map((event) => (
                            <MyVotesBlockForm
                                key={event.id}
                                votesData={event}
                                handleCurrentEvents={handleCurrentEvents}
                                toggleEventRegistration={toggleEventRegistration}
                                showEventResult={showEventResult}
                            />
                        )
                        )}
                    </>
                )}
                {btnArchiveVotes && (
                    <>
                        {archiveEventsForRender.slice(showResultsFromArchive, resultsShowArchive).map((event) => (
                            <MyVotesBlockForm
                                key={event.id}
                                votesData={event}
                                handleCurrentEvents={handleCurrentEvents}
                                toggleEventRegistration={toggleEventRegistration}
                                showEventResult={showEventResult}
                            />
                        )
                        )}
                    </>
                )}
                {/* {btnActiveVotes && (
                    <>
                        {activeVotesData.map((item) => (
                            <VotesPageActiveVotes
                                key={item.id}
                                id={item.id}
                                titleVoteData={item.titleVoteData}
                                regStatus={item.regStatus}
                                voteStatus={item.voteStatus}
                                dateTimeDate={item.DateReg}
                                dateTimeWatch={item.TimeReg}
                                dateTimeDate1={item.DateVote}
                                dateTimeWatch1={item.TimeVote}
                                confirmStatus={item.confirmStatus}
                                nameRegButton={item.nameRegButton} />
                        )
                        )}
                    </>
                )} */}
                {/* {btnArchiveVotes && (
                    <>
                        <VotesPageArchiveVotes titleVoteData={'Выбор делегатов конференции в Ученый Совет СПбГУ и еще парочка слов чтобы совсем уже было длинно'}
                            regStatus={'Регистрация'}
                            voteStatus={'Тайное'}
                            dateTimeWatch={'12:00'}
                            dateTimeDate={'03.10.2022'}
                            dateTimeDate1={'03.10.2022'}
                            dateTimeWatch1={'15:00'} confirmStatus={'Регистрация завершина'}
                        />
                    </>
                )} */}
            </div>
            <VotesPagePaginationTableSearch
                eventsSearchActive={eventsSearchActive}
                eventsSearchArchive={eventsSearchArchive}
                eventsSearchInput={eventsSearchInput}
                btnActiveVotes={btnActiveVotes}
                btnArchiveVotes={btnArchiveVotes}
                sortList={btnActiveVotes ? activeEventsForRender : archiveEventsForRender}
                onChoiceClick={onChoiceClick}
                selectedResultsShow={btnActiveVotes ? selectedResultsShow : selectedResultsShowArchive}
                pageCount={btnActiveVotes ? pageCount : pageCountArchive}
                showPrevResults={showPrevResults}
                showNextResults={showNextResults}
            />
        </div>
    )
}

export default VotesPage;
