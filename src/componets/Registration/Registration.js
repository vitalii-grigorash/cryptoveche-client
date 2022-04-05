import React from "react";
import './Registration.css';
import logo from "../../img/Auth_logo_crypto_veche.svg";
import bg_image1 from "../../img/Auth_img_1.svg";
import bg_image2 from "../../img/Auth_img_2.svg";
import bg_image3 from "../../img/Auth_img_3.svg";
import bg_image4 from "../../img/Auth_img_4.svg";
import bg_image_mobile from "../../img/Auth_img_mobile.svg";

const Registration = () => {

    return (
        <div className={'wrapper-reg'}>
            <div className={'container-reg'}>
                <div className={'reg-block'}>
                    <div className={'reg-block-logotype'}>
                        <img alt={''} className={'auth-image_1'} src={bg_image1}/>
                        <img alt={''} className={'auth-image_2'} src={bg_image2}/>
                        <img alt={''} className={'auth-image_3'} src={bg_image3}/>
                        <img alt={''} className={'auth-image_4'} src={bg_image1}/>
                        <img alt={''} className={'auth-image_5'} src={bg_image4}/>
                        <img alt={''} className={'auth-image_6'} src={bg_image3}/>
                        <img alt={''} className={'auth-image-mobile'} src={bg_image_mobile}/>
                        <div className={'reg-block-logotype__logo'}>
                            <img src={logo} alt="Логотип"/>
                        </div>
                        <div className={'reg-block-logotype__title'}>
                            Система электронных голосований
                        </div>
                        <div className={'reg-block-logotype__button'}><
                            span>Уже есть аккаунт?</span>
                            <button>Войти</button>
                        </div>

                    </div>
                    <div className={'reg-block__reg-form'}>
                        <div className={'reg-form__title'}>
                            <h3>Регистрация</h3>
                            <div><span>РУС</span><a href={''}>ENG</a></div>
                        </div>
                        <div className={'reg-form__username'}>
                            <div className={'box-1'}>
                                <span>Фамилия</span>
                                <input type={"text"}/>
                            </div>
                            <div className={'box-2'}>
                                <span>Имя</span>
                                <input type={"text"}/>
                            </div>
                            <div className={'box-3'}>
                                <span>Отчество</span>
                                <input type={"text"}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration;