import React, {useState, useRef} from "react";
import './Authorization.css';
import logo from '../../img/Auth_logo_crypto_veche.svg';
import bg_image1 from "../../img/Auth_img1.svg";
import bg_image2 from "../../img/Auth_img2.svg";
import bg_image3 from '../../img/Auth_img3.svg';
import bg_image4 from '../../img/Auth_img4.svg';
import bg_image_mobile from '../../img/Auth_img_mobile.svg';
import show_pass_icon from '../../img/Auth_show_pass_icon.svg';
import {useNavigate} from "react-router-dom";



const Authorization = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
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


    const inputHandler = (e) => {

        setLogin(e.target.value)
        setPass(e.target.value)

        if (login === '' || pass === '') {
            setError('Неверно введено имя пользователя или пароль')
            refBorderRedLogin.current.style.border = '1px solid red';
            refBorderRedPass.current.style.border = '1px solid red';

        }
    }


 return (
             <div className={'wrapper-auth'}>
                        <div className={'container-auth'}>
                            <div className={'main-block'}>
                                <div className={'main-block__auth'}>
                                    <div className={'auth__title'}>
                                        <h3>Авторизация</h3>
                                        <div><span>РУС</span><a href={'en'}>ENG</a></div>
                                    </div>
                                    <div className={'auth__form'}>
                                        <div className={'form__select'}>
                                            <span>Войти как</span>
                                            <select name="select">
                                                <option value="value1">Голосующий</option>
                                                <option value="value2">Голосующий 2</option>
                                                <option value="value3">Голосующий 3</option>
                                            </select>
                                        </div>
                                        <div className={'form__login'}>
                                            <span>Имя пользователя</span>
                                            <input ref={refBorderRedLogin} onChange={e => {setLogin(e.target.value)}} placeholder={'admin@admin.com'} name={login} value={login} type={"text"}/>
                                        </div>
                                        <div className={'form__pass'}>
                                            <span>Пароль</span>
                                            <img alt={'иконка'} className={'form__pass-show-pass-icon'} src={show_pass_icon} onClick={showHiddenPass}/>
                                            <input ref={refBorderRedPass} onChange={e => {setPass(e.target.value)}} name={pass} value={pass} type={changeTypePass}/>
                                            <div className={'form__error'}>{error}</div>
                                        </div>
                                        <div className={'form__checkbox'}>
                                            <span><a href={'/forget-password'} target={'_blank'}>Забыли пароль?</a></span>
                                            <label className={'checkbox_container'}>
                                                <input type="checkbox" value="yes"/>Запомнить меня
                                                <span className={'checkmark'}/>
                                            </label>
                                        </div>
                                        <div className={'form__button'}>
                                            <button onClick={e => inputHandler(e)} type={'button'}>Войти</button>
                                            <span><a href={'https://esia.gosuslugi.ru/login/'} target={'_blank'}>Войти через ЕСИА</a></span>
                                        </div>
                                    </div>
                                        </div>
                                            <div className={'main-block__reg'}>
                                                    <img alt={'изображение'} className={'auth-image_4'} src={bg_image1}/>
                                                    <img alt={'изображение'} className={'auth-image_5'} src={bg_image2}/>
                                                    <div className={'auth-image_1'}>
                                                        <img alt={'изображение'} src={bg_image3}/>
                                                    </div>
                                                    <div className={'auth-image_3'}>
                                                        <img alt={'изображение'} src={bg_image4}/>
                                                    </div>
                                                        <img alt={'изображение'} className={'auth-image-mobile'} src={bg_image_mobile}/>
                                                    <div className={'reg__logo'}>
                                                        <img src={logo} alt="Логотип"/>
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
                                            <span>Ещё нет аккаунта?</span><a href={'reg-page'}>Зарегистрироваться</a>
                                        </div>
                               </div>
                        </div>
             </div>

)

};

export default Authorization;

