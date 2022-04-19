import React from "react";
import './VotesPageBlock.css';
import votes_page_row_icon from '../../img/VotesPageBlock_icon_row.svg';
import votes_page_filters_icon from '../../img/VotesPageBlock_filter_icon.svg';
import votes_page_sort_icon from '../../img/VotesPageBlock_sort_icon.svg';


const VotesPageBlock = () => {

    return (
            <div className={'votes-page-block__wrapper'}>
                <div className={'votes-page-block__page-info'}>
                    <span>Главная</span>
                    <img alt={'иконка стрелка'} src={votes_page_row_icon}/>
                    <span>Голосования</span>
                </div>
                <h1 className={'votes-page-block__wrapper-title'}>Голосования</h1>
                <div className={'votes-page-block__block-buttons'}>
                    <button className={'block-buttons__filters-button'}><img alt={'иконка фильтры'} src={votes_page_filters_icon}/>Фильтры</button>
                    <button className={'block-buttons__sort-button'}><img alt={'иконка сортировка'} src={votes_page_sort_icon}/>Сортировка</button>
                </div>
                <div className={'votes-page-block__main-content'}>

                </div>
            </div>
    )
}

export default VotesPageBlock;