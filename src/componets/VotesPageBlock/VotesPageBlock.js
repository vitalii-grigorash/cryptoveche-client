import React from "react";
import './VotesPageBlock.css';
import votes_page_row_icon from '../../img/VotesPageBlock_icon_row.svg';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';
import votes_page_search_icon from '../../img/VotesPageBlock_icon_search.svg';
import votes_page_change_row_left from '../../img/VotesPageBlock_change_page_row_icon_left.svg';
import votes_page_change_row_right from '../../img/VotesPageBlock_change_page_row_icon_right.svg';


const VotesPageBlock = () => {

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
                            <button className={'block-buttons__filters-button'}><img alt={'иконка фильтры'} src={votes_page_filters_icon}/>Фильтры</button>
                            <button className={'block-buttons__sort-button'}><img alt={'иконка сортировка'} src={votes_page_sort_icon}/>Сортировка</button>
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
                    <div className={'votes-page-block__main-content-tiile'}>
                        <div className={'main-content-title__active-votes'}><h2 >Активные голосования</h2></div>
                        <h2 className={'main-content-title__archive-votes'}>Архивные голосования</h2>
                    </div>
                </div>
            </div>
    )
}

export default VotesPageBlock;