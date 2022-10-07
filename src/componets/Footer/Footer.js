// import React, { useEffect, useState } from "react";
import React from "react";
import './Footer.css';
import logo_footer from '../../img/FooterLogo.svg';
import { Link } from "react-router-dom";
// import timeZone from "../../utils/TimeZoneData/TimeZoneRu.json";
// import optionRow from "../../img/INPUT-ICONS-24-ARROW.svg";
// import * as MyProfile from "../../Api/MyProfile";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Footer = (props) => {

    // const {
    //     utc,
    //     setOffset,
    //     requestHelper
    // } = props;

    // const currentUser = React.useContext(CurrentUserContext);
    // const userId = currentUser.id;
    // const [timeZoneLocation, setTimeZoneLocation] = useState('');
    // const [timeZoneValue, setTimeZoneValue] = useState(3);
    // const [isTimeZoneOptionsOpen, setTimeZoneOptionsOpen] = useState(false);
    // const [active, setActive] = useState(false)

    // useEffect(() => {
    //     if (utc !== '') {
    //         setTimeZoneLocation(utc);
    //     }
    // }, [utc]);


    // function onSelectTimeZoneClick(location) {
    //     setTimeZoneValue(location.VALUE);
    //     setTimeZoneLocation(location.LABEL);
    //     setActive(true)
    // }

    // let utfOffset = {
    //     utc_offset: timeZoneValue,
    //     userFields: []
    // }

    // function onChangeTimeZone() {
    //     const body = {
    //         userNameId: userId,
    //         userNameFields: utfOffset
    //     }
    //     requestHelper(MyProfile.changeUserName, body)
    //         .then((data) => {
    //             localStorage.setItem('user', JSON.stringify(data));
    //             setOffset(data.utc_offset)
    //         })
    // }

    // function handleTimeZoneOptionsOpen() {
    //     if (isTimeZoneOptionsOpen) {
    //         setTimeZoneOptionsOpen(false);
    //     } else {
    //         setTimeZoneOptionsOpen(true);
    //     }
    // }

    return (
        <div>
            <footer className="footer">
                <div className="footer__items _container">
                    <div className={'items__block-logo'}>
                        <div><img alt={'logo'} src={logo_footer} /></div>
                        <span className={'block-logo__copy'}>©2019-2022.Система разработана Центром технологий распределенных реестров СПбГУ.<p>Все права защищены.</p></span>
                    </div>
                    <div className={'items__block-map-site'}>
                        <h3>Карта сайта</h3>
                        <Link to={'/'}><span>Главная</span></Link>
                        <Link to={'/votes-page'}><span>Голосование</span></Link>
                        <Link to={'/my-profile'}><span>Мой профиль</span></Link>
                    </div>
                    {/* <div className={'items__block-settings'}>
                        <h3>Настройки</h3>
                        <span>Язык: Русский </span>
                        <span>Размер шрифта:<select><option>Стандартный</option></select></span>
                        <span className={'block-settings__time-zone'}>Часовой пояс:
                            <div className="time-zone__time-zone-select-container" onClick={handleTimeZoneOptionsOpen}>
                                <p className="time-zone__time-zone-select-value">{timeZoneLocation.slice(0, 8)}</p>
                                <img className="time-zone__time-zone-select-arrow" src={optionRow} alt="Стрелочка открытия меню" />
                                {isTimeZoneOptionsOpen && (
                                    <div className="time-zone__time-zone-options-container">
                                        {timeZone.map((location, index) => (
                                            <p className="time-zone__time-zone-option" key={index} onClick={() => { onSelectTimeZoneClick(location) }}>{location.LABEL}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </span>
                    </div> */}
                    <div className={'items__block-support'}>
                        <h3>Поддержка</h3>
                        <span><a href={'https://dltc.spbu.ru/confidentiality'} target="_blank" rel="noopener noreferrer">Политика конфидициальности</a></span>
                        <a href="mailto:support@dltc.spbu.ru">support@dltc.spbu.ru</a>
                    </div>
                </div>
                <span className={'items__block-logo_mobile-position'}>©2019-2022.Система разработана Центром технологий распределенных реестров СПбГУ.<p>Все права защищены.</p></span>
            </footer>
        </div>
    )
}

export default Footer;
