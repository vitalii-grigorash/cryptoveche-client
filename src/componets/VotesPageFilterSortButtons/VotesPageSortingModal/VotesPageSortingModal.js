import React, {useEffect} from "react";
import './VotesPageSortingModal.css';
import sorting_modal_close_button from "../../../img/VotesPageBlockFilterModal_close_button.svg";
import sorting_modal_decrease_btn from '../../../img/VotesPageBlockSortModal_decrease_btn.svg';
import sorting_modal_increase_bnt from '../../../img/VotesPageBlockSortModal_increase_btn.svg';

const VotesPageSortingModal = (props) => {

    const {
        active,
        setActive,
        sortType,
        onClickSortType
    } = props;

const listSortName = ['Названию события', 'Названию организации', 'Времени начала регистрации', 'Времени начала голосования', 'Времени окончания регистрации', 'Времени окончания голосования'];
const sortName = listSortName[sortType];

    const clickSort = (i) =>{
        onClickSortType(i);
    };

    useOnClickOutsideSortModal(active, () => setActive(false))

    function useOnClickOutsideSortModal(active, handler) {
        useEffect(() => {
            const listener = (e) => {
                if(!active) {
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

    return (
            <div className={active ? 'sorting-modal active' : 'sorting-modal'}>
                <div className={active ? 'sorting-modal__content active' : 'sorting-modal__content'} onClick={e => e.stopPropagation()}>
                    <div className={'sorting-modal__content-title'}>
                        <h3>Сортировать по</h3>
                        <img alt={'кнопка-крестик-закрыть окно'} src={sorting_modal_close_button} onClick={() => setActive(false)}/>
                    </div>
                    {listSortName.map((name, i) => (
                        <div key={i} className={'sorting-modal__types-sort'}>
                            <span>{name}</span>
                            <div className={'types-sort__decrease-increase-btn'}>
                                <img onClick={() => clickSort(i)} alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                                <img onClick={() => clickSort(i)} alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                            </div>
                        </div>
                    ))
                    }
                    <div className={'sorting-modal__mobile-buttons'}>
                        <button type={"button"} className={'sorting-modal__mobile-buttons-default-filter'}>Сбросить фильтры</button>
                        <button type={"button"} className={'sorting-modal__mobile-buttons-apply'}>Применить</button>
                    </div>
                </div>
            </div>
    )

}

export default VotesPageSortingModal;