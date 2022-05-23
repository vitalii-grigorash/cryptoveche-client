import React from "react";
import './DetailsVotesPageMobileModal.css';

const DetailsVotesPageMobileModal = () => {

    return (
        <div className={'details-votes-page-mobile-modal__wrapper'}>
            <span>Вы успешно зарегистрировались! Проголосовать можно будет через 2 дня, 6 часов, 15 минут.</span>
            <button className={'details-votes-page-mobile-modal__button'}>Понятно!</button>
        </div>
    )
}

export default DetailsVotesPageMobileModal;