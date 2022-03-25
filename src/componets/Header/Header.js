import React from "react";
import './Header.css';
import searchicon from '../../img/search_icon.png';
import settings from '../../img/settings_icon.png';
import iconclient from '../../img/lk_icon.png';
import logohead from '../../img/Logo_header.svg';


const Header = () => {

    return (
        <div>
           <header className={'header'}>
               <div className={'header__container _container'}>
                       <div className={'header__left-block'}>
                           <img alt={'Logo'} src={logohead}/>
                           <span>Главная</span>
                           <span>Голосование</span>
                        </div>
                       <div className={'header__right-block'}>
                           <div className={'right-block__search'}>
                                <img alt={'icon-search'} src={searchicon}/>
                                <span>Поиск</span>
                           </div>
                                <img alt={'settings__icon'} src={settings}/>
                           <div className={'right-block__iconclient'}>
                               <img alt={'logo_client'} src={iconclient}/>
                               <span>Иванова А.А.</span>
                           </div>
                       </div>
               </div>
           </header>
        </div>
    )

}

export default Header;