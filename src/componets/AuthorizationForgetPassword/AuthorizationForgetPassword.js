import React from "react";
import './AuthorizationForgetPassword.css';
import bg_image1 from "../../img/Auth_img_1.svg";
import bg_image2 from "../../img/Auth_img_2.svg";
import bg_image3 from "../../img/Auth_img_3.svg";
import bg_image4 from "../../img/Auth_img_4.svg";
import bg_image_mobile from "../../img/Auth_img_mobile.svg";
import logo from "../../img/Auth_logo_crypto_veche.svg";
import row_link from "../../img/Registration_row_icon.svg";



const AuthorizationForgetPassword = () => {

    return (
        <div className={'wrapper-auth'}>
            <div className={'container-auth'}>
                <div className={'main-block'}>
                    <div className={'main-block__auth __modificator-main-block__auth-padding'}>
                        <a href={'row'}><img alt={'стрелочка ссылка'} className={'auth__link-row-icon'} src={row_link}/></a>
                        <div className={'auth__title __modificator-auth__title-padding-left'}>
                            <h3>Забыли пароль?</h3>
                            <div><span>РУС</span><a href={'en'}>ENG</a></div>
                        </div>
                        <span className={'auth__description'}>Пожалуйста, укажите e-mail, который Вы использовали для входа в личный кабинет, и мы пришлем Вам ссылку для смены пароля</span>
                        <div className={'auth__form'}>
                            <div className={'form__e-mail'}>
                                <input placeholder={'E-mail'}  type={"text"}/>
                            </div>
                        </div>
                        <div className={'auth__button'}>
                            <button type={'submit'}>Отправить</button>
                        </div>
                    </div>
                    <div className={'main-block__reg __modificator-main-block__reg-padding '}>
                        <img alt={''} className={'auth-image_1'} src={bg_image1}/>
                        <img alt={''} className={'auth-image_2'} src={bg_image2}/>
                        <img alt={''} className={'auth-image_3'} src={bg_image3}/>
                        <img alt={''} className={'auth-image_4'} src={bg_image1}/>
                        <img alt={''} className={'auth-image_5'} src={bg_image4}/>
                        <img alt={''} className={'auth-image_6'} src={bg_image3}/>
                        <img alt={''} className={'auth-image-mobile'} src={bg_image_mobile}/>
                        <div className={'reg__logo __modificator-reg__logo-padding-bottom'}>
                            <img src={logo} alt="Логотип"/>
                        </div>
                        <div className={'reg__title __modificator-reg__title-top'}>
                            Система электронных голосований
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}

export default AuthorizationForgetPassword;