import React, {useEffect, useRef, useState} from "react";
import './ MyProfilePageSetPassword.css';
import icon_show_password from '../../img/Auth_show_pass_icon.svg';
import icon_hide_password from '../../img/Auth_hidden_pass.svg';



const MyProfilePageSetPassword = () => {

    const [newPass, setNewPass] = useState('')
    const [repeatNewPass, setRepeatNewPass] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const [typePass, setTypePass] = useState('password')
    const [typeNewPass, setTypeNewPass] = useState('text')
    const [typeRepeatNewPass, setTypeRepeatNewPass] = useState('text')
    const [showIconNewPass, setShowIconNewPass] = useState(false)
    const [showIconRepeatPass, setShowIconRepeatPass] = useState(false)
    const [activeBtn, setActiveBtn] = useState(true)
    const btnChangeColor = useRef(null)


    const showHiddenPass = () => {
        if (typePass === 'password')
        {
            setTypePass('text')
        } else {
            setTypePass('password')
        }
    }

    const showHiddenNewPass = () => {
        if (typeNewPass === 'text')
        {
            setTypeNewPass('password')
        } else {
            setTypeNewPass('text')
        }
    }

    const showHiddenRepeatNewPass = () => {
        if (typeRepeatNewPass === 'text')
        {
            setTypeRepeatNewPass('password')
        } else {
            setTypeRepeatNewPass('text')
        }
    }

    useEffect(() => {
        if (newPass !== '') {
            setShowIconNewPass(true)
        } else {
            setShowIconNewPass(false)
        } if (repeatNewPass !== '') {
            setShowIconRepeatPass(true)
        } else {
            setShowIconRepeatPass(false)
        } if (newPass && repeatNewPass !== '') {
            setActiveBtn(false);
            btnChangeColor.current.style.background = '#0084FE';
            btnChangeColor.current.style.color = '#FFFFFF';
            btnChangeColor.current.style.cursor = 'pointer';
        } else {
            setActiveBtn(true)
            btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
            btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
            btnChangeColor.current.style.cursor = 'initial';
            setErrorPass('')
        }
    },[newPass, repeatNewPass]);


    function onSaveChangePass() {
        const passRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*,.:;+<>{}?\\[\]/_-]{8,64}$/
        if (newPass !== repeatNewPass) {
            setErrorPass('Пароли не совпадают');
        }
        else if (passRegExp.test(newPass) === false) {
            setErrorPass('Пароль должен содержать от 8 до 64 символов, состоять из латинских букв верхнего, нижнего регистра и цифр');
        } else {
            setErrorPass('');
            console.log('Complete')
            console.log(activeBtn)
            setActiveBtn(true)
            btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
            btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
            btnChangeColor.current.style.cursor = 'initial';
        }
    }


    return (
            <div className={'my-profile-page-set-pass__wrapper'}>
                <h3>Пароль</h3>
                <div className={'my-profile-page-set-pass__form'}>
                    <div className={'my-profile-page-set-pass__form-input __my-profile-page-set-pass-hidden'}>
                        <label>Пароль</label>
                        <input type={typePass}
                               autoComplete="new-password"/>
                        <img className={'my-profile-page-set-pass__icon-pass'} alt={'иконка скрыть пароль'} src={typePass === 'password' ? icon_show_password : icon_hide_password} onClick={() => {showHiddenPass()}}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input'}>
                        <label>Новый пароль</label>
                        <input
                            type={typeNewPass}
                            value={newPass}
                            onChange={e => setNewPass(e.target.value)}/>
                        <img className={showIconNewPass ? 'my-profile-page-set-pass__icon-pass active' : 'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={typeNewPass === 'password' ? icon_show_password : icon_hide_password} onClick={() => {showHiddenNewPass()}}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input '}>
                        <label>Повторите новый пароль</label>
                        <input
                            type={typeRepeatNewPass}
                            value={repeatNewPass}
                            onChange={e => setRepeatNewPass(e.target.value)}/>
                        <img className={showIconRepeatPass ? 'my-profile-page-set-pass__icon-pass active' : 'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={typeRepeatNewPass === 'password' ? icon_show_password : icon_hide_password} onClick={() => {showHiddenRepeatNewPass()}}/>
                        <span className={'my-profile-page-set-pass__error-message'}>{errorPass}</span>
                    </div>
                </div>
                <button disabled={activeBtn} ref={btnChangeColor} onClick={() => {onSaveChangePass()}} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageSetPassword;