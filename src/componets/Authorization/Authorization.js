import React, {useState} from "react";
import './Authorization.css';
import logo from '../../img/Auth_logo_crypto_veche.svg';
import bg_image1 from '../../img/Auth_img_1.svg';
import bg_image2 from '../../img/Auth_img_2.svg';
import bg_image3 from '../../img/Auth_img_3.svg';
import bg_image4 from '../../img/Auth_img_4.svg';
import bg_image_mobile from '../../img/Auth_img_mobile.svg';
import show_pass_icon from '../../img/Auth_show_pass_icon.svg';



const Authorization = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [changeTypePass, setChangeTypePass] = useState('password');
    const [inputColor, setInputColor] = useState('_input-border-black')


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
            setInputColor('_input-border-red ')
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
                                            <input className={inputColor} onChange={e => {setLogin(e.target.value)}} placeholder={'admin@admin.com'} name={login} value={login} type={"text"}/>
                                        </div>
                                        <div className={'form__pass'}>
                                            <span>Пароль</span>
                                            <img alt={'иконка'} className={'form__pass-show-pass-icon'} src={show_pass_icon} onClick={showHiddenPass}/>
                                            <input className={inputColor} onChange={e => {setPass(e.target.value)}} name={pass} value={pass} type={changeTypePass}/>
                                            <div className={'form__error'}>{error}</div>
                                        </div>
                                        <div className={'form__checkbox'}>
                                            <span><a href={'link'}>Забыли пароль?</a></span>
                                            <label className={'checkbox_container'}>
                                                <input type="checkbox" value="yes"/>Запомнить меня
                                                <span className={'checkmark'}/>
                                            </label>
                                        </div>
                                        <div className={'form__button'}>
                                            <button onClick={e => inputHandler(e)} type={'button'}>Войти</button>
                                            <span><a href={'link'}>Войти через ЕСИА</a></span>
                                        </div>
                                    </div>
                                        </div>
                                            <div className={'main-block__reg'}>
                                                    <img alt={''} className={'auth-image_1'} src={bg_image1}/>
                                                    <img alt={''} className={'auth-image_2'} src={bg_image2}/>
                                                    <img alt={''} className={'auth-image_3'} src={bg_image3}/>
                                                    <img alt={''} className={'auth-image_4'} src={bg_image1}/>
                                                    <img alt={''} className={'auth-image_5'} src={bg_image4}/>
                                                    <img alt={''} className={'auth-image_6'} src={bg_image3}/>
                                                    <img alt={''} className={'auth-image-mobile'} src={bg_image_mobile}/>
                                                <div className={'reg__logo'}>
                                                    <img src={logo} alt="Логотип"/>
                                                </div>
                                                <div className={'reg__title'}>
                                                    Система электронных голосований
                                                </div>
                                                <div className={'reg__button'}>
                                                    <span>Еще нет аккаунта?</span>
                                                    <button>Зарегистрироваться</button>
                                                </div>
                                        </div>
                                        <div className={'main-block__mobile-link-reg'}>
                                            <span>Ещё нет аккаунта?</span><a href={'link'}>Зарегистрироваться</a>
                                        </div>
                               </div>
                        </div>
             </div>

)

};

export default Authorization;

