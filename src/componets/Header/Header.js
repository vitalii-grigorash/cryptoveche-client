import React, { useState } from "react";
import './Header.css';
import search_icon from '../../img/Header_search_icon.png';
import search_icon_mobile from '../../img/Header_search_icon_mobile.svg';
import settings from '../../img/Header_settings_icon.png';
import icon_client from '../../img/Header_lk_icon.png';
import logo_header from '../../img/Header_logo.svg';
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";
import { Link } from "react-router-dom";
import HeaderMyProfileModal from "./HeaderMyProfileModal/HeaderMyProfileModal";
import HeaderSettingsModal from "./HeaderSettingsModal/HeaderSettingsModal";



const Header = (props) => {

    const {
        handleLogout,
        userName
    } = props;

    const [burgerMenuActive, setBurgerMenuActive] = useState(false);
    const [modalProfileExitActive, setModalProfileExitActive] = useState(false);
    const [modalSettings, setModalSettings] = useState(false);
    const [showInputSearch, setShowInputSearch] = useState(false)
    const [activeBorderMain, setActiveBorderMain] = useState(true)
    const [activeBorderVotes, setActiveBorderVotes] = useState(false)

    function toggleBorderMainHide() {
        setActiveBorderMain(true)
        setActiveBorderVotes(false)
    }
    function toggleBorderVotesShow() {
        setActiveBorderMain(false)
        setActiveBorderVotes(true)
    }

    const toogleInputSearch = () => {
        setShowInputSearch(true)
    }

    return (
        <div>
            <header className={'header'}>
                {/*/------Меню бургер для мобильной версии----------------------------------------------------------------------------*/}
                <div className={'header-burger-menu'}>
                    <nav>
                        <div className={'header-burger-menu__button'} onClick={() => setBurgerMenuActive(true)}>
                            <span />
                        </div>
                    </nav>
                    <img alt={'иконка поиска'} src={search_icon_mobile} />
                    <input placeholder={'Поиск'} className={'header-burger-menu__input-search'} type={'text'} />
                </div>
                {/*-------Основная часть Header-------------------------------------------------------------------------------------*/}
                <div className={'header__container _container'}>
                    <div className={'header__logotype-block'}>
                        <Link to={'/'}><img alt={'Logo'} src={logo_header} className={'logotype-block__logo'}/></Link>
                        <span className={activeBorderMain ? 'logotype-block__main active' : 'logotype-block__main '}><Link onClick={() => {toggleBorderMainHide()}} to={'/'}>Главная</Link></span>
                        <span className={activeBorderVotes ? 'logotype-block__votes active' : 'logotype-block__votes'}><Link onClick={() => {toggleBorderVotesShow()}} to={'votes-page'}>Голосования</Link></span>
                    </div>
                    <div className={'header__general-block-search-settings-lk'}>
                        <div onClick={() => toogleInputSearch()}  className={showInputSearch ? 'general-block-search-settings-lk__search active' : 'general-block-search-settings-lk__search'}>
                            <img alt={'icon-search'} src={search_icon}/>
                                <span>Поиск</span>
                            </div>
                        <div className={showInputSearch ? 'general-block-search-settings-lk__search-input active' : 'general-block-search-settings-lk__search-input'}>
                            <input className={'search-input'}/>
                            <img className={'search-input-icon'} alt={'иконка поиска'} src={search_icon}/>
                        </div>
                        <div className={'general-block-search-settings-lk__settings'}>
                            <img onClick={() => setModalSettings(!modalSettings)} alt={'settings__icon'} src={settings}/>
                            <HeaderSettingsModal active={modalSettings} setActive={setModalSettings} />
                        </div>
                        <div className={'general-block-search-settings-lk__iconclient'}>
                            <span onClick={() => setModalProfileExitActive(!modalProfileExitActive)}><img alt={'logo_client'} src={icon_client} />{userName}</span>
                            <HeaderMyProfileModal active={modalProfileExitActive} setActive={setModalProfileExitActive} handleLogout={handleLogout}/>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderBurgerMenu active={burgerMenuActive} setActive={setBurgerMenuActive} />
        </div>
    )

}

export default Header;