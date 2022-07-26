import React, { useEffect } from "react";
import './VotesPagePaginationTableSearch.css';
import votes_page_change_row_left from "../../img/VotesPageBlock_change_page_row_icon_left.svg";
import votes_page_change_row_right from "../../img/VotesPageBlock_change_page_row_icon_right.svg";
import votes_page_search_icon from "../../img/VotesPageBlock_icon_search.svg";

const VotesPagePaginationTableSearch = (props) => {

    const {
        eventsSearchActive,
        eventsSearchArchive,
        eventsSearchInput,
        btnActiveVotes,
        btnArchiveVotes
    } = props;

    useEffect(() => {
        if (btnActiveVotes) {
            eventsSearchInput(eventsSearchActive.value);
        } else if (btnArchiveVotes) {
            eventsSearchInput(eventsSearchArchive.value);
        }
    },
        [
            eventsSearchActive.value,
            eventsSearchArchive.value,
            btnActiveVotes,
            btnArchiveVotes,
            eventsSearchInput
        ]
    );

    return (
        <div className={'navigation-menu__pagination-search-block'}>
            <div className={'pagination-search-block__show-page'}><span>Показывать на странице: 25</span>
                <select>
                </select>
            </div>
            <div className={'pagination-search-block__change-page'}>
                <span>1-10 из 150</span>
                <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_left} />
                <img alt={'стрелка переключатель страниц'} src={votes_page_change_row_right} />
            </div>
            <div className={'pagination-search-block__search-table'}>
                <img alt={'иконка поиска'} src={votes_page_search_icon} />
                {btnActiveVotes ? (
                    <input
                        type="text"
                        name="searchInput"
                        placeholder='Поиск по таблице'
                        value={eventsSearchActive.value}
                        onChange={eventsSearchActive.onChange}
                    />
                ) : (
                    <input
                        type="text"
                        name="searchInput"
                        placeholder='Поиск по таблице'
                        value={eventsSearchArchive.value}
                        onChange={eventsSearchArchive.onChange}
                    />
                )}
            </div>
        </div>
    )
}

export default VotesPagePaginationTableSearch;
