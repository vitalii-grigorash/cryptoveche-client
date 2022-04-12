import React from "react";
import './AuthorizationSetPasswordModal.css';
import {useHistory} from "react-router-dom";

const AuthorizationSetPasswordModal = ({active}) => {


    const linkMainPage = useHistory();

    return (
        <div className={active ? 'auth-set-pass-modal active' : 'auth-set-pass-modal'}>
            <div className={'auth-set-pass-modal__content'}>
                <h1>Ваш пароль успешно изменен!</h1>
                <button type={'button'} onClick={() => { linkMainPage.push('/home')}}>На страницу входа</button>
            </div>
        </div>
    )
}

export default AuthorizationSetPasswordModal;