import React from "react";
import './Header.css';
import search_icon from '../../img/Header_search_icon.png';
import settings from '../../img/Header_settings_icon.png';
import icon_client from '../../img/Header_lk_icon.png';
import logo_header from '../../img/Header_logo.svg';


const Header = () => {

    return (
            <div>
               <header className={'header'}>
                   <div className={'header__container _container'}>
                           <div className={'header__logotype-block'}>
                               <img alt={'Logo'} src={logo_header}/>
                               <span><a href={'/home'}>Главная</a></span>
                               <span><a href={'/home'}>Голосование</a></span>
                            </div>
                           <div className={'header__general-block-search-settings-lk'}>
                               <div className={'general-block-search-settings-lk__search'}>
                                   <a href={'/home'}><img alt={'icon-search'} src={search_icon}/></a>
                                    <span>Поиск</span>
                               </div>
                               <a href={'/home'}><img alt={'settings__icon'} src={settings}/></a>
                               <div className={'general-block-search-settings-lk__iconclient'}>
                                   <a href={'/home'}><img alt={'logo_client'} src={icon_client}/></a>
                                   <span>Иванова А.А.</span>
                               </div>
                           </div>
                    </div>
               </header>
            </div>
    )

}

export default Header;