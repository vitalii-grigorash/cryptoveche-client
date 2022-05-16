import React, {useState} from "react";
import './VotesPage.css';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';
import votes_page_mobile_filters_icon from '../../img/VotesPageBlock_mobile_filter_icon.svg';
import votes_page_mobile_sort_icon from '../../img/VotesPageBlock_mobile_sort_icon.svg';
import mobile_filters_sort_red_circle from '../../img/VotesPageBlock_red_cicrle.svg';
import VotesPageFiltersModal from "../VotesPageFiltersModal/VotesPageFiltersModal";
import VotesPageSortingModal from "../VotesPageSortingModal/VotesPageSortingModal";
import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
import {activeVotesData} from "../../activeVotesData";
import VotesPagePaginationTableSearch from "../VotesPagePaginationTableSearch/VotesPagePaginationTableSearch";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import qr_cod_icon from '../../img/TitleVotesDetailsQRcod.svg';




const VotesPage = () => {

    const [filtersModalActive, setFiltersModalActive] = useState(false);
    const [sortingModalActive, setSortingModalActive] = useState(false);


    return (
            <div className={'votes-page-block__wrapper'}>
                <TitleVotesDetailsCallVotingProfile
                    firstLetter={'Главная'}
                    secondLetter={'Голосования'}
                    titleName={'Голосования'}/>
                <img className={'votes-page-block__qr-cod'} alt={'qr-код'} src={qr_cod_icon}/>
                <div className={'votes-page-block__navigation-menu'}>
                    <div className={'navigation-menu__select-buttons'}>
                             <button type={'button'} className={'select-buttons__filters-button'} onClick={() => setFiltersModalActive(true)}>
                                <img alt={'иконка фильтры'} src={votes_page_filters_icon}/>Фильтры</button>
                             <button type={'button'} className={'select-buttons__sort-button'} onClick={() => setSortingModalActive(true)}>
                                <img alt={'иконка сортировка'} src={votes_page_sort_icon}/>Сортировка</button>
                             <button type={'button'} className={'select-buttons__mobile-filters-sort-button'} onClick={() => setFiltersModalActive(true)}>
                                <img alt={'иконка фильтры'} src={votes_page_mobile_filters_icon}/>Фильтры</button>
                             <button type={'button'} className={'select-buttons__mobile-filters-sort-button '} onClick={() => setSortingModalActive(true)}>
                                <img alt={'иконка сортировка'} src={votes_page_mobile_sort_icon}/>Сортировка</button>
                            <img alt={'красная точка'} className={'select-buttons__filters-red-circle'} src={mobile_filters_sort_red_circle}/>
                            <img alt={'красная точка'} className={'select-buttons__sort-red-circle'}  src={mobile_filters_sort_red_circle}/>
                    </div>
                  <VotesPagePaginationTableSearch/>
                </div>
                <div className={'votes-page-block__main-content'}>
                    <VotesAndDetailsPageSwitchButtons hiddenGeneralBtn={true} hiddenReadQuestion={true} hiddenResultBtn={true} hiddenBulletinBtn={true}/>
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