import React, { useState } from "react";
import './Registration.css';
import logo from "../../img/Auth_logo_crypto_veche.svg";
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import show_pass_icon from "../../img/Auth_show_pass_icon.svg";
import hidden_pass_icon from '../../img/Auth_hidden_pass.svg';
import red_star_icon from '../../img/Registration_red_start_icon.svg';
import RegistrationModal from "./RegistrationModal/RegistrationModal";
import { useNavigate } from "react-router-dom";


const Registration = () => {

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [passReg, setPassReg] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassReg, setErrorPassReg] = useState('')
    const [changeTypePass, setChangeTypePass] = useState('password');
    const [changeBorderInputUsername, setChangeBorderInputUsername] = useState('_input-border-black-reg-page')
    const [changeBorderInputEmail, setChangeBorderInputEmail] = useState('_input-border-black-reg-page')
    const [changeBorderInputPass, setChangeBorderInputPass] = useState('_input-border-black-reg-page')
    const [modalActive, setModalActive] = useState(false);

    const linkRegSecondPage = useNavigate();
    const linkButtonBackPage = useNavigate();

    const showHiddenPass = () => {
        if (changeTypePass === 'password') {
            setChangeTypePass('text')
        } else {
            setChangeTypePass('password')
        }
    }


    const completeProcessRegistration = () => {

        if ((surname === '' || name === '' || secondName === '')) {
            setErrorUserName('Поля “Имя” и “Фамилия” заполнены некорректно');
            setChangeBorderInputUsername('_input-border-red');
        } else if (email === '') {
            setErrorEmail('Неверный формат почты');
            setChangeBorderInputEmail('_input-border-red');
        } else if (passReg !== repeatPass || passReg === '' || repeatPass === '') {
            setErrorPassReg('Пароли не совпадают');
            setChangeBorderInputPass('_input-border-red');
        } else {
            setModalActive(true)
        }
    }

    return (
        <div className={'wrapper-reg'}>
            <div className={'container-reg'}>
                <div className={'reg-block'}>
                    <div className={'reg-block-logotype'}>
                        <img alt={'изображение'} className={'auth-image_4'} src={bg_image1} />
                        <img alt={'изображение'} className={'auth-image_5'} src={bg_image2} />
                        <div className={'auth-image_1'}>
                            <img alt={'изображение'} src={bg_image3} />
                        </div>
                        <div className={'auth-image_3'}>
                            <img alt={'изображение'} src={bg_image4} />
                        </div>
                        <img alt={'изображение'} className={'auth-image-mobile'} src={bg_image_mobile} />
                        <div className={'reg-block-logotype__logo _modificator-reg-block-logotype__logo-top'}>
                            <img src={logo} alt="Логотип" />
                        </div>
                        <div className={'reg-block-logotype__title'}>
                            Система электронных голосований
                        </div>
                        <div className={'reg-block-logotype__button'}>
                            <span>Уже есть аккаунт?</span>
                            <button onClick={() => linkButtonBackPage('/auth')}>Войти</button>
                        </div>
                    </div>
                    <div className={'reg-block__reg-form'}>
                        <div className={'reg-form__title'}>
                            <h3>Регистрация</h3>
                            <div><span>РУС</span><span>ENG</span></div>
                        </div>
                        <div className={'reg-form__username'}>
                            <div className={'username-forms'}>
                                <span>Фамилия
                                    <img alt={'иконка звездочка'} className={'username-forms__red-star-icon__family'} src={red_star_icon} />
                                </span>
                                <input className={changeBorderInputUsername} onChange={e => { setSurname(e.target.value) }} type={"text"} />
                            </div>
                            <div className={'username-forms'}>
                                <span>Имя
                                    <img alt={'иконка звездочка'} className={'username-forms__red-star-icon__name'} src={red_star_icon} />
                                </span>
                                <input className={changeBorderInputUsername} onChange={e => { setName(e.target.value) }} type={"text"} />
                            </div>
                            <div className={'username-forms'}>
                                <span>Отчество</span>
                                <input className={changeBorderInputUsername} onChange={e => { setSecondName(e.target.value) }} type={"text"} />
                            </div>
                            <div className={'reg-block__error-message'}>{errorUserName}</div>
                        </div>
                        <div className={'reg-form__e-mail _reg-block-show'}>
                            <span>E-mail
                                <img alt={'иконка звездочка'} className={'reg-form__e-mail__red-star-icon'} src={red_star_icon} />
                            </span>
                            <input className={changeBorderInputEmail} type={"text"} placeholder={'user@user.com'} onChange={e => { setEmail(e.target.value) }} />
                            <div className={'reg-block__error-message'}>{errorEmail}</div>
                        </div>
                        <div className={'reg-form__password _reg-block-show'}>
                            <div className={'password-form'}>
                                <img alt={'иконка показать пароль'} className={'reg-form__show-pass-icon'} src={show_pass_icon} onClick={showHiddenPass} />
                                <span>Придумайте пароль
                                    <img alt={'иконка звездочка'} className={'reg-form__password__red-star-icon'} src={red_star_icon} />
                                </span>
                                <input className={changeBorderInputPass} type={changeTypePass} onChange={e => { setPassReg(e.target.value) }} />
                            </div>
                            <div className={'password-form'}>
                                <img alt={'иконка скрыть пароль'} className={'reg-form__hidden-pass-icon'} src={hidden_pass_icon} />
                                <span>Повторите пароль
                                    <img alt={'иконка звездочка'} className={'reg-form__password__red-star-icon-repeat-pass'} src={red_star_icon} />
                                </span>
                                <input className={changeBorderInputPass} type={'text'} onChange={e => { setRepeatPass(e.target.value) }} />
                            </div>
                            <div className={'reg-block__error-message '}>{errorPassReg}</div>
                        </div>
                        <div className={'reg-form__time-zone-main-container'}>
                            <p className="reg-form__time-zone-heading">Выберите часовой пояс <span className="reg-form__time-zone-heading_span">*</span></p>
                            <div className="reg-form__time-zone-select-container" onClick={handleTimeZoneOptionsOpen}>
                                <p className="reg-form__time-zone-select-value">{timeZoneLocation}</p>
                                <img className="reg-form__time-zone-select-arrow" src={optionRow} alt="Стрелочка открытия меню" />
                                {isTimeZoneOptionsOpen && (
                                    <div className="reg-form__time-zone-options-container">
                                        {timeZone.map((location, index) => (
                                            <p className="reg-form__time-zone-option" key={index} onClick={() => onSelectTimeZoneClick(location)}>{location.LABEL}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={'reg-form__checkbox _reg-block-show'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes" />
                                <span className={'checkmark'} />
                            </label>
                            <span>Ознакомлен с <a href={'politic'}>Политикой</a>.Подтверждаю принадлежность мне указанного электронного адреса.</span>
                        </div>
                        <div className={'reg-form__button _reg-block-show'}>
                            <button type={'button'} onClick={e => { completeProcessRegistration(e) }}>Зарегистрироваться</button>
                        </div>
                    </div>
                    {/*-Кнопка для мобильной версии-*/}
                    <div className={'reg-block__button-next-page'}>
                        <span>Шаг 1 из 2</span>
                        <button type={"submit"} onClick={() => linkRegSecondPage('/reg-second-page')}>Продолжить</button>
                    </div>
                </div>
            </div>
            <RegistrationModal active={modalActive} />
        </div>
    )
}

export default Registration;