import React from "react";
import './VotesPageBlockFiltersModal.css';
import filter_modal_close_button from '../../img/VotesPageBlockFilterModal_close_button .svg';
import filter_modal_increment_button from '../../img/VotesPageBlockModal_increment_icon.svg';


const VotesPageBlockFiltersModal = ({active, setActive}) => {

    return (
            <div className={active ? 'filters-modal active' : 'filters-modal'}>
                <div className={active ? 'filters-modal__content active' : 'filters-modal__content'} onClick={e => e.stopPropagation()}>
                    <div className={'filters-modal__content-title'}>
                        <h3>По статусу голосования</h3>
                        <img alt={'кнопка-крестик-закрыть окно'} src={filter_modal_close_button} onClick={() => setActive(false)}/>
                    </div>
                    <div className={'filters-modal__content-checkboxes-status-vote'}>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Идет голосование
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Идет регистрация
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Регистрация и голосование
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Ожидание голосования
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Ожидание регистрации
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Голосование завершено
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>Кворум не достигнут
                                <span className={'checkmark _checkbox-border-color'}/>
                            </label>
                        </div>
                    </div>
                    <div className={'filters-modal__content-checkboxes-type-vote'}>
                        <h3>По типу голосования</h3>
                        <div className={'content-checkboxes-type-vote'}>
                            <div className={'checkbox-type-vote'}>
                                <label className={'checkbox_container'}>
                                    <input type="checkbox" value="yes"/>Открытое
                                    <span className={'checkmark _checkbox-border-color'}/>
                                </label>
                            </div>
                            <div className={'checkbox-type-vote'}>
                                <label className={'checkbox_container'}>
                                    <input type="checkbox" value="yes"/>Тайное
                                    <span className={'checkmark _checkbox-border-color'}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={'filters-modal__content-date-start-reg'}>
                        <h3>По дате начала регистрации</h3>
                        <div className={'content-date-start-reg'}>
                            <span>с</span><input type={'date'} className={'content-date-start-reg__start-select-date'}/>по<input type={"date"} className={'content-date-start-reg__end-select-date'}/><span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button}/>
                        </div>
                    </div>
                    <div className={'filters-modal__content-date-start-vote'}>
                        <h3>По дате начала голосования</h3>
                        <div className={'content-date-start-vote'}>
                            <span>с</span><input type={'date'} className={'content-date-start-vote__start-select-date'}/>по<input type={"date"} className={'content-date-start-reg__end-select-date'}/><span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default VotesPageBlockFiltersModal;