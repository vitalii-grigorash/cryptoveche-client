import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import './Authorization.css';
import logo from '../../img/Auth_logo_crypto_veche.svg';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from '../../img/Auth_img_mobile.svg';
import show_pass_icon from '../../img/Auth_show_pass_icon.svg';
import { useNavigate } from "react-router-dom";
import { Validation } from '../../utils/Validation';

const Authorization = (props) => {

    const {
        handleLogin,
        authError
    } = props;

    const email = Validation();
    const password = Validation();
    const [changeTypePass, setChangeTypePass] = useState('password');
    const linkButtonRegPage = useNavigate();
    const refBorderRedLogin = useRef();
    const refBorderRedPass = useRef();

    const showHiddenPass = () => {
        if (changeTypePass === 'password') {
            setChangeTypePass('text')
        } else {
            setChangeTypePass('password')
        }
    }

    const inputHandler = () => {
        if (email.value === '' || password.value === '') {
            refBorderRedLogin.current.style.border = '1px solid red';
            refBorderRedPass.current.style.border = '1px solid red';
        }
        handleLogin(email.value, password.value);
    }

    return (
        <div className={'wrapper-auth'}>
            <div className={'container-auth'}>
                <div className={'main-block'}>
                    <div className={'main-block__auth'}>
                        <div className={'auth__title'}>
                            <h3>Авторизация</h3>
                            <div><span>РУС</span><a href="/#">ENG</a></div>
                        </div>
                        <div className={'auth__form'}>
                            <div className={'form__login'}>
                                <span>Имя пользователя</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={'admin@admin.com'}
                                    required
                                    value={email.value}
                                    onChange={email.onChange}
                                    ref={refBorderRedLogin}
                                />
                            </div>
                            <div className={'form__pass'}>
                                <span>Пароль</span>
                                <img alt={'иконка'} className={'form__pass-show-pass-icon'} src={show_pass_icon} onClick={showHiddenPass} />
                                <input
                                    type={changeTypePass}
                                    name="password"
                                    placeholder='Введите пароль'
                                    required
                                    value={password.value}
                                    onChange={password.onChange}
                                    ref={refBorderRedPass}
                                />
                                <div className={'form__error'}>{authError}</div>
                            </div>
                            <div className={'form__checkbox'}>
                                <span><Link to={'/forget-password'}>Забыли пароль?</Link></span>
                                <label className={'checkbox_container'}>
                                    <input type="checkbox" value="yes" />Запомнить меня
                                    <span className={'checkmark'} />
                                </label>
                            </div>
                            <div className={'form__button'}>
                                <button onClick={inputHandler} type={'button'}>Войти</button>
                                <span><a href='https://esia.gosuslugi.ru/login/' target={'_blank'} rel="noreferrer">Войти через ЕСИА</a></span>
                            </div>
                        </div>
                    </div>
                    <div className={'main-block__reg'}>
                        <img alt={'изображение'} className={'auth-image_4'} src={bg_image1} />
                        <img alt={'изображение'} className={'auth-image_5'} src={bg_image2} />
                        <div className={'auth-image_1'}>
                            <img alt={'изображение'} src={bg_image3} />
                        </div>
                        <div className={'auth-image_3'}>
                            <img alt={'изображение'} src={bg_image4} />
                        </div>
                        <img alt={'изображение'} className={'auth-image-mobile'} src={bg_image_mobile} />
                        <div className={'reg__logo'}>
                            <img src={logo} alt="Логотип" />
                        </div>
                        <div className={'reg__title'}>
                            Система электронных голосований
                        </div>
                        <div className={'reg__button'}>
                            <span>Еще нет аккаунта?</span>
                            <button onClick={() => linkButtonRegPage('/reg-page')}>Зарегистрироваться</button>
                        </div>
                    </div>
                    <div className={'main-block__mobile-link-reg'}>
                        <span>Ещё нет аккаунта?</span><Link to={'/reg-page'}>Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Authorization;
