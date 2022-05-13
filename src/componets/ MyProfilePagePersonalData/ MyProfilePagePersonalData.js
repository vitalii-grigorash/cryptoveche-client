import React from "react";
import './ MyProfilePagePersonalData.css';

const MyProfilePagePersonalData = () => {

    return (

        <div className={'my-profile-page-personal-data__wrapper'}>
            <h3>Личные данные</h3>
            <div className={'my-profile-page-personal-data__form'}>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Фамилия</label>
                    <input type={"text"}/>
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Имя</label>
                    <input type={"text"}/>
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Отчетсво</label>
                    <input type={"text"}/>
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>E-mail</label>
                    <input type={"text"}/>
                </div>
            </div>
             <button className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
        </div>
    )
}

export default MyProfilePagePersonalData;