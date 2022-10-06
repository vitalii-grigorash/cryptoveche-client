import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AuthorizationForgetPassword.css';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import logo from "../../img/Auth_logo_crypto_veche.svg";
import row_link from "../../img/Registration_row_icon.svg";
import AuthorizationForgetPasswordModal from "../AuthorizationForgetPasswordModal/AuthorizationForgetPasswordModal";
import * as Auth from '../../Api/Auth';
import { Validation } from '../../utils/Validation';

const AuthorizationForgetPassword = () => {

    const email = Validation();

    const [modalActive, setModalActive] = useState(false);
    const [hideBlock, setHideBlock] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    function onSendEmailClick() {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email.value) === false) {
            setEmailErrorMessage('Введите корректный e-mail');
        } else {
            Auth.sendEmailForgetPassword(email.value)
                .then(() => {
                    setModalActive(true)
                    setEmailErrorMessage('');
                })
                .catch((err) => {
                    throw new Error(err.message);
                })
        }
    }

    const onSendEmailMobileClick = () => {
        const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email.value) === false) {
            setEmailErrorMessage('Введите корректный e-mail');
        } else {
            Auth.sendEmailForgetPassword(email.value)
                .then(() => {
                    setModalActive(true);
                    setHideBlock(true);
                    setEmailErrorMessage('');
                })
                .catch((err) => {
                    throw new Error(err.message);
                })
        }
    }

    return (
        <div className={'wrapper-auth'}>
            <div className={'container-auth'}>
                <div className={'main-block _modificator-main-block__height'}>
                    <div className={hideBlock ? 'main-block__auth _modificator-main-block__auth-padding active' : 'main-block__auth _modificator-main-block__auth-padding'}>
                        <Link to={'/auth'}><img alt={'стрелочка ссылка'} className={'auth__link-row-icon'} src={row_link} /></Link>
                        <div className={'auth__title _modificator-auth__title-padding-left'}>
                            <h3>Забыли пароль?</h3>
                            <div><span>РУС</span><span>ENG</span></div>
                        </div>
                        <span className={'auth__description'}>Пожалуйста, укажите e-mail, который Вы использовали для входа в личный кабинет, и мы пришлем Вам ссылку для смены пароля.</span>
                        <div className={'auth__form'}>
                            <div className={'form__e-mail'}>
                                <input
                                    type="email"
                                    id="register-email-input"
                                    name="emailRegister"
                                    placeholder='user@user.com'
                                    minLength="5"
                                    maxLength="45"
                                    value={email.value}
                                    onChange={email.onChange}
                                />
                                <span className="form__e-mail-error">{emailErrorMessage}</span>
                            </div>
                        </div>
                        <div className={'auth__button'}>
                            <button type='button' onClick={onSendEmailClick}>Отправить</button>
                        </div>
                        <div className={'auth__button-mobile'}>
                            <button className={'button-ready-mobile'} type={'submit'} onClick={onSendEmailMobileClick}>Готово</button>
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
                        <div className={'reg__title _modificator-reg__title-top'}>
                            Система электронных голосований
                        </div>
                    </div>
                </div>
            </div>
            <AuthorizationForgetPasswordModal active={modalActive} />
        </div>
    )
}

export default AuthorizationForgetPassword;
