import React, { useEffect, useRef, useState } from "react";
import './ MyProfilePageSetPassword.css';
import icon_show_password from '../../img/Auth_show_pass_icon.svg';
import icon_hide_password from '../../img/Auth_hidden_pass.svg';
import * as MyProfile from "../../Api/MyProfile";

const MyProfilePageSetPassword = (props) => {

    const {
        requestHelper,
        userId
    } = props;

    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');
    const [errorPass, setErrorPass] = useState('');
    // const [typePass, setTypePass] = useState('password')
    const [typeNewPass, setTypeNewPass] = useState('password');
    const [typeRepeatNewPass, setTypeRepeatNewPass] = useState('password');
    const [showIconNewPass, setShowIconNewPass] = useState(true);
    const [showIconRepeatPass, setShowIconRepeatPass] = useState(true);
    const [activeBtn, setActiveBtn] = useState(true);
    const btnChangeColor = useRef(null);
    const borderRefNewPass = useRef(null);
    const borderRefRepeatPass = useRef(null);
    const [activeSuccessPass, setActiveSuccessPass] = useState(false);

    // const showHiddenPass = () => {
    //     if (typePass === 'password') {
    //         setTypePass('text')
    //     } else {
    //         setTypePass('password')
    //     }
    // }

    const showHiddenNewPass = () => {
        if (typeNewPass === 'text') {
            setTypeNewPass('password');
        } else {
            setTypeNewPass('text');
        }
    }

    const showHiddenRepeatNewPass = () => {
        if (typeRepeatNewPass === 'text') {
            setTypeRepeatNewPass('password');
        } else {
            setTypeRepeatNewPass('text');
        }
    }

    useEffect(() => {
        if (newPass !== '') {
            setShowIconNewPass(true);
        } else {
            setShowIconNewPass(false);
        } if (repeatNewPass !== '') {
            setShowIconRepeatPass(true);
        } else {
            setShowIconRepeatPass(false);
        } if (newPass || repeatNewPass !== '') {
            setActiveBtn(false);
            btnChangeColor.current.style.background = '#0084FE';
            btnChangeColor.current.style.color = '#FFFFFF';
            btnChangeColor.current.style.cursor = 'pointer';
        } else {
            setActiveBtn(true)
            btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
            btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
            btnChangeColor.current.style.cursor = 'initial';
        }
    }, [newPass, repeatNewPass]);

    let newPassItem = {
        password: newPass
    }

    function onSaveChangePass() {
        const passRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*,.:;+<>{}?\\[\]/_-]{8,64}$/
        if (newPass !== repeatNewPass) {
            setErrorPass('Пароли не совпадают');
            borderRefNewPass.current.style.border = '1px red solid'
            borderRefRepeatPass.current.style.border = '1px red solid'
        }
        else if (passRegExp.test(newPass) === false) {
            setErrorPass('Пароль должен содержать от 8 до 64 символов, состоять из латинских букв верхнего, нижнего регистра и цифр');
            borderRefNewPass.current.style.border = '1px red solid'
            borderRefRepeatPass.current.style.border = '1px red solid'
        } else {
            const body = {
                userNameId: userId,
                userNameFields: newPassItem
            }
            requestHelper(MyProfile.changeUserName, body)
                .then((data) => {

                })
            setErrorPass('Пароль успешно изменен');
            setActiveBtn(true)
            setActiveSuccessPass(true)
            setNewPass('')
            setRepeatNewPass('')
            borderRefNewPass.current.style.border = '1px #4ED4A9 solid'
            borderRefRepeatPass.current.style.border = '1px #4ED4A9 solid'
            btnChangeColor.current.style = {
                background: 'rgba(54, 59, 77, 0.08)',
                color: 'rgba(54, 59, 77, 0.35)',
                cursor: 'initial'
            }
        }
    }

    setTimeout(() => {
        if (activeSuccessPass === true) {
            setActiveSuccessPass(false)
            setErrorPass('')
            borderRefNewPass.current.style.border = '1px rgba(54, 59, 77, 0.3) solid'
            borderRefRepeatPass.current.style.border = '1px rgba(54, 59, 77, 0.3) solid'
        }
    }, 2000)

    return (
        <div className={'my-profile-page-set-pass__wrapper'}>
            <h3>Пароль</h3>
            <div className={'my-profile-page-set-pass__form'}>
                {/* <div className={'my-profile-page-set-pass__form-input __my-profile-page-set-pass-hidden'}>
                    <label>Пароль</label>
                    <input type={typePass}
                        className={'form-input__pass-fields'}
                        autoComplete="new-password" />
                    <img className={'my-profile-page-set-pass__icon-pass'} alt={'иконка скрыть пароль'} src={typePass === 'password' ? icon_show_password : icon_hide_password} onClick={() => { showHiddenPass() }} />
                </div> */}
                <div className={'my-profile-page-set-pass__form-input'}>
                    <label>Новый пароль</label>
                    <input
                        className={'form-input__pass-fields'}
                        ref={borderRefNewPass}
                        type={typeNewPass}
                        value={newPass}
                        onChange={e => setNewPass(e.target.value)}
                        autoComplete="new-password"
                    />
                    <img className={showIconNewPass ? 'my-profile-page-set-pass__icon-pass active' : 'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={typeNewPass === 'password' ? icon_show_password : icon_hide_password} onClick={() => { showHiddenNewPass() }} />
                </div>
                <div className={'my-profile-page-set-pass__form-input'}>
                    <label>Повторите новый пароль</label>
                    <input
                        className={'form-input__pass-fields'}
                        ref={borderRefRepeatPass}
                        type={typeRepeatNewPass}
                        value={repeatNewPass}
                        onChange={e => setRepeatNewPass(e.target.value)}
                        autoComplete="new-password"
                    />
                    <img className={showIconRepeatPass ? 'my-profile-page-set-pass__icon-pass active' : 'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={typeRepeatNewPass === 'password' ? icon_show_password : icon_hide_password} onClick={() => { showHiddenRepeatNewPass() }} />
                    <span className={activeSuccessPass ? 'my-profile-page-set-pass__success-message' : 'my-profile-page-set-pass__error-message'}>{errorPass}</span>
                </div>
            </div>
            <button disabled={activeBtn} ref={btnChangeColor} onClick={() => { onSaveChangePass() }} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
        </div>
    )
}

export default MyProfilePageSetPassword;
