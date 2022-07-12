import React, { useState } from "react";
import './ MyProfilePagePersonalData.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { config } from "../../config";

const MyProfilePagePersonalData = () => {

    const API_URL = config.java_api_url;
    const currentUser = React.useContext(CurrentUserContext);
    console.log(currentUser)

    const [firstName, setFirstName] = useState('')
    const userId = currentUser.id

    console.log(firstName)
    console.log(userId)

    function updateUser() {
        let item = {
            firstName
        }
        fetch(`${API_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: item.firstName
            })
        })
            .then(res => res.ok ? res : Promise.reject(res))
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                if (err.status === 500) {
                    throw new Error('Сервер временно недоступен');
                } else {
                    console.log(err);
                }
            });
        console.log(firstName)
    }

    return (
        <div className={'my-profile-page-personal-data__wrapper'}>
            <h3 className={'my-profile-page-personal-data__title'}>Личные данные</h3>
            <h3 className={'my-profile-page-personal-data__title-mobile'}>ФИО</h3>
            <div className={'my-profile-page-personal-data__form'}>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Фамилия</label>
                    <input type={"text"} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Имя</label>
                    <input type={"text"} />
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Отчетсво</label>
                    <input type={"text"} />
                </div>
                <div className={'my-profile-page-personal-data__form-input __my-profile-page-personal-date__hidden-e-mail'}>
                    <label>E-mail</label>
                    <input type={"text"} />
                </div>
            </div>
            <button onClick={() => { updateUser() }} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
        </div>
    )
}

export default MyProfilePagePersonalData;
