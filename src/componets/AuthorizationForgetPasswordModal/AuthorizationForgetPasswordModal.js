import React from "react";
import './AuthorizationForgetPasswordModal.css';
import {useNavigate} from "react-router-dom";


const AuthorizationForgetPasswordModal = ({active}) => {

    const linkMainPage = useNavigate();

    return (
        <div className={active ? 'auth-forget-pass-modal active' : 'auth-forget-pass-modal'}>
            <div className={'auth-forget-pass-modal__content'}>
                <h1>Почти готово!</h1>
                <span>На вашу электронную почту отправлена инструкция по смене пароля</span>
              <button type={'button'} onClick={() => { linkMainPage('/main')}}>На страницу входа</button>
            </div>
        </div>
    )
}

export default AuthorizationForgetPasswordModal;