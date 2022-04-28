import React, {useState} from "react";
import './VotesPage.css';
import votes_page_row_icon from '../../img/VotesPageBlock_icon_row.svg';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';
import VotesPageFiltersModal from "../VotesPageFiltersModal/VotesPageFiltersModal";
import VotesPageSortingModal from "../VotesPageSortingModal/VotesPageSortingModal";
import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
import {activeVotesData} from "../../activeVotesData";
import VotesPagePaginationTableSearch from "../VotesPagePaginationTableSearch/VotesPagePaginationTableSearch";



const VotesPage = () => {

    const [filtersModalActive, setFiltersModalActive] = useState(false);
    const [sortingModalActive, setSortingModalActive] = useState(false);


    return (
            <div className={'votes-page-block__wrapper'}>
                <div className={'votes-page-block__page-info'}>
                    <span>Главная</span>
                    <img alt={'иконка стрелка'} src={votes_page_row_icon}/>
                    <span>Голосования</span>
                </div>
                    <h1 className={'votes-page-block__wrapper-title'}>Голосования</h1>
                <div className={'votes-page-block__navigation-menu'}>
                    <div className={'navigation-menu__select-buttons'}>
                            <button type={'button'} className={'select-buttons__filters-button'} onClick={() => setFiltersModalActive(true)}><img alt={'иконка фильтры'} src={votes_page_filters_icon}/>Фильтры</button>
                            <button type={'button'} className={'select-buttons__sort-button'} onClick={() => setSortingModalActive(true)}><img alt={'иконка сортировка'} src={votes_page_sort_icon}/>Сортировка</button>
                    </div>
                <VotesPagePaginationTableSearch/>
                </div>
                <div className={'votes-page-block__main-content'}>
                    <div className={'votes-page-block__main-content-switch-buttons'}>
                        <h2 className={'main-content-switch-buttons__active-votes'}>Активные голосования</h2>
                        <h2 className={'main-content-switch-buttons__archive-votes'}>Архивные голосования</h2>
                    </div>
                    {
                        activeVotesData.map((item) => {
                            return(
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
                                    confirmStatus={item.confirmStatus}/>
                        )
                    })
                    }
                    <div className={'votes-page-block__main-content-show-more-button'}>
                        <span>ПОКАЗАТЬ ЕЩЁ</span>
                    </div>
                </div>
                <VotesPagePaginationTableSearch/>
                <VotesPageFiltersModal active={filtersModalActive} setActive={setFiltersModalActive}/>
                <VotesPageSortingModal active={sortingModalActive} setActive={setSortingModalActive}/>
            </div>
    )
}

export default VotesPage;