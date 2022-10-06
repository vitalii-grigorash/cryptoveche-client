import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../AuthorizationSetPassword/AuthorizationSetPassword.css';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from "../../img/Auth_img3.svg";
import bg_image4 from "../../img/Auth_img4.svg";
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import logo from "../../img/Auth_logo_crypto_veche.svg";
import show_pass_icon from "../../img/Auth_show_pass_icon.svg";
import hidden_pass_icon from '../../img/Auth_hidden_pass.svg';
import * as Auth from '../../Api/Auth';
import AuthorizationSetPasswordModal from "../AuthorizationSetPasswordModal/AuthorizationSetPasswordModal";
import { Validation } from '../../utils/Validation';

const AuthorizationSetPassword = () => {

    const { pathname } = useLocation();
    const password = Validation();
    const repeatPassword = Validation();
    const [modalActive, setModalActive] = useState(false);
    const [changeTypePassFirst, setChangeTypePassFirst] = useState('password');
    const [changeTypePassSecond, setChangeTypePassSecond] = useState('password');
    const [hideBlock, setHideBlock] = useState(false);
    const [token, setToken] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const showHiddenPassFirstField = () => {
        if (changeTypePassFirst === 'password') {
            setChangeTypePassFirst('text')
        } else {
            setChangeTypePassFirst('password')
        }
    }
    const showHiddenPassSecondField = () => {
        if (changeTypePassSecond === 'password') {
            setChangeTypePassSecond('text')
        } else {
            setChangeTypePassSecond('password')
        }
    }
    //-------Функция для получения ширины div и затем передаем результат в функцию setNewPassword, которая уже позволяет скрыть блок div толко в мобильной версии-----//
    const getWidthBlock = (width) => {
        width = document.getElementById('container-auth').clientWidth
        return width;
    }

    useEffect(() => {
        const url = window.location.href.split('/');
        if (url[4]) {
            setToken(`${url[4]}`);
        }
    }, [pathname]);

    function onSaveNewPasswordClick() {
        const passRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*,.:;+<>{}?\\[\]/_-]{8,64}$/
        if (password.value === '' || repeatPassword.value === '') {
            setPasswordError('Необходимо заполнить все поля');
        }
        else if (password.value !== repeatPassword.value) {
            setPasswordError('Пароли не совпадают');
        }
        else if (passRegExp.test(password.value) === false) {
            setPasswordError('Пароль должен содержать от 8 до 64 символов, состоять из латинских букв верхнего, нижнего регистра и цифр');
        } else {
            setPasswordError('');
            Auth.resetUserPassword(token, password.value)
                .then((res) => {
                    if (res.status === 'ok') {
                        setPasswordError('');
                        if (getWidthBlock() < 600) {
                            setHideBlock(true);
                            setModalActive(true);
                        } else {
                            setModalActive(true);
                        }
                    } else {
                        setPasswordError('Что-то пошло не так, повторите попытку позже');
                    }
                })
                .catch((err) => {
                    throw new Error(err.message);
                })
        }
    }

    return (
        <div className={'wrapper-auth'}>
            <div id={'container-auth'} className={'container-auth'}>
                <div className={'main-block _modificator-main-block__height'}>
                    <div className={hideBlock ? 'main-block__auth active _modificator-main-block__auth-set-pass-padding' : 'main-block__auth _modificator-main-block__auth-set-pass-padding'}>
                        <div className={'auth__title  _modificator-auth__title-padding-bottom'}>
                            <h3>Установка пароля</h3>
                            <div><span>РУС</span><span>ENG</span></div>
                        </div>
                        <div className={'auth__form'}>
                            <div className={'form__password'}>
                                <img alt={'иконка показать пароль'} className={'form__password__show-pass-icon'} src={changeTypePassFirst === 'password' ? show_pass_icon : hidden_pass_icon} onClick={showHiddenPassFirstField} />
                                <span>Новый пароль</span>
                                <input
                                    type={changeTypePassFirst}
                                    name="passwordReset"
                                    value={password.value}
                                    onChange={password.onChange}
                                />
                            </div>
                            <div className={'form__password'}>
                                <img alt={'иконка показать пароль'} className={'form__password__show-pass-icon'} src={changeTypePassSecond === 'password' ? show_pass_icon : hidden_pass_icon} onClick={showHiddenPassSecondField} />
                                <span>Повторите новый пароль</span>
                                <input
                                    type={changeTypePassSecond}
                                    name="repeatPasswordReset"
                                    value={repeatPassword.value}
                                    onChange={repeatPassword.onChange}
                                />
                                <p className="form__password-error">{passwordError}</p>
                            </div>
                        </div>
                        <div className={'auth__button-save'}>
                            <button type={'submit'} onClick={onSaveNewPasswordClick}>Сохранить</button>
                        </div>
                    </div>
                    <div className={'main-block__reg _modificator-main-block__reg-padding '}>
                        <img alt={'изображение'} className={'auth-image_4'} src={bg_image1} />
                        <img alt={'изображение'} className={'auth-image_5'} src={bg_image2} />
                        <div className={'auth-image_1'}>
                            <img alt={'изображение'} src={bg_image3} />
                        </div>
                        <div className={'auth-image_3'}>
                            <img alt={'изображение'} src={bg_image4} />
                        </div>
                        <img alt={'изображение'} className={'auth-image-mobile _modificator-auth-image-mobile-height'} src={bg_image_mobile} />
                        <div className={'reg__logo _modificator-reg__logo-padding-bottom'}>
                            <img alt="Логотип" src={logo} />
                        </div>
                        <div className={'reg__title _modificator-reg__title-set-pass-top'}>
                            Система электронных голосований
                        </div>
                    </div>
                </div>
            </div>
            <AuthorizationSetPasswordModal active={modalActive} />
        </div>
    )

}

export default AuthorizationSetPassword;