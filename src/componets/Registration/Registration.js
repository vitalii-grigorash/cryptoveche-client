import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Registration.css';
import logo from "../../img/Auth_logo_crypto_veche.svg";
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import show_pass_icon from "../../img/Auth_show_pass_icon.svg";
import hidden_pass_icon from '../../img/Auth_hidden_pass.svg';
import RegistrationModal from "./RegistrationModal/RegistrationModal";
import { useNavigate } from "react-router-dom";
import optionRow from '../../img/INPUT-ICONS-24-ARROW.svg';
import timeZone from '../../utils/TimeZoneData/TimeZoneRu.json';
import { Validation } from '../../utils/Validation';
import row_icon_title from "../../img/Registration_row_icon.svg";
import RegistrationPasswordRequireModal from "./RegistrationPasswordRequireModal/RegistrationPasswordRequireModal";
import * as Auth from '../../Api/Auth';

const Registration = (props) => {

    const {
        handleRegister,
        handlePolicyAccept,
        isPolicyAccept,
        modalActive,
        emailErrorMessage,
        changeBorderInputEmail,
        hideRegisterModal,
        hideRegForm,
        hideRegEmailErrors,
        preLoaderReg,
        config
    } = props;

    const { pathname } = useLocation();

    const firstName = Validation();
    const secondName = Validation();
    const lastName = Validation();
    const email = Validation();
    const password = Validation();
    const repeatPassword = Validation();

    const [errorPassReg, setErrorPassReg] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [changeTypePass, setChangeTypePass] = useState('password');
    const [changeTypeRepeatPass, setChangeTypeRepeatPass] = useState('password');
    const [changeBorderInputLastName, setChangeBorderInputLastName] = useState('_input-border-black-reg-page');
    const [changeBorderInputFirstName, setChangeBorderInputFirstName] = useState('_input-border-black-reg-page');
    const [changeBorderInputPass, setChangeBorderInputPass] = useState('_input-border-black-reg-page');
    const [timeZoneLocation, setTimeZoneLocation] = useState('(UTC+3) Россия - Москва - московское время');
    const [timeZoneValue, setTimeZoneValue] = useState(3);
    const [isTimeZoneOptionsOpen, setTimeZoneOptionsOpen] = useState(false);
    const [showHideElem, setShowHideElem] = useState(false)
    const [passwordRequireModalActive, setPasswordRequireModalActive] = useState(false);
    const [firsPageError, setFirsPageError] = useState('');

    const [token, setToken] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFields, setUserFields] = useState([]);
    const [isRegistrationByToken, setRegistrationByToken] = useState(false);

    const linkButtonBackPage = useNavigate();

    useEffect(() => {
        const url = window.location.href.split('/');
        if (url[4]) {
            Auth.getUserByToken(url[4])
                .then((user) => {
                    setToken(user.token);
                    setUserFields(user.fields);
                    setUserEmail(user.email);
                    setRegistrationByToken(true);
                })
                .catch((err) => {
                    throw new Error(err.message);
                })
        } else {
            setToken('');
            setUserFields([]);
            setUserEmail('');
            setRegistrationByToken(false);
        }
    }, [pathname]);

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
    const showHiddenPass = () => {
        if (changeTypePass === 'password') {
            setChangeTypePass('text')
        } else {
            setChangeTypePass('password')
        }
    }

    const showHiddenRepeatPass = () => {
        if (changeTypeRepeatPass === 'password') {
            setChangeTypeRepeatPass('text')
        } else {
            setChangeTypeRepeatPass('password')
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const nameRegExp = /^([а-яё]+|[a-z]+)$/i
        const passRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*,.:;+<>{}?\\[\]/_-]{8,64}$/
        if (lastName.value === '') {
            setChangeBorderInputLastName('_input-border-red');
            setLastNameError('Необходимо заполнить');
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            setErrorPassReg('');
            setChangeBorderInputPass('_input-border-black-reg-page');
            setPasswordRequireModalActive(false);
            hideRegEmailErrors();
            setFirsPageError('Ошибки на первой странице');
        } else if (nameRegExp.test(lastName.value) === false) {
            setChangeBorderInputLastName('_input-border-red');
            setLastNameError('Неверный формат');
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            setErrorPassReg('');
            setChangeBorderInputPass('_input-border-black-reg-page');
            setPasswordRequireModalActive(false);
            hideRegEmailErrors();
            setFirsPageError('Ошибки на первой странице');
        } else if (firstName.value === '') {
            setChangeBorderInputFirstName('_input-border-red');
            setFirstNameError('Необходимо заполнить');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setErrorPassReg('');
            setChangeBorderInputPass('_input-border-black-reg-page');
            setPasswordRequireModalActive(false);
            hideRegEmailErrors();
            setFirsPageError('Ошибки на первой странице');
        } else if (nameRegExp.test(firstName.value) === false) {
            setChangeBorderInputFirstName('_input-border-red');
            setFirstNameError('Неверный формат');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setErrorPassReg('');
            setChangeBorderInputPass('_input-border-black-reg-page');
            setPasswordRequireModalActive(false);
            hideRegEmailErrors();
            setFirsPageError('Ошибки на первой странице');
        } else if (password.value === '' || repeatPassword.value === '') {
            setErrorPassReg('Необходимо заполнить все поля');
            setPasswordRequireModalActive(false);
            setChangeBorderInputPass('_input-border-red');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            hideRegEmailErrors();
            setFirsPageError('');
        } else if (password.value !== repeatPassword.value) {
            setErrorPassReg('Пароли не совпадают');
            setPasswordRequireModalActive(false);
            setChangeBorderInputPass('_input-border-red');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            hideRegEmailErrors();
            setFirsPageError('');
        } else if (passRegExp.test(password.value) === false) {
            setPasswordRequireModalActive(true);
            setChangeBorderInputPass('_input-border-red');
            setErrorPassReg('');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            hideRegEmailErrors();
            setFirsPageError('');
        } else {
            if (isRegistrationByToken) {
                handleRegister({
                    password: password.value,
                    first_name: firstName.value,
                    second_name: secondName.value,
                    last_name: lastName.value,
                    utc_offset: timeZoneValue,
                    userFields: userFields,
                    token: token,
                    isRegistrationByToken: true
                });
            } else {
                handleRegister({
                    email: email.value,
                    password: password.value,
                    first_name: firstName.value,
                    second_name: secondName.value,
                    last_name: lastName.value,
                    utc_offset: timeZoneValue,
                    isRegistrationByToken: false
                });
            }
            setErrorPassReg('');
            setChangeBorderInputPass('_input-border-black-reg-page');
            setPasswordRequireModalActive(false);
            setChangeBorderInputFirstName('_input-border-black-reg-page');
            setFirstNameError('');
            setChangeBorderInputLastName('_input-border-black-reg-page');
            setLastNameError('');
            setFirsPageError('');
        }
    }

    function mobileShowElem() {
        setShowHideElem(true)
    }

    function mobileHideElem() {
        setShowHideElem(false)
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
                        <img alt={'изображение'} className={'auth-image-mobile _modificator-auth-image-mobile-height'} src={bg_image_mobile} />
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
                    <form className={hideRegForm ? 'reg-block__reg-form active' : 'reg-block__reg-form'} onSubmit={handleSubmit}>
                        <div className={'reg-form__title'}>
                            <img onClick={() => { mobileHideElem() }} alt={'стрелочка ссылка'} className={showHideElem ? 'reg-form__title-row-icon active' : 'reg-form__title-row-icon'} src={row_icon_title} />
                            <h3>Регистрация</h3>
                            {/*<div><span>РУС</span><span>ENG</span></div>*/}
                        </div>
                        <div className={showHideElem ? 'reg-form__username active' : 'reg-form__username'}>
                            <div className={'username-forms'}>
                                <span>Фамилия <span className="reg-form__time-zone-heading_span">*</span></span>
                                <input
                                    type="text"
                                    className={changeBorderInputLastName}
                                    name="lastNameRegister"
                                    value={lastName.value}
                                    onChange={lastName.onChange}
                                />
                                <span className="reg-form__input-error">{lastNameError}</span>
                            </div>
                            <div className={'username-forms'}>
                                <span>Имя <span className="reg-form__time-zone-heading_span">*</span></span>
                                <input
                                    type="text"
                                    className={changeBorderInputFirstName}
                                    name="firstNameRegister"
                                    value={firstName.value}
                                    onChange={firstName.onChange}
                                />
                                <span className="reg-form__input-error">{firstNameError}</span>
                            </div>
                            <div className={'username-forms'}>
                                <span>Отчество</span>
                                <input
                                    type="text"
                                    className='_input-border-black-reg-page'
                                    name="secondNameRegister"
                                    value={secondName.value}
                                    onChange={secondName.onChange}
                                />
                            </div>
                        </div>
                        <div className={showHideElem ? 'reg-form__e-mail active' : 'reg-form__e-mail _reg-block-show'}>
                            <span>E-mail <span className="reg-form__time-zone-heading_span">*</span></span>
                            {isRegistrationByToken ? (
                                <input
                                    type="email"
                                    className={changeBorderInputEmail}
                                    value={userEmail}
                                    readOnly
                                />
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        className={changeBorderInputEmail}
                                        id="register-email-input"
                                        name="emailRegister"
                                        placeholder='user@user.com'
                                        minLength="5"
                                        maxLength="45"
                                        required
                                        value={email.value}
                                        onChange={email.onChange}
                                    />
                                    <div id="register-email-input-error" className='reg-block__error-message'>{emailErrorMessage}</div>
                                </>
                            )}
                        </div>
                        <div className={showHideElem ? 'reg-form__password active' : 'reg-form__password _reg-block-show'}>
                            <div className={'password-form'}>
                                <img alt={'иконка показать пароль'} className={'reg-form__hidden-pass-icon'} src={changeTypePass === 'password' ? show_pass_icon : hidden_pass_icon} onClick={showHiddenPass} />
                                <span>Придумайте пароль <span className="reg-form__time-zone-heading_span">*</span></span>
                                <input
                                    type={changeTypePass}
                                    className={changeBorderInputPass}
                                    name="passwordRegister"
                                    value={password.value}
                                    onChange={password.onChange}
                                    autoComplete="new-password"
                                />
                            </div>
                            <div className={'password-form'}>
                                <img alt={'иконка скрыть пароль'} className={'reg-form__hidden-pass-icon'} src={changeTypeRepeatPass === 'password' ? show_pass_icon : hidden_pass_icon} onClick={showHiddenRepeatPass} />
                                <span>Повторите пароль <span className="reg-form__time-zone-heading_span">*</span></span>
                                <input
                                    type={changeTypeRepeatPass}
                                    className={changeBorderInputPass}
                                    name="repeatPasswordRegister"
                                    value={repeatPassword.value}
                                    onChange={repeatPassword.onChange}
                                />
                            </div>
                            <div className={'reg-block__error-message'}>{errorPassReg}</div>
                            <RegistrationPasswordRequireModal active={passwordRequireModalActive} setActive={setPasswordRequireModalActive} />
                        </div>
                        <div className={showHideElem ? 'reg-form__time-zone-main-container active' : 'reg-form__time-zone-main-container'}>
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
                        <div className={showHideElem ? 'reg-form__checkbox active' : 'reg-form__checkbox _reg-block-show'}>
                            <label className={'checkbox_container'}>
                                <input
                                    type="checkbox"
                                    checked={isPolicyAccept}
                                    onChange={handlePolicyAccept}
                                />
                                <span className={'checkmark'} />
                            </label>
                            <span>Ознакомлен с <a href={config.confidentiality} target="_blank" rel="noreferrer">Политикой</a>. Подтверждаю принадлежность мне указанного электронного адреса.</span>
                        </div>
                        <div className={showHideElem ? 'reg-form__button active' : 'reg-form__button _reg-block-show'}>
                            <span className={'_reg-block-hidden'}>Шаг 2 из 2, почти готово</span>
                            <button className={preLoaderReg ? 'reg-form__button-btn-reg active' : 'reg-form__button-btn-reg'} type={'submit'}>{preLoaderReg ? 'Загрузка...' : 'Зарегистрироваться'}</button>
                            <p className='reg-form__validate-error'>{firsPageError}</p>
                        </div>
                    </form>
                    {/*-Кнопка для мобильной версии-*/}
                    <div className={showHideElem ? 'reg-block__button-next-page active' : 'reg-block__button-next-page'}>
                        <span>Шаг 1 из 2</span>
                        <button type={"button"} onClick={e => mobileShowElem(e)}>Продолжить</button>
                    </div>
                </div>
            </div>
            <RegistrationModal
                active={modalActive}
                hideRegisterModal={hideRegisterModal}
            />
        </div>
    )
}

export default Registration;
