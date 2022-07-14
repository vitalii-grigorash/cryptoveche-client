import React from "react";
import './MainPageSuccessModal.css';
import success_icon from '../../img/MainPageSuccessModal_icon_success.svg';

const MainPageSuccessModal = ({active, setActive}) => {

    return (
        <div className={active ? 'main-page-success-modal__wrapper active' : 'main-page-success-modal__wrapper'}>
            <div className={active ? 'main-page-success-modal__content active' : 'main-page-success-modal__content'}>
                <span className={'modal__content-text-info'}><img className={'modal__icon-success'} alt={'иконка-галочка'} src={success_icon}/>Какой-то текст по поводу того, что что-то было изменено может даже очень много букв, что в одну строку не помещается и это было совершено <span className={'modal__content-color-word'}>успешно!</span></span>
                <button className={'main-page-success-modal__button'} onClick={() => setActive(false)}>Понятно</button>
            </div>
        </div>
    )
}

export default MainPageSuccessModal;

