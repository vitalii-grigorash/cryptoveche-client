import React from "react";
import './HeaderSettingsModal.css';
import header_modal_plus_icon from '../../../img/HeaderSettingsModal_icon_plus.svg';
// import header_modal_minus_icon from '../../../img/HeaderSettingsModal_icon_minus.svg.svg';

const HeaderSettingsModal = ({active}) => {

    return (
            <div className={active ? 'header-settings-modal__wrapper active' : 'header-settings-modal__wrapper'}>
                <div className={active ? 'header-settings-modal__modal-content active' : 'header-settings-modal__modal-content'} onClick={e => e.stopPropagation()}>
                    <div className={'modal-content__size-font'}>
                        <span>Размер шрифта</span><img alt={'иконка выхода из приложения'} src={header_modal_plus_icon}/>
                    </div>
                    <div className={'modal-content__change-lang'}>
                        <span>РУС</span>
                        <span>ENG</span>
                    </div>
                </div>
            </div>
    )
}

export default HeaderSettingsModal;
