import React, {useState} from "react";
import './AuthorizationForgetPassword.css';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import logo from "../../img/Auth_logo_crypto_veche.svg";
import row_link from "../../img/Registration_row_icon.svg";
import AuthorizationForgetPasswordModal from "../AuthorizationForgetPasswordModal/AuthorizationForgetPasswordModal";



const AuthorizationForgetPassword = () => {

    const [modalActive, setModalActive] = useState(false);
    const [act, setAct] = useState(false);


    const activeModalWindow = () => {
        setModalActive(true)
    }

    const hiddenMainBlock = () => {
               setAct(true)   

    }

    return (
        <div className={'wrapper-auth'}>
            <div className={'container-auth'}>
                <div className={'main-block _modificator-main-block__height'}>
                    <div className={act ? 'main-block__auth _modificator-main-block__auth-padding active' : 'main-block__auth _modificator-main-block__auth-padding'}>
                        <a href={'row'}><img alt={'стрелочка ссылка'} className={'auth__link-row-icon'} src={row_link}/></a>
                        <div className={'auth__title _modificator-auth__title-padding-left'}>
                                <h3>Забыли пароль?</h3>
                            <div><span>РУС</span><a href={'en'}>ENG</a></div>
                            </div>
                            <span className={'auth__description'}>Пожалуйста, укажите e-mail, который Вы использовали для входа в личный кабинет, и мы пришлем Вам ссылку для смены пароля.</span>
                            <div className={'auth__form'}>
                                <div className={'form__e-mail'}>
                                    <input placeholder={'E-mail'} type={"text"}/>
                                </div>
                                </div>
                                <div className={'auth__button'}>
                                    <button type={'submit'} onClick={() => {activeModalWindow()}}>Отправить</button>
                                </div>
                                <div className={'auth__button-mobile'}>
                                    <button className={'button-ready-mobile'} type={'submit'} onClick={() => {activeModalWindow()}}>Готово</button>
                                </div>
                            </div>
                            <div className={'main-block__reg _modificator-main-block__reg-padding '}>
                                    <img alt={'изображение'} className={'auth-image_4'} src={bg_image1}/>
                                    <img alt={'изображение'} className={'auth-image_5'} src={bg_image2}/>
                                    <div className={'auth-image_1'}>
                                    <img alt={'изображение'} src={bg_image3}/>
                                    </div>
                                    <div className={'auth-image_3'}>
                                    <img alt={'изображение'} src={bg_image4}/>
                                    </div>
                                    <img alt={'изображение'} className={'auth-image-mobile _modificator-auth-image-mobile-height'} src={bg_image_mobile}/>
                                    <div className={'reg__logo _modificator-reg__logo-padding-bottom'}>
                                        <img alt="Логотип" src={logo}/>
                                    </div>
                                    <div className={'reg__title _modificator-reg__title-top'}>
                                        Система электронных голосований
                                    </div>
                            </div>
                      </div>
                </div>
             <AuthorizationForgetPasswordModal active={modalActive}/>
        </div>
    )

}

export default AuthorizationForgetPassword;