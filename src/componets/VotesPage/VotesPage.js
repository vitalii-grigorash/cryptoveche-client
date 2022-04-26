import React, {useState} from "react";
import './VotesPage.css';
import votes_page_row_icon from '../../img/VotesPageBlock_icon_row.svg';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';
import votes_page_search_icon from '../../img/VotesPageBlock_icon_search.svg';
import votes_page_change_row_left from '../../img/VotesPageBlock_change_page_row_icon_left.svg';
import votes_page_change_row_right from '../../img/VotesPageBlock_change_page_row_icon_right.svg';
import VotesPageFiltersModal from "../VotesPageFiltersModal/VotesPageFiltersModal";
import VotesPageSortingModal from "../VotesPageSortingModal/VotesPageSortingModal";
import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
import {activeVotesData} from "../../activeVotesData";


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
                    <div className={'navigation-menu__block-buttons'}>
                            <button type={'button'} className={'block-buttons__filters-button'} onClick={() => setFiltersModalActive(true)}><img alt={'иконка фильтры'} src={votes_page_filters_icon}/>Фильтры</button>
                            <button type={'button'} className={'block-buttons__sort-button'} onClick={() => setSortingModalActive(true)}><img alt={'иконка сортировка'} src={votes_page_sort_icon}/>Сортировка</button>
                    </div>
                    <div className={'navigation-menu__pagination-search-block'}>
                        <div className={'pagination-search-block__show-page'}><span>Показывать на странице: 25</span>
                            <select>
                            </select>
                        </div>
                         <div className={'pagination-search-block__change-page'}>
                             <span>1-10 из 150</span>
                             <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_left}/>
                             <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_right}/>
                         </div>
                        <div className={'pagination-search-block__search-table'}>
                            <img alt={'иконка поиска'} src={votes_page_search_icon}/><span>Поиск по таблице</span>
                        </div>
                    </div>
                </div>
                <div className={'votes-page-block__main-content'}>
                    <div className={'votes-page-block__main-content-title'}>
                        <div className={'main-content-title__active-votes'}><h2 >Активные голосования</h2></div>
                        <h2 className={'main-content-title__archive-votes'}>Архивные голосования</h2>
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
                                    startDateReg={item.startDateReg}
                                    startTimeReg={item.startTimeReg}
                                    startDateVote={item.startDateVote}
                                    startTimeVote={item.startTimeVote}
                                    confirmStatus={item.confirmStatus}/>
                        )

                    })
                    }
                    <div className={'votes-page-block__main-content-show-more-button'}>
                        <span>ПОКАЗАТЬ ЕЩЁ</span>
                    </div>
                </div>
                {/*<div className={'navigation-menu__pagination-search-block'}>*/}
                {/*    <div className={'pagination-search-block__show-page'}><span>Показывать на странице: 25</span>*/}
                {/*        <select>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className={'pagination-search-block__change-page'}>*/}
                {/*        <span>1-10 из 150</span>*/}
                {/*        <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_left}/>*/}
                {/*        <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_right}/>*/}
                {/*    </div>*/}
                {/*    <div className={'pagination-search-block__search-table'}>*/}
                {/*        <img alt={'иконка поиска'} src={votes_page_search_icon}/><span>Поиск по таблице</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <VotesPageFiltersModal active={filtersModalActive} setActive={setFiltersModalActive}/>
                <VotesPageSortingModal active={sortingModalActive} setActive={setSortingModalActive}/>
            </div>
    )
}

export default VotesPage;