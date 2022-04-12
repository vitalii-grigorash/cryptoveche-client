import React from "react";
import './RegistrationModal.css';
import {useHistory} from "react-router-dom";


const RegistrationModal = ({active}) => {

    const linkMainPage = useHistory();

    return (
        <div className={active ? 'registration-modal active' : 'registration-modal'}>
            <div className={'registration-modal__content'}>
                <h1>Вы успешно прошли регистрацию!</h1>
                <button type={'button'} onClick={() => { linkMainPage.push('/home')}}>На главную</button>
            </div>
        </div>
    )
}

export default RegistrationModal;
