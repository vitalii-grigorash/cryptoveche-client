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
        currentRowActiveEvents,
        handleShowMoreActiveEvents,
        hideActiveEvents,
        currentRowArchiveEvents,
        handleShowMoreArchiveEvents,
        hideArchiveEvents
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
    const [isRegisterDateAscending, setRegisterDateAscending] = useState(true);
    const [isEventDateAscending, setEventDateAscending] = useState(true);
    const [isResetAllCheckboxClick, setResetAllCheckboxClick] = useState(false);
    const [activeEventsSearchInput, setActiveEventsSearchInput] = useState('');
    const [archiveEventsSearchInput, setArchiveEventsSearchInput] = useState('');
    const [activeEventsForRender, setActiveEventsForRender] = useState([]);
    const [archiveEventsForRender, setArchiveEventsForRender] = useState([]);

    const activeEventsPerRow = 3;
    const activeEventsToRender = activeEventsForRender.slice(0, (currentRowActiveEvents + 1) * activeEventsPerRow);
    const isMoreActiveEvents = activeEventsToRender.length !== activeEventsForRender.length;

    const archiveEventsPerRow = 3;
    const archiveEventsToRender = archiveEventsForRender.slice(0, (currentRowArchiveEvents + 1) * archiveEventsPerRow);
    const isMoreArchiveEvents = archiveEventsToRender.length !== archiveEventsForRender.length;

    useEffect(() => {
        splitEvents(allEvents);
    }, [allEvents])

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
                if (event.status === 'ended') {
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

    function toggleRegisterDateAscending() {
        if (isRegisterDateAscending) {
            setRegisterDateAscending(false);
        } else {
            setRegisterDateAscending(true);
        }
    }

    function toggleEventDateAscending() {
        if (isEventDateAscending) {
            setEventDateAscending(false);
        } else {
            setEventDateAscending(true);
        }
    }

    function applyDateEventStartFilter(events) {
        const dateFrom = eventStartDateFrom !== '' ? new Date(eventStartDateFrom) : null;
        const dateTo = eventStartDateTo !== '' ? new Date(eventStartDateTo) : null;
        const filteredEvents = events.filter((event) => {
            const eventDate = new Date(event.event_start_time);
            return !((dateFrom && dateFrom > eventDate) || (dateTo && dateTo < eventDate));
        })
        if (isEventDateAscending) {
            const sortedActivities = filteredEvents.sort((a, b) => new Date(a.event_start_time) - new Date(b.event_start_time))
            splitEvents(sortedActivities);
        } else {
            const sortedActivities = filteredEvents.sort((a, b) => new Date(b.event_start_time) - new Date(a.event_start_time))
            splitEvents(sortedActivities);
        }
    }

    function applyDateRegisterFilter(events) {
        const dateFrom = registerDateFrom !== '' ? new Date(registerDateFrom) : null;
        const dateTo = registerDateTo !== '' ? new Date(registerDateTo) : null;
        const filteredEvents = events.filter((event) => {
            const eventDate = new Date(event.registration_start_time);
            return !((dateFrom && dateFrom > eventDate) || (dateTo && dateTo < eventDate));
        })
        if (isRegisterDateAscending) {
            const sortedActivities = filteredEvents.sort((a, b) => new Date(a.registration_start_time) - new Date(b.registration_start_time))
            applyDateEventStartFilter(sortedActivities);
        } else {
            const sortedActivities = filteredEvents.sort((a, b) => new Date(b.registration_start_time) - new Date(a.registration_start_time))
            applyDateEventStartFilter(sortedActivities);
        }
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
        setRegisterDateAscending(true);
        setEventDateAscending(true);
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
                    toggleRegisterDateAscending={toggleRegisterDateAscending}
                    toggleEventDateAscending={toggleEventDateAscending}
                    isRegisterDateAscending={isRegisterDateAscending}
                    isEventDateAscending={isEventDateAscending}
                    changeAllCheckbox={changeAllCheckbox}
                    isResetAllCheckboxClick={isResetAllCheckboxClick}
                />
                <VotesPagePaginationTableSearch
                    eventsSearchActive={eventsSearchActive}
                    eventsSearchArchive={eventsSearchArchive}
                    eventsSearchInput={eventsSearchInput}
                    btnActiveVotes={btnActiveVotes}
                    btnArchiveVotes={btnArchiveVotes}
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
                        {activeEventsToRender.map((event) => (
                            <MyVotesBlockForm
                                key={event.id}
                                votesData={event}
                            />
                        )
                        )}
                        {isMoreActiveEvents ? (
                            <div className='votes-page-block__main-content-show-more-button' onClick={handleShowMoreActiveEvents}>
                                <span>ПОКАЗАТЬ ЕЩЁ</span>
                            </div>
                        ) : (
                            <>
                                {activeEvents.length > 3 && (
                                    <div className='votes-page-block__main-content-show-more-button' onClick={hideActiveEvents}>
                                        <span>СКРЫТЬ</span>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                {btnArchiveVotes && (
                    <>
                        {archiveEventsToRender.map((event) => (
                            <MyVotesBlockForm
                                key={event.id}
                                votesData={event}
                            />
                        )
                        )}
                        {isMoreArchiveEvents ? (
                            <div className='votes-page-block__main-content-show-more-button' onClick={handleShowMoreArchiveEvents}>
                                <span>ПОКАЗАТЬ ЕЩЁ</span>
                            </div>
                        ) : (
                            <>
                                {archiveEvents.length > 3 && (
                                    <div className='votes-page-block__main-content-show-more-button' onClick={hideArchiveEvents}>
                                        <span>СКРЫТЬ</span>
                                    </div>
                                )}
                            </>
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
            />
        </div>
    )
}

export default VotesPage;
