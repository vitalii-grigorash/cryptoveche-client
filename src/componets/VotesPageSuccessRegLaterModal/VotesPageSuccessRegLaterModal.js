import React from "react";
import './VotesPageSuccessRegLaterModal.css';

const VotesPageSuccessRegLaterModal = (props) => {

    const {
        isActive,
        handleShowSuccessModal,
        successModalText
    } = props;

    setTimeout(() => {
        if (isActive) {
            handleShowSuccessModal();
        }
    }, 5000)

    return (
        <div className={isActive ? 'details-votes-success-reg-modal__wrapper active' : 'details-votes-success-reg-modal__wrapper'}>
            <div className={isActive ? 'details-votes-success-reg-modal__content active' : 'details-votes-success-reg-modal__content'}>
                <span>{successModalText}</span>
                <button className={'details-votes-success-reg-modal__button'} onClick={handleShowSuccessModal}>Понятно!</button>
            </div>
        </div>
    )
}

export default VotesPageSuccessRegLaterModal;
