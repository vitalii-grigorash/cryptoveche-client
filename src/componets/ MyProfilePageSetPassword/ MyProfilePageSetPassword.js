import React from "react";
import './ MyProfilePageSetPassword.css';


const MyProfilePageSetPassword = () => {

    return (
            <div className={'my-profile-page-set-pass__wrapper'}>
                <h3>Пароль</h3>
                <div className={'my-profile-page-set-pass__form'}>
                    <div className={'my-profile-page-set-pass__form-input'}>
                        <label>Пароль</label>
                        <input type={"password"}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Новый пароль</label>
                        <input type={"text"}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Повторите новый пароль</label>
                        <input type={"text"}/>
                    </div>
                </div>
                <button className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageSetPassword;