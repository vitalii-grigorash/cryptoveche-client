import React from "react";
import './ MyProfilePageAdditionalSettings.css';

const MyProfilePageAdditionalSettings = () => {

    return (
            <div className={'my-profile-page-add-settings__wrapper'}>
                <h3>Дополнительные настройки</h3>
                <div className={'my-profile-page-add-settings__form'}>
                    <label>Часовой пояс</label>
                    <select>
                        <option>(UTC+3) Россия - Москва - московское время</option>
                        <option>(UTC+3) Россия - Москва - московское время</option>
                        <option>(UTC+3) Россия - Москва - московское время</option>
                    </select>
                </div>
                <button className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePageAdditionalSettings;