import React, {useEffect, useState} from "react";
import './HeaderSettingsModal.css';
import header_modal_plus_icon from '../../../img/HeaderSettingsModal_icon_plus.svg';
import header_modal_minus_icon from '../../../img/HeaderSettingsModal_icon_minus.svg.svg';

const HeaderSettingsModal = ({active, setActive}) => {

    const [hideBtnUpFont, setHideBtnUpFont] = useState(true)
    const [showBtnLowFont, setShowBtnLowFont] = useState(false)

    function upFonts() {
        //при помощи JS увеличить размер шрифта html на 2px
        // let html = document.querySelector('header-settings-modal__wrapper')
        // html.style.fontSize = html.fontSize  =  '24px';
        setShowBtnLowFont(true)
        setHideBtnUpFont(false)
    }

    function lowFonts() {
        //при помощи JS увеличить размер шрифта html на 2px
        // let html = document.getElementById('qqq')
        // html.style.fontSize = html.fontSize  =  '16px';
        setShowBtnLowFont(false)
        setHideBtnUpFont(true)
    }

    useOnClickOutsideSettingsModal(active, () => setActive(false));

    function useOnClickOutsideSettingsModal(active, handler) {
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
            <div className={active ? 'header-settings-modal__wrapper active' : 'header-settings-modal__wrapper'}>
                <div className={active ? 'header-settings-modal__modal-content active' : 'header-settings-modal__modal-content'} onClick={e => e.stopPropagation()}>
                    <div className={'modal-content__size-font'}>
                        <span>Размер шрифта</span>
                        {
                          hideBtnUpFont && (
                                <img onClick={() => upFonts()} alt={'иконка выхода из приложения'} src={header_modal_plus_icon}/>
                            )
                        }

                        {
                            showBtnLowFont && (
                                <img onClick={() => lowFonts()} alt={'иконка выхода из приложения'} src={header_modal_minus_icon}/>
                            )
                        }
                    </div>
                    {/*<div className={'modal-content__change-lang'}>*/}
                    {/*    <span>РУС</span>*/}
                    {/*    <span>ENG</span>*/}
                    {/*</div>*/}
                </div>
            </div>
    )
}

export default HeaderSettingsModal;
