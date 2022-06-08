import React from "react";
import './VotesPageSortingModal.css';
import sorting_modal_close_button from "../../../img/VotesPageBlockFilterModal_close_button.svg";
import sorting_modal_decrease_btn from '../../../img/VotesPageBlockSortModal_decrease_btn.svg';
import sorting_modal_increase_bnt from '../../../img/VotesPageBlockSortModal_increase_btn.svg';

const VotesPageSortingModal = ({active, setActive}) => {
    return (
            <div className={active ? 'sorting-modal active' : 'sorting-modal'}>

                <div className={active ? 'sorting-modal__content active' : 'sorting-modal__content'} onClick={e => e.stopPropagation()}>
                    <div className={'sorting-modal__content-title'}>
                        <h3>Сортировать по</h3>
                        <img alt={'кнопка-крестик-закрыть окно'} src={sorting_modal_close_button} onClick={() => setActive(false)}/>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Названию события</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Названию организации</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Времени начала регистрации</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Времени начала голосования</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Времени окончания регистрации</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__types-sort'}>
                        <span>Времени окончания голосования</span>
                        <div className={'types-sort__decrease-increase-btn'}>
                            <img alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                            <img alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                        </div>
                    </div>
                    <div className={'sorting-modal__mobile-buttons'}>
                        <button type={"button"} className={'sorting-modal__mobile-buttons-default-filter'}>Сбросить фильтры</button>
                        <button type={"button"} className={'sorting-modal__mobile-buttons-apply'}>Применить</button>
                    </div>
                </div>
            </div>
    )

}

export default VotesPageSortingModal;