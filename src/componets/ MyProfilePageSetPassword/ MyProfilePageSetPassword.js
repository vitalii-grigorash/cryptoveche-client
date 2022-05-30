import React from "react";
import './ MyProfilePageSetPassword.css';
import icon_show_password from '../../img/Auth_show_pass_icon.svg';


const MyProfilePageSetPassword = () => {

    return (
            <div className={'my-profile-page-set-pass__wrapper'}>
                <h3>Пароль</h3>
                <div className={'my-profile-page-set-pass__form'}>
                    <div className={'my-profile-page-set-pass__form-input __my-profile-page-set-pass-hidden'}>
                        <label>Пароль</label>
                        <input type={"password"}/>
                        <img className={'my-profile-page-set-pass__icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input'}>
                        <label>Новый пароль</label>
                        <input type={"password"}/>
                        <img className={'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password}/>
                    </div>
                    <div className={'my-profile-page-set-pass__form-input '}>
                        <label>Повторите новый пароль</label>
                        <input type={"password"}/>
                        <img className={'my-profile-page-set-pass__icon-pass __my-profile-show-icon-pass'} alt={'иконка скрыть пароль'} src={icon_show_password}/>
                    </div>
                </div>
                <button className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageSetPassword;