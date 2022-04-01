import React, {useState} from "react";
import './Auth.css';
import logo from '../../img/Group 2386.svg';
import bg_image1 from '../../img/Auth_img_1.svg';
import bg_image2 from '../../img/Auth_img_2.svg';
import bg_image3 from '../../img/Auth_img_3.svg';
import bg_image4 from '../../img/Auth_img_4.svg';
import bg_image5 from '../../img/Group 2386.svg';








const Auth = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [Error, setError] = useState('')
    // const []
    //
    //
    // function showPass () {
    //     let =
    // }
    const inputHandler = (e) => {
        setLogin(e.target.value)
        setPass(e.target.value)
        if(login === '' || pass === '')
            setError('Неверно введено имя пользователя или пароль')
    }

 return (
             <div className={'wrapper'}>
                        <div className={'container'}>
                            <div className={'main-block'}>
                                <div className={'main-block__auth'}>
                                    <div className={'auth__title'}>
                                        <h3>Авторизация</h3>
                                        <div><span>РУС</span><a href={''}>ENG</a></div>
                                    </div>
                                    <div className={'auth__form'}>
                                        <div className={'form__select'}>
                                            <span>Войти как</span>
                                                <select name="select">
                                                    <option value="value1">Голосующий</option>
                                                    <option value="value2">Значение 2</option>
                                                    <option value="value3">Значение 3</option>
                                                </select>
                                        </div>
                                        <div className={'form__login'}>
                                            <span>Имя пользователя</span>
                                            <input onChange={e => {setLogin(e.target.value)}} placeholder={'admin@admin.com'} name={login} value={login} type={"text"}/>
                                        </div>
                                        <div className={'form__pass'}>
                                            <span>Пароль</span>
                                            <input onChange={e => {setPass(e.target.value)}} name={pass} value={pass} type={'password'}/>
                                            <div className={'form__error'}>{Error}</div>
                                        </div>
                                        <div className={'form__checkbox'}>
                                            <span><a href={''}>Забыли пароль?</a></span>
                                            <label className={'checkbox_container'}>
                                                <input type="checkbox" value="yes"/>Запомнить меня
                                                <span className={'checkmark'}/>
                                            </label>
                                        </div>
                                        <div className={'form__button'}>
                                            <button onClick={e => inputHandler(e)} type={"submit"}>Войти</button>
                                            <span><a href={''}>Войти через ЕСИА</a></span>
                                        </div>
                                    </div>
                                        </div>
                                            <div className={'main-block__reg'}>
                                                <img alt={''} className={'_ibg-image1'} src={bg_image1}/>
                                                <img alt={''} className={'_ibg-image2'} src={bg_image2}/>
                                                <img alt={''} className={'_ibg-image3'} src={bg_image3}/>
                                                <img alt={''} className={'_ibg-image4'} src={bg_image1}/>
                                                <img alt={''} className={'_ibg-image5'} src={bg_image4}/>
                                                <img alt={''} className={'_ibg-image6'} src={bg_image3}/>
                                                <div className={'reg__logo'}><img src={logo} alt="Логотип"/></div>
                                                <div className={'reg__title'}>Система электронных голосований</div>
                                                <div className={'reg__button'}><span>Еще нет аккаунта?</span><button>Зарегистрироваться</button></div>
                                        </div>
                                        <div className={'main-block__mobile-link-reg'}>
                                            <span>Ещё нет аккаунта?</span><span><a href={''}>Зегистрироваться</a></span>
                                        </div>
                               </div>
                        </div>
             </div>

)

};

export default Auth;

