import React from "react";
import './HeaderMyProfileModal.css';
import {Link} from "react-router-dom";
import exit_icon_button from '../../../img/HeaderMyProfileModal_icon_exit.svg';

const HeaderMyProfileModal = ({active}) => {



    return (
            <div className={active ? 'header-my-profile-modal__wrapper active' : 'header-my-profile-modal__wrapper'}>
                <div className={active ? 'header-my-profile-modal__modal-content active' : 'header-my-profile-modal__modal-content'} onClick={e => e.stopPropagation()}>
                    <Link to={'/main/my-profile'}>Мой профиль</Link>
                    <span><img alt={'иконка выхода из приложения'} src={exit_icon_button}/>Выйти</span>
                </div>
            </div>
    )
}

export default HeaderMyProfileModal;
