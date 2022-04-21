import React from "react";
import './VotesPageBlockFiltersModal.css';
import filter_modal_close_button from '../../img/VotesPageBlockFilterModal_close_button .svg';


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
                            <input type={'checkbox'}/><label>Идет голосование</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Идет регистрация</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Регистрация и голосование</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Ожидание голосования</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Ожидание регистрации</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Голосование завершено</label>
                        </div>
                        <div className={'checkbox-status-vote'}>
                            <input type={'checkbox'}/><label>Кворум не достигнут</label>
                        </div>
                    </div>
                    <div>
                        <h3>По типу голосования</h3>
                    </div>
                </div>
            </div>
    )
}

export default VotesPageBlockFiltersModal;