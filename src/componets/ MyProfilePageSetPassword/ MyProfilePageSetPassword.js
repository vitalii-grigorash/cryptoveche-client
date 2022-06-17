import React, {useState} from "react";
import './ MyProfilePageSetPassword.css';
import icon_show_password from '../../img/Auth_show_pass_icon.svg';


const MyProfilePageSetPassword = () => {

    const [typePass, setTypePass] = useState('password')
    const [typeNewPass, setTypeNewPass] = useState('text')
    const [typeRepeatNewPass, setTypeRepeatNewPass] = useState('text')


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


    return (
            <div className={'my-profile-page-set-pass__wrapper'}>
                <h3>Пароль</h3>
                <div className={'my-profile-page-set-pass__form'}>
                    <div className={'my-profile-page-set-pass__form-input __my-profile-page-set-pass-hidden'}>
                        <label>Пароль</label>
                        <input type={typePass}/>
                        <img className={'my-profile-page-set-pass__icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password} onClick={() => {showHiddenPass()}}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input'}>
                        <label>Новый пароль</label>
                        <input type={typeNewPass}/>
                        <img className={'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password} onClick={() => {showHiddenNewPass()}}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input '}>
                        <label>Повторите новый пароль</label>
                        <input type={typeRepeatNewPass}/>
                        <img className={'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password} onClick={() => {showHiddenRepeatNewPass()}}/>
                    </div>
                </div>
                <button className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageSetPassword;