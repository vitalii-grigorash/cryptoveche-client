import React, {useState} from "react";
import './RegistrationSecondPageMobile.css';
import bg_image1 from "../../../img/Auth_img_1.svg";
import bg_image2 from "../../../img/Auth_img_2.svg";
import bg_image3 from "../../../img/Auth_img_3.svg";
import bg_image4 from "../../../img/Auth_img_4.svg";
import bg_image_mobile from "../../../img/Auth_img_mobile.svg";
import logo from "../../../img/Auth_logo_crypto_veche.svg";
import red_star_icon from "../../../img/Registration_red_start_icon.svg";
import show_pass_icon from "../../../img/Auth_show_pass_icon.svg";
import row_icon_title from '../../../img/Registration_row_icon.svg';

const RegistrationSecondPageMobile = () => {


    const [email, setEmail] = useState('')
    const [passReg, setPassReg] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassReg, setErrorPassReg] = useState('')
    const [changeTypePassFirst, setChangeTypePassFirst] = useState('password');
    const [changeTypePassSecond, setChangeTypePassSecond] = useState('password');
    const [changeBorderInputEmail, setChangeBorderInputEmail] = useState('_input-border-black-reg-page')
    const [changeBorderInputPass, setChangeBorderInputPass] = useState('_input-border-black-reg-page')


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


    const inputHandlerRegPage = (e) => {

        setEmail(e.target.value)
        setPassReg(e.target.value)
        setRepeatPass(e.target.value)

        if (email === '') {
            setErrorEmail('Неверный формат почты');
            setChangeBorderInputEmail('_input-border-red');

        } if (passReg !== repeatPass) {
            setErrorPassReg('Пароли не совпадают');
            setChangeBorderInputPass('_input-border-red');
        }
    }

    return (

        <div className={'wrapper-reg'}>
            <div className={'container-reg __reg-block-hidden'}>
                <div className={'reg-block'}>
                    <div className={'reg-block-logotype __modificator-reg-block-logotype-height'}>
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
                        <div className={'reg-block-logotype__button'}>
                            <span>Уже есть аккаунт?</span>
                            <button>Войти</button>
                        </div>
                    </div>
                    <div className={'reg-block__reg-form'}>
                        <div className={'reg-form__title'}>
                            <a href={'row'}><img alt={'стрелочка ссылка'} className={'reg-form__title-row-icon'} src={row_icon_title}/></a>
                            <h3 className={'__modificator-reg-form__title-padding-right'}>Регистрация</h3>
                            <div><span>РУС</span><a href={'en'}>ENG</a></div>
                        </div>
                        <div className={'reg-form__e-mail'}>
                            <span>E-mail<img alt={'иконка звездочка'} className={'reg-form__e-mail__red-star-icon'} src={red_star_icon}/></span>
                            <input className={changeBorderInputEmail} type={"text"} placeholder={'user@user.com'} onChange={e => {setEmail(e.target.value)}}/>
                            <div className={'reg-block__error-message'}>{errorEmail}</div>
                        </div>
                        <div className={'reg-form__password'}>
                            <div className={'password-form'}>
                                <img alt={'иконка показать пароль'} className={'reg-form__show-pass-icon'} src={show_pass_icon} onClick={showHiddenPassFirstField}/>
                                <span>Придумайте пароль<img alt={'иконка звездочка'} className={'reg-form__password__red-star-icon'} src={red_star_icon}/></span>
                                <input className={changeBorderInputPass} type={changeTypePassFirst} onChange={e => {setPassReg(e.target.value)}}/>
                            </div>
                            <div className={'password-form'}>
                                <img alt={'иконка скрыть пароль'} className={'reg-form__show-pass-icon'} src={show_pass_icon} onClick={showHiddenPassSecondField}/>
                                <span>Повторите пароль<img alt={'иконка звездочка'} className={'reg-form__password__red-star-icon-repeat-pass'} src={red_star_icon}/></span>
                                <input className={changeBorderInputPass} type={changeTypePassSecond} onChange={e => {setRepeatPass(e.target.value)}}/>
                            </div>
                            <div className={'reg-block__error-message __modificator-reg-block__error-message-mobile '}>{errorPassReg}</div>
                        </div>
                        <div className={'reg-form__checkbox'}>
                            <label className={'checkbox_container'}>
                                <input type="checkbox" value="yes"/>
                                <span className={'checkmark'}/>
                            </label>
                            <span>Ознакомлен с <a href={'politic'}>Политикой</a>. Подтверждаю принадлежность мне указанного электронного адреса.</span>
                        </div>
                        <div className={'reg-form__button'}>
                            <span>Шаг 2 из 2, почти готово</span>
                            <button type={'button'} onClick={e => inputHandlerRegPage(e)}>Зарегистрироваться</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RegistrationSecondPageMobile;