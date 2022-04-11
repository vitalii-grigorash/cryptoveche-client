import React from "react";
import './RegistrationModal.css';

const RegistrationModal = ({active, setActive}) => {

    function linkAuthPage() {
        window.location.assign('/home');
    }

    return (
        <div className={active ? 'registration-modal active' : 'registration-modal'} onClick={() => setActive(false)}>
            <div className={'registration-modal__content'} onClick={e => e.stopPropagation()}>
                <h1>Вы успешно прошли регистрацию!</h1>
                <button onClick={(e) => linkAuthPage(e)}>На главную</button>
            </div>
        </div>
    )
}

export default RegistrationModal;
