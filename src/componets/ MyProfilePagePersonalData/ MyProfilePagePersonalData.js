import React, {useEffect, useRef, useState} from "react";
import './ MyProfilePagePersonalData.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {options} from "../../config";



const MyProfilePagePersonalData = () => {

    const API_URL = options.apiUrl;
    const currentUser = React.useContext(CurrentUserContext);
    console.log(currentUser)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [activeBtn, setActiveBtn] = useState(true)
    const btnChangeColor = useRef(null)
    const userId = currentUser.id
    const userEmail = currentUser.email

    console.log(userId)

    useEffect(() => {
        if (firstName || lastName || secondName !== '') {
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
    }, [firstName, lastName, secondName]);


    function updateUserName() {
        const nameRegExp = /^([а-яё]+|[a-z]+)$/i
        if (nameRegExp.test(firstName) === false) {
            console.log('error')

        } else {

            let item = {
                first_name: firstName,
                last_name: lastName,
                second_name: secondName
            }

            Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));
            const newItem = Object.filter(item, ([key, score]) => score !== '')

            fetch(`${API_URL}/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newItem)
                }
            ).then(res => res.ok ? res : Promise.reject(res))
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
                    }
                )
            console.log(newItem)
        }
    }
        return (
            <div className={'my-profile-page-personal-data__wrapper'}>
                <h3 className={'my-profile-page-personal-data__title'}>Личные данные</h3>
                    <h3 className={'my-profile-page-personal-data__title-mobile'}>ФИО</h3>
                    <div className={'my-profile-page-personal-data__form'}>
                        <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Фамилия</label>
                        <input
                            type={"text"}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Имя</label>
                        <input
                            type={"text"}
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Отчетсво</label>
                        <input
                            type={"text"}
                            value={secondName}
                            onChange={e => setSecondName(e.target.value)}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input __my-profile-page-personal-date__hidden-e-mail'}>
                        <label>E-mail</label>
                        <input disabled={true} type={"email"} placeholder={userEmail}/>
                    </div>
                </div>
                <button disabled={activeBtn} ref={btnChangeColor} onClick={() => {updateUserName()}} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePagePersonalData;