import React from "react";
import './VotesPageFiltersModal.css';
import filter_modal_close_button from '../../img/VotesPageBlockFilterModal_close_button.svg';
import filter_modal_close_button_mobile from '../../img/VotesPageBlockFilterModal_close_button_mobile.svg';
import filter_modal_increment_button from '../../img/VotesPageBlockModal_increment_icon.svg';
import FiltersModalCheckBox from "./FiltersModalCheckBox/FiltersModalCheckBox";


const VotesPageFiltersModal = ({active, setActive}) => {

    return (
            <div className={active ? 'filters-modal active' : 'filters-modal'}>
                <div className={active ? 'filters-modal__content active' : 'filters-modal__content'} onClick={e => e.stopPropagation()}>
                    <div className={'filters-modal__content-title-mobile'}>
                       <h5>Фильтры</h5>
                        <img alt={'кнопка-крестик'} src={filter_modal_close_button_mobile} onClick={() => setActive(false)}/>
                    </div>
                    <div className={'filters-modal__content-title'}>
                        <h3>По статусу голосования</h3>
                        <h4>Статус голосования</h4>
                        <img alt={'кнопка-крестик'} src={filter_modal_close_button} onClick={() => setActive(false)}/>
                    </div>
                    <div className={'filters-modal__content-checkboxes-status-vote'}>
                        <FiltersModalCheckBox nameSearchVote={'Идет голосование'}/>
                        <FiltersModalCheckBox nameSearchVote={'Идет регистрация'}/>
                        <FiltersModalCheckBox nameSearchVote={'Регистрация и голосование'}/>
                        <FiltersModalCheckBox nameSearchVote={'Ожидание голосования'}/>
                        <FiltersModalCheckBox nameSearchVote={'Ожидание регистрации'}/>
                        <FiltersModalCheckBox nameSearchVote={'Голосование завершено'}/>
                        <FiltersModalCheckBox nameSearchVote={'Кворум не достигнут'}/>
                    </div>
                    <div className={'filters-modal__content-checkboxes-type-vote'}>
                        <h3>По типу голосования</h3>
                        <h4>Тип голосования</h4>
                        <div className={'content-checkboxes-type-vote'}>
                            <FiltersModalCheckBox nameSearchVote={'Открытое'}/>
                            <FiltersModalCheckBox nameSearchVote={'Тайное'}/>
                        </div>
                    </div>
                    <div className={'filters-modal__content-date-start-reg'}>
                        <h3>По дате начала регистрации</h3>
                        <h4>Дата начала регистрации</h4>
                        <div className={'content-date-start-reg'}>
                            <div className={'content-date-start-reg__select-dates'}>
                                <span>с</span>
                                    <input type={'date'} className={'content-date-start-reg__start-select-date'}/>по
                                    <input type={"date"} className={'content-date-start-reg__end-select-date'}/>
                            </div>
                            <div className={'content-date-start-reg__increment-bnt'}>
                                <span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button}/>
                            </div>
                        </div>
                    </div>
                    <div className={'filters-modal__content-date-start-vote'}>
                        <h3>По дате начала голосования</h3>
                        <h4>Дата начала голосования</h4>
                        <div className={'content-date-start-vote'}>
                            <div className={'content-date-start-reg__select-dates'}>
                                <span>с</span>
                                <input type={'date'} className={'content-date-start-vote__start-select-date'}/>по
                                <input type={"date"} className={'content-date-start-vote__end-select-date'}/>
                            </div>
                            <div className={'content-date-start-reg__increment-bnt'}>
                                 <span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default VotesPageFiltersModal;