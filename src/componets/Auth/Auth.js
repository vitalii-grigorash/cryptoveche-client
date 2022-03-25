import React, {useState} from "react";
import './Auth.css';
import logo from '../../img/Group 2386.svg';


const Auth = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [Error, setError] = useState('')

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
                                            <option value="value1" selected>Голосующий</option>
                                            <option value="value2" >Значение 2</option>
                                            <option value="value3">Значение 3</option>
                                        </select>
                            </div>
                                <div className={'form__login'}>
                                    <span>Имя пользователя</span>
                                    <input onChange={e => {setLogin(e.target.value)}} placeholder={'admin@admin.com'} name={login} value={login} type={"text"}></input>
                                </div>
                                <div className={'form__pass'}>
                                    <span>Пароль</span>
                                    <input onChange={e => {setPass(e.target.value)}} name={pass} value={pass} type={'password'} n></input>
                                    <div className={'form__error'}>{Error}</div>
                                </div>
                                <div className={'form__checkbox'}>
                                    <span><a href={''}>Забыли пароль?</a></span>
                                    <label className={'checkbox_container'}>
                                        <input type="checkbox" value="yes"/>Запомнить меня
                                            <span className={'checkmark'}></span>
                                    </label>
                                </div>
                                <div className={'form__button'}>
                                    <button onClick={e => inputHandler(e)} type={"submit"}>Войти</button>
                                    <span><a href={''}>Войти через ЕСИА</a></span>
                                </div>
                        </div>
                                </div>
                            <div className={'main-block__reg'}>
                                <div className={'reg__logo'}><img src={logo} alt="Логотип"/></div>
                                <div className={'reg__title'}>Система электронных голосований</div>
                                <div className={'reg__button'}><span>Еще нет аккаунта?</span><button>Зарегистрироваться</button></div>
                        </div>
                    </div>
              </div>
             </div>

)

};

export default Auth;

