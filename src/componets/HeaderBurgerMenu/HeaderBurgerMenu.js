import React from "react";
import './HeaderBurgerMenu.css';
import burger_menu_logo from "../../img/HeaderBurgerMenu_logo.svg";
import burger_menu_icon_search from '../../img/HeaderBurgerMenu_icon_search.svg';
import {Link} from "react-router-dom";



const HeaderBurgerMenu = ({active, setActive}) => {



    return (
            <div className={active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
                <div className={'blur'}/>
                <div className={active ? 'burger-menu__content active' : 'burger-menu__content'} onClick={e => e.stopPropagation()}>
                    <div className={'burger-menu__logotype-block'}>
                        <img alt={'Logo'} src={burger_menu_logo}/>
                        <div><a href={'ru'}>РУС</a><span>ENG</span></div>
                    </div>
                    <div className={'burger-menu__link-page'}>
                        <Link to={'/main'}>Главная</Link>
                        <Link to={'/main/votes-page'}>Голосования</Link>
                        <Link to={'/main/my-profile'}>Мой профиль</Link>
                    </div>
                    <div className={'burger-menu__toggle-font'}>
                        <span>Увеличить шрифт</span>
                        <label className={'toggle-font__button'}>
                            <input type={"checkbox"}/>
                            <span className={'toggle-font__slider'}/>
                        </label>
                    </div>
                    <div className={'burger-menu__politic-support'}>
                        <span>Политика конфидициальности</span>
                        <a href={'/home'}>support@krypto.ru</a>
                    </div>
                    <div className={'burger-menu__search-form-logo'}>
                        <span>© KRIPTOVECHE</span>
                        <img alt={'icon_search'} src={burger_menu_icon_search}/>
                        <input placeholder={'Поиск'} type={'text'}/>
                    </div>
                </div>
            </div>
    )

}

export default HeaderBurgerMenu;