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
                       <div className={'header__left-block'}>
                           <img alt={'Logo'} src={logo_header}/>
                           <span>Главная</span>
                           <span>Голосование</span>
                        </div>
                       <div className={'header__right-block'}>
                           <div className={'right-block__search'}>
                                <img alt={'icon-search'} src={search_icon}/>
                                <span>Поиск</span>
                           </div>
                                <img alt={'settings__icon'} src={settings}/>
                           <div className={'right-block__iconclient'}>
                               <img alt={'logo_client'} src={icon_client}/>
                               <span>Иванова А.А.</span>
                           </div>
                       </div>
               </div>
           </header>
        </div>
    )

}

export default Header;