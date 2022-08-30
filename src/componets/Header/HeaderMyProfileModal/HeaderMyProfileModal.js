import React, {useEffect, useRef} from "react";
import './HeaderMyProfileModal.css';
import {Link} from "react-router-dom";
import exit_icon_button from '../../../img/HeaderMyProfileModal_icon_exit.svg';

const HeaderMyProfileModal = ({active, setActive, handleLogout}) => {

    const changeCurrentStyle = useRef(setActive)

    function closeModal () {
        changeCurrentStyle.current.value = setActive(false)
    }

    useOnClickOutsideMyProfileModal(active, () => setActive(false));

    function useOnClickOutsideMyProfileModal(active, handler) {
        useEffect(() => {
            const listener = (e) => {
                if (!active) {
                    return;
                }
                handler(e);
            };
            document.addEventListener('click', listener);
            return function () {
                document.removeEventListener('click', listener);
            };
        }, [active, handler])
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
