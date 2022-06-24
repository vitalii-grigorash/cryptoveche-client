import React from "react";
import './DetailsVotesSuccessRegModal.js.css';

const DetailsVotesSuccessRegModal = ({active, setActive}) => {



    return (
        <div className={active ? 'details-votes-success-reg-modal__wrapper active' : 'details-votes-success-reg-modal__wrapper'}>
            <div className={active ? 'details-votes-success-reg-modal__content active' : 'details-votes-success-reg-modal__content'}>
                <span>Вы успешно зарегистрировались! Проголосовать можно будет через 5 часов, 8 минут.</span>
                <button className={'details-votes-success-reg-modal__button'} onClick={() => setActive(false)}>Понятно!</button>
            </div>
        </div>
    )
}

export default DetailsVotesSuccessRegModal;