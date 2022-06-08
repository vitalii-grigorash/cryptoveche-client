import React, {useState} from "react";
import './VotesPage.css';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';
import votes_page_mobile_filters_icon from '../../img/VotesPageBlock_mobile_filter_icon.svg';
import votes_page_mobile_sort_icon from '../../img/VotesPageBlock_mobile_sort_icon.svg';
import mobile_filters_sort_red_circle from '../../img/VotesPageBlock_red_cicrle.svg';
import VotesPageFiltersModal from "../VotesPageFilterSortButtons/VotesPageFiltersModal/VotesPageFiltersModal";
import VotesPageSortingModal from "../VotesPageFilterSortButtons/VotesPageSortingModal/VotesPageSortingModal";
import VotesPageActiveVotes from "../VotesPageActiveVotes/VotesPageActiveVotes";
import {activeVotesData} from "../../activeVotesData";
import VotesPagePaginationTableSearch from "../VotesPagePaginationTableSearch/VotesPagePaginationTableSearch";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import qr_cod_icon from '../../img/TitleVotesDetailsQRcod.svg';
import VotesPageArchiveVotes from "../VotesPageArchiveVotes/VotesPageArchiveVotes";
import VotesPageFilterSortButtons from "../VotesPageFilterSortButtons/VotesPageFilterSortButtons";



const VotesPage = () => {



    return (
            <div className={'votes-page-block__wrapper'}>
                <TitleVotesDetailsCallVotingProfile
                    firstLetter={'Главная'}
                    secondLetter={'Голосования'}
                    titleName={'Голосования'}
                    mobileLetter={'Назад на главную'}/>
                <img className={'votes-page-block__qr-cod'} alt={'qr-код'} src={qr_cod_icon}/>
                <div className={'votes-page-block__navigation-menu'}>
                   <VotesPageFilterSortButtons/>
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
                                        confirmStatus={item.confirmStatus}
                                        nameRegButton={item.nameRegButton}/>
                            )
                         })
                    }
                    <VotesPageArchiveVotes/>
                    <div className={'votes-page-block__main-content-show-more-button'}>
                        <span>ПОКАЗАТЬ ЕЩЁ</span>
                    </div>
                </div>
                <VotesPagePaginationTableSearch/>
            </div>
    )
}

export default VotesPage;