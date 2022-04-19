import React, {useState} from "react";
import './Header.css';
import search_icon from '../../img/Header_search_icon.png';
import search_icon_mobile from '../../img/Header_search_icon_mobile.svg';
import settings from '../../img/Header_settings_icon.png';
import icon_client from '../../img/Header_lk_icon.png';
import logo_header from '../../img/Header_logo.svg';
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";
import {Link} from "react-router-dom";



const Header = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);


    return (
            <div>
               <header className={'header'}>
{/*/------Меню бургер для мобильной версии----------------------------------------------------------------------------*/}
                   <div className={'header-burger-menu'}>
                           <nav>
                               <div className={'header-burger-menu__button'} onClick={() => setBurgerMenuActive(true)}>
                                   <span/>
                               </div>
                           </nav>
                       <img alt={'иконка поиска'} src={search_icon_mobile}/>
                      <input placeholder={'Поиск'} className={'header-burger-menu__input-search'} type={'text'}/>
                   </div>
 {/*-------Основная часть Header-------------------------------------------------------------------------------------*/}
                   <div className={'header__container _container'}>
                           <div className={'header__logotype-block'}>
                               <img alt={'Logo'} src={logo_header}/>
                               <Link to={'/home'}><span>Главная</span></Link>
                               <Link to={'votes-page'}><span>Голосование</span></Link>
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
                <HeaderBurgerMenu active={burgerMenuActive} setActive={setBurgerMenuActive}/>
            </div>
    )

}

export default Header;