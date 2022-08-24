import React, { useState } from "react";
import './VotesPageFilterSortButtons.css';
import votes_page_filters_icon from "../../img/VotesPageBlock_filter_icon.svg";
import votes_page_sort_icon from "../../img/VotesPageBlock_sort_icon.svg";
import votes_page_mobile_filters_icon from "../../img/VotesPageBlock_mobile_filter_icon.svg";
import votes_page_mobile_sort_icon from "../../img/VotesPageBlock_mobile_sort_icon.svg";
import mobile_filters_sort_red_circle from "../../img/VotesPageBlock_red_cicrle.svg";
import VotesPageFiltersModal from "./VotesPageFiltersModal/VotesPageFiltersModal";
import VotesPageSortingModal from "./VotesPageSortingModal/VotesPageSortingModal";

const VotesPageFilterSortButtons = (props) => {

    const {
        checkboxFilterArrayAdd,
        checkboxFilterArrayRemove,
        onApplyFilterClick,
        onResetFilterClick,
        registerDateFromChange,
        registerDateToChange,
        eventStartDateFromChange,
        eventStartDateToChange,
        registerDateFrom,
        registerDateTo,
        eventStartDateFrom,
        eventStartDateTo,
        changeAllCheckbox,
        isResetAllCheckboxClick,
        sortType,
        onClickSortType
    } = props;

    const [filtersModalActive, setFiltersModalActive] = useState(false);
    const [sortingModalActive, setSortingModalActive] = useState(false);


    function showFiltersModal() {
        if (filtersModalActive === false) {
            setFiltersModalActive(true)
            setSortingModalActive(false)
        } else {
            setFiltersModalActive(false)
        }
    }

    function showSortingModal() {
        if (sortingModalActive === false) {
            setSortingModalActive(true)
            setFiltersModalActive(false)
        } else {
            setSortingModalActive(false)
        }
    }

    return (
        <div>
            <div className={'navigation-menu__select-buttons'}>
                <button type={'button'} className={'select-buttons__filters-button'} onClick={() => { showFiltersModal() }}>
                    <img alt={'иконка фильтры'} src={votes_page_filters_icon} />Фильтры</button>
                <button type={'button'} className={'select-buttons__sort-button'} onClick={() => { showSortingModal() }}>
                    <img alt={'иконка сортировка'} src={votes_page_sort_icon} />Сортировка</button>
                <button type={'button'} className={'select-buttons__mobile-filters-sort-button'} onClick={() => { showFiltersModal() }}>
                    <img alt={'иконка фильтры'} src={votes_page_mobile_filters_icon} />Фильтры</button>
                <button type={'button'} className={'select-buttons__mobile-filters-sort-button '} onClick={() => { showSortingModal() }}>
                    <img alt={'иконка сортировка'} src={votes_page_mobile_sort_icon} />Сортировка</button>
                <img alt={'красная точка'} className={'select-buttons__filters-red-circle'} src={mobile_filters_sort_red_circle} />
                <img alt={'красная точка'} className={'select-buttons__sort-red-circle'} src={mobile_filters_sort_red_circle} />
            </div>
            <VotesPageFiltersModal
                active={filtersModalActive}
                setActive={setFiltersModalActive}
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
            <VotesPageSortingModal
                active={sortingModalActive}
                setActive={setSortingModalActive}
                sortType={sortType}
                onClickSortType={onClickSortType}
            />
        </div>
    )

}

export default VotesPageFilterSortButtons;
