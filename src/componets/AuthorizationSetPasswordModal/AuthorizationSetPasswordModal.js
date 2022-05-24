import React from "react";
import './AuthorizationSetPasswordModal.css';
import {useNavigate} from "react-router-dom";
import icon_checkmark from "../../img/MyVotes_icon_checkmark.svg";


const AuthorizationSetPasswordModal = ({active}) => {


    const linkMainPage = useNavigate();

    return (
            <div className={active ? 'auth-set-pass-modal active' : 'auth-set-pass-modal'}>
                <div className={'auth-set-pass-modal__content'}>
                    <div className={'content__title'}>
                        <h3>Установка пароля</h3>
                        <div className={'title__language'}><span>РУС</span><a href={'en'}>ENG</a></div>
                        <img className={'title__checkmark-set-pass-modal'} alt={'зеленая галочка'} src={icon_checkmark}/>
                    </div>
                    <h4>Ваш пароль успешно изменён!</h4>
                    <button type={'button'} onClick={() => { linkMainPage('/main')}}>На страницу входа</button>
                </div>
            </div>
    )
}

export default AuthorizationSetPasswordModal;