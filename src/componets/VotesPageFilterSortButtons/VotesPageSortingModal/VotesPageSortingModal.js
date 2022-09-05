import React, {useEffect, useState} from "react";
import './VotesPageSortingModal.css';
import sorting_modal_close_button from "../../../img/VotesPageBlockFilterModal_close_button.svg";
import sorting_modal_decrease_btn from '../../../img/VotesPageBlockSortModal_decrease_btn.svg';
import sorting_modal_increase_bnt from '../../../img/VotesPageBlockSortModal_increase_btn.svg';

const VotesPageSortingModal = (props) => {

    const {
        active,
        setActive,
        clickSortTypeDec,
        clickSortTypeInc
    } = props;

    const listSortName = [
            {name: 'Названию события', sortPropertyDec: '-eventName', sortPropertyInc: 'eventName'},
            {name: 'Названию организации', sortPropertyDec: '-orgName', sortPropertyInc: 'orgName'},
            {name: 'Времени начала регистрации', sortPropertyDec: '-startReg', sortPropertyInc: 'startReg'},
            {name: 'Времени начала голосования', sortPropertyDec: '-startVote', sortPropertyInc: 'startVote'},
            {name: 'Времени окончания регистрации', sortPropertyDec: '-endReg', sortPropertyInc: 'endReg'},
            {name: 'Времени окончания голосования', sortPropertyDec: '-endVote', sortPropertyInc: 'endVote'}
            ];

    //clickSortTypeDec функция для сортовки на уменьшение
    // clickSortTypeInc функция для сортировки на увеличение

    const [act, setAct] = useState(false)
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
                    {listSortName.map((obj, i) => (
                        <div key={i} className={'sorting-modal__types-sort'}>
                            <span>{obj.name}</span>
                            <div className={'types-sort__decrease-increase-btn'}>
                                <img onClick={() => clickSortTypeDec(obj.sortPropertyDec, setActive(false))} alt={'иконка сортировки на убывание'} src={sorting_modal_decrease_btn}/>
                                <img onClick={() => clickSortTypeInc(obj.sortPropertyInc, setActive(false))} alt={'иконка сортировки на увеличение'} src={sorting_modal_increase_bnt}/>
                            </div>
                        </div>
                    ))
                    }
                    {/*<div className={'sorting-modal__mobile-buttons'}>*/}
                    {/*    <button type={"button"} className={'sorting-modal__mobile-buttons-default-filter'}>Сбросить фильтры</button>*/}
                    {/*    <button type={"button"} className={'sorting-modal__mobile-buttons-apply'}>Применить</button>*/}
                    {/*</div>*/}
                </div>
            </div>
    )
}
export default VotesPageSortingModal;