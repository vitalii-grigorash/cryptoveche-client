import React, {useEffect, useState} from "react";
import './Footer.css';
import logo_footer from '../../img/FooterLogo.svg';
import { Link } from "react-router-dom";

const Footer = (props) => {

    const {
        utc,
        setOffset
    } = props;

    const [timeZoneLocation, setTimeZoneLocation] = useState('');
    const [timeZoneValue, setTimeZoneValue] = useState(3);
    const [isTimeZoneOptionsOpen, setTimeZoneOptionsOpen] = useState(false);

    useEffect (() => {
        if (utc !== '') {
            setTimeZoneLocation(utc);
        }
    }, [utc]);

    function onSelectTimeZoneClick(location) {
        setTimeZoneValue(location.VALUE);
        setTimeZoneLocation(location.LABEL);
    }

    function handleTimeZoneOptionsOpen() {
        if (isTimeZoneOptionsOpen) {
            setTimeZoneOptionsOpen(false);
        } else {
            setTimeZoneOptionsOpen(true);

        }
    }


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
                        <Link to={'/'}><span>Главная</span></Link>
                        <Link to={'/votes-page'}><span>Голосование</span></Link>
                        <Link to={'/my-profile'}><span>Мой профиль</span></Link>
                    </div>
                    <div className={'items__block-settings'}>
                        <h3>Настройки</h3>
                        <span>Язык: Русский </span>
                        <span>Размер шрифта:<select><option>Стандартный</option></select></span>
                        <span>Часовой пояс:<select><option>{timeZoneLocation.slice(1, 6)}</option></select></span>
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