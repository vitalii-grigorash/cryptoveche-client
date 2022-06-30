import React, {useRef} from "react";
import './HeaderMyProfileModal.css';
import {Link} from "react-router-dom";
import exit_icon_button from '../../../img/HeaderMyProfileModal_icon_exit.svg';

const HeaderMyProfileModal = ({active, setActive, handleLogout}) => {

    const changeCurrentStyle = useRef(setActive)


    function closeModal () {
        changeCurrentStyle.current.value = setActive(false)
        console.log(changeCurrentStyle)
    }



    return (
            <div ref={changeCurrentStyle} className={active ? 'header-my-profile-modal__wrapper active' : 'header-my-profile-modal__wrapper'}>
                <div className={active ? 'header-my-profile-modal__modal-content active' : 'header-my-profile-modal__modal-content'} onClick={e => e.stopPropagation()}>
                    <Link onClick={() => closeModal()} to={'/my-profile'}>Мой профиль</Link>
                    <span onClick={handleLogout}><img alt={'иконка выхода из приложения'} src={exit_icon_button}/>Выйти</span>
                </div>
            </div>
    )
}

export default HeaderMyProfileModal;
