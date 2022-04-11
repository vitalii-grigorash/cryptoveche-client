import React, {useState} from "react";
import '../AuthorizationSetPassword/AuthorizationSetPassword.css';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from "../../img/Auth_img3.svg";
import bg_image4 from "../../img/Auth_img4.svg";
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import logo from "../../img/Auth_logo_crypto_veche.svg";
import show_pass_icon from "../../img/Auth_show_pass_icon.svg";

const AuthorizationSetPassword = () => {

    const [changeTypePassFirst, setChangeTypePassFirst] = useState('password');
    const [changeTypePassSecond, setChangeTypePassSecond] = useState('password');



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



    return (
        <div className={'wrapper-auth'}>
            <div className={'container-auth'}>
                <div className={'main-block _modificator-main-block__height'}>
                    <div className={'main-block__auth _modificator-main-block__auth-set-pass-padding'}>
                        <div className={'auth__title  _modificator-auth__title-padding-bottom'}>
                            <h3>Установка пароля</h3>
                            <div><span>РУС</span><a href={'en'}>ENG</a></div>
                        </div>
                        <div className={'auth__form'}>
                            <div className={'form__password'}>
                                <img alt={'иконка показать пароль'} className={'form__password__show-pass-icon'} src={show_pass_icon} onClick={showHiddenPassFirstField}/>
                                <span>Новый пароль</span>
                                <input placeholder={'12345678'} type={changeTypePassFirst} />
                            </div>
                            <div className={'form__password'}>
                                <img alt={'иконка показать пароль'} className={'form__password__show-pass-icon'} src={show_pass_icon} onClick={showHiddenPassSecondField}/>
                                <span>Повторите новый пароль</span>
                                <input placeholder={'12345678'} type={changeTypePassSecond}/>
                            </div>
                        </div>
                        <div className={'auth__button-save'}>
                            <button type={'submit'}>Сохранить</button>
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
                        <div className={'reg__title _modificator-reg__title-set-pass-top'}>
                            Система электронных голосований
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default AuthorizationSetPassword;