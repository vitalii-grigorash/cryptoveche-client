import React from "react";
import './Footer.css';
import logo_footer from '../../img/Footer_logo.svg';
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div>
            <footer className="footer">
                <div className="footer__items _container">
                   <div className={'items__block-logo'}>
                       <div><img alt={'logo'} src={logo_footer}/></div>
                       <span>©2019-2022.Система разработана Центром технологий распределенных реестров СПбГУ.<p>Все права защищены.</p></span>
                   </div>
                    <div className={'items__block-map-site'}>
                        <h3>Карта сайта</h3>
                        <Link to={'/main'}><span>Главная</span></Link>
                        <Link to={'/votes-page'}><span>Голосование</span></Link>
                        <span>Мой профиль</span>
                    </div>
                    <div className={'items__block-settings'}>
                        <h3>Настройки</h3>
                        <span>Язык:<select><option>Русский</option></select></span>
                        <span>Размер шрифта:<select><option>Стандартный</option></select></span>
                        <span>Часовой пояс:<select><option>GMT+03:00</option></select></span>
                    </div>
                    <div className={'items__block-support'}>
                        <h3>Поддержка</h3>
                        <span>Политика<p>конфиденциальности</p></span>
                        <span>support@dltc.ru</span>
                    </div>
                </div>
                <span className={'items__block-logo_mobile-position'}>©2019-2022.Система разработана Центром технологий распределенных реестров СПбГУ.<p>Все права защищены.</p></span>
            </footer>
        </div>
    )
}
export default Footer;