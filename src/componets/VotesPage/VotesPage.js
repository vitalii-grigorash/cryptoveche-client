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

    const [btnActiveVotes, setBtnActiveVotes] = useState(true);
    const [btnArchiveVotes, setBtnArchiveVotes] = useState(false);
    const [activeEvents, setActiveEvents] = useState([]);
    const [archiveEvents, setArchiveEvents] = useState([]);

    const activeEventsPerRow = 3;
    const activeEventsToRender = activeEvents.slice(0, (currentRowActiveEvents + 1) * activeEventsPerRow);
    const isMoreActiveEvents = activeEventsToRender.length !== activeEvents.length;

    const archiveEventsPerRow = 3;
    const archiveEventsToRender = archiveEvents.slice(0, (currentRowArchiveEvents + 1) * archiveEventsPerRow);
    const isMoreArchiveEvents = archiveEventsToRender.length !== archiveEvents.length;

    useEffect(() => {
        setActiveEvents([]);
        setArchiveEvents([]);
        if (allEvents.length !== 0) {
            allEvents.forEach((event) => {
                if (event.status === 'ended') {
                    setArchiveEvents(archiveEvents => [...archiveEvents, event]);
                } else {
                    setActiveEvents(activeEvents => [...activeEvents, event]);
                }
            })
        }
    }, [allEvents])

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
                <VotesPageFilterSortButtons />
                <VotesPagePaginationTableSearch />
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
            <VotesPagePaginationTableSearch />
        </div>
    )
}

export default VotesPage;
