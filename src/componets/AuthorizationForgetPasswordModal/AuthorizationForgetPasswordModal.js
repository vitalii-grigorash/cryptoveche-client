import React from "react";
import './AuthorizationForgetPasswordModal.css';


const AuthorizationForgetPasswordModal = ({active, setActive}) => {

     function linkAuthPage() {
         window.location.assign('/home');
     }

    return (
        <div className={active ? 'auth-forget-pass-modal active' : 'auth-forget-pass-modal'} onClick={() => setActive(false)}>
            <div className={'auth-forget-pass-modal__content'} onClick={e => e.stopPropagation()}>
                <h1>Почти готово!</h1>
                <span>На вашу электронную почту отправлена инструкция по смене пароля</span>
              <button onClick={(e) => linkAuthPage(e)}>На страницу входа</button>
            </div>
        </div>
    )
}

export default AuthorizationForgetPasswordModal;