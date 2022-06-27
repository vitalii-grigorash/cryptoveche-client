import React from "react";
import './VotesPageSuccessRegNowModal.css';

const VotesPageSuccessRegNowModal = ({active, setActive}) => {

    return (
            <div className={active ? 'votes-page-success-reg-modal__wrapper active' : 'votes-page-success-reg-modal__wrapper'}>
                <div className={active ? 'votes-page-success-reg-modal__content active' : 'votes-page-successs-reg-modal__content'}>
                    <span>Вы успешно зарегистрировались! Вы можете проголосовать прямо сейчас.</span>
                    <button className={'votes-page-success-reg-modal__button'} onClick={() => setActive(false)}>Перейти к голосованию</button>
                </div>
            </div>
    )
}
export default VotesPageSuccessRegNowModal;