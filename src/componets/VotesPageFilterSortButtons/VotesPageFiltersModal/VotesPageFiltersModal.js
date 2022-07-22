import React, { useEffect } from "react";
import './VotesPageFiltersModal.css';
import filter_modal_close_button_mobile from '../../../img/VotesPageBlockFilterModal_close_button_mobile.svg';
import filter_modal_close_button from '../../../img/VotesPageBlockFilterModal_close_button.svg';
import filter_modal_increment_button from '../../../img/VotesPageBlockModal_increment_icon.svg';
import FiltersModalCheckBox from "./FiltersModalCheckBox/FiltersModalCheckBox";


const VotesPageFiltersModal = (props) => {

    const {
        active,
        setActive,
        checkboxFilterArrayAdd,
        checkboxFilterArrayRemove,
        onApplyFilterClick,
        onResetFilterClick,
    } = props;

    useOnClickOutsideFiltersModal(active, () => setActive(false));

    function useOnClickOutsideFiltersModal(active, handler) {
        useEffect(() => {
            const listener = (e) => {
                if (!active) {
                    return;
                }
                handler(e);
            };
            document.addEventListener('click', listener);
            return function () {
                document.removeEventListener('click', listener);
            };
        }, [active, handler])
    }

    function applyFilter() {
        onApplyFilterClick();
        setActive(false)
    }

    function resetFilter() {
        onResetFilterClick();
        setActive(false)
    }

    return (
        <div className={active ? 'filters-modal active' : 'filters-modal'}>
            <div className={active ? 'filters-modal__content active' : 'filters-modal__content'} onClick={e => e.stopPropagation()}>
                <div className={'filters-modal__content-title-mobile'}>
                    <h5>Фильтры</h5>
                    <img alt={'кнопка-крестик'} src={filter_modal_close_button_mobile} onClick={() => setActive(false)} />
                </div>
                <div className={'filters-modal__content-title'}>
                    <h3>По статусу голосования</h3>
                    <h4>Статус голосования</h4>
                    <img alt={'кнопка-крестик'} src={filter_modal_close_button} onClick={() => setActive(false)} />
                </div>
                <div className={'filters-modal__content-checkboxes-status-vote'}>
                    <FiltersModalCheckBox
                        nameSearchVote={'Идет голосование'}
                        status={"voting"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Идет регистрация'}
                        status={"registration"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Регистрация и голосование'}
                        status={"registration and voting"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Ожидание голосования'}
                        status={"event waiting"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Ожидание регистрации'}
                        status={"waiting"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Голосование завершено'}
                        status={"ended"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                    <FiltersModalCheckBox
                        nameSearchVote={'Кворум не достигнут'}
                        status={"quorum not reached"}
                        checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                        checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                    />
                </div>
                <div className={'filters-modal__content-checkboxes-type-vote'}>
                    <h3>По типу голосования</h3>
                    <h4>Тип голосования</h4>
                    <div className={'content-checkboxes-type-vote'}>
                        <FiltersModalCheckBox
                            nameSearchVote={'Открытое'}
                            type={"open"}
                            checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                            checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                        />
                        <FiltersModalCheckBox
                            nameSearchVote={'Тайное'}
                            type={"secret"}
                            checkboxFilterArrayAdd={checkboxFilterArrayAdd}
                            checkboxFilterArrayRemove={checkboxFilterArrayRemove}
                        />
                    </div>
                </div>
                <div className={'filters-modal__content-date-start-reg'}>
                    <h3>По дате начала регистрации</h3>
                    <h4>Дата начала регистрации</h4>
                    <div className={'content-date-start-reg'}>
                        <div className={'content-date-start-reg__select-dates'}>
                            <span>с</span>
                            <input type={'date'} className={'content-date-start-reg__start-select-date'} />по
                            <input type={"date"} className={'content-date-start-reg__end-select-date'} />
                        </div>
                        <div className={'content-date-start-reg__increment-bnt'}>
                            <span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button} />
                        </div>
                    </div>
                </div>
                <div className={'filters-modal__content-date-start-vote'}>
                    <h3>По дате начала голосования</h3>
                    <h4>Дата начала голосования</h4>
                    <div className={'content-date-start-vote'}>
                        <div className={'content-date-start-reg__select-dates'}>
                            <span>с</span>
                            <input type={'date'} className={'content-date-start-vote__start-select-date'} />по
                            <input type={"date"} className={'content-date-start-vote__end-select-date'} />
                        </div>
                        <div className={'content-date-start-reg__increment-bnt'}>
                            <span>По возрастанию</span><img alt={'кнопка по возрастанию'} src={filter_modal_increment_button} />
                        </div>
                    </div>
                </div>
                <div className={'filters-modal__buttons-container'}>
                    <button className={'filters-modal__button-apply'} onClick={applyFilter}>Применить фильтр</button>
                    <button className={'filters-modal__button-reset'} onClick={resetFilter}>Сбросить все фильтры</button>
                </div>
            </div>
        </div>
    )
}

export default VotesPageFiltersModal;
