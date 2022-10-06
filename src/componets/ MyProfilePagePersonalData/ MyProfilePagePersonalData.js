import React, { useEffect, useRef, useState } from "react";
import './ MyProfilePagePersonalData.css';
import * as MyProfile from '../../Api/MyProfile';

const MyProfilePagePersonalData = (props) => {

    const {
        requestHelper,
        userId,
        userEmail,
        userFirstName,
        userLastName,
        userSecondName,
        createUserName,
        addCurrentUser
    } = props;

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [activeBtn, setActiveBtn] = useState(false)
    const btnChangeColor = useRef(null)
    const borderErrorFirstName = useRef(null)
    const borderErrorLastName = useRef(null)
    const borderErrorSecondName = useRef(null)
    const [validFirstName, setValidFirstName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)
    const [validSecondName, setValidSecondName] = useState(false)
    const [errorFields, setErrorFields] = useState('')
    const [activeSuccess, setActiveSuccess] = useState(false)

    useEffect(() => {
        if (firstName || lastName || secondName !== '') {
            setActiveBtn(false);
            btnChangeColor.current.style.background = '#0084FE';
            btnChangeColor.current.style.color = '#FFFFFF';
            btnChangeColor.current.style.cursor = 'pointer';
        } else {
            setActiveBtn(true);
            btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
            btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
            btnChangeColor.current.style.cursor = 'initial';
        }
    }, [firstName, lastName, secondName]);

    const lastNameHandler = (e) => {
        const nameRegExp = /^([а-яё]+|[a-z]+)$/i
        setLastName(e.target.value)
        if (e.target.value === '') {
            setValidLastName(false)
        } else {
            if (!nameRegExp.test(e.target.value)) {
                setValidLastName(true)
            } else {
                setValidLastName(false)
            }
        }
    }

    const firstNameHandler = (e) => {
        const nameRegExp = /^([а-яё]+|[a-z]+)$/i
        setFirstName(e.target.value)
        if (e.target.value === '') {
            setValidFirstName(false)
        } else {
            if (!nameRegExp.test(e.target.value)) {
                setValidFirstName(true)
            } else {
                setValidFirstName(false)
            }
        }
    }

    const secondNameHandler = (e) => {
        const nameRegExp = /^([а-яё]+|[a-z]+)$/i
        setSecondName(e.target.value)
        if (e.target.value === '') {
            setValidSecondName(false)
        } else {
            if (!nameRegExp.test(e.target.value)) {
                setValidSecondName(true)
            } else {
                setValidSecondName(false)
            }
        }
    }

    let itemFields = {
        first_name: firstName,
        last_name: lastName,
        second_name: secondName,
        userFields: [],
    }

    const updateUserName = () => {
        if (validLastName === true || validFirstName === true || validSecondName === true) {
            setErrorFields('Поля заполнены неккоректно')
            borderErrorFirstName.current.style.border = '1px red solid';
            borderErrorLastName.current.style.border = '1px red solid';
            borderErrorSecondName.current.style.border = '1px red solid';
        } else {
            const body = {
                userNameId: userId,
                userNameFields: itemFields
            }
            requestHelper(MyProfile.changeUserName, body)
                .then((data) => {
                    if (localStorage.getItem('user')) {
                        localStorage.removeItem('user');
                        localStorage.setItem('user', JSON.stringify(data));
                    }
                    createUserName(data);
                    addCurrentUser(data);
                })
            setActiveBtn(true)
            setActiveSuccess(true)
            setErrorFields('Данные успешно изменены')
            borderErrorFirstName.current.style.border = '1px #4ED4A9 solid';
            borderErrorLastName.current.style.border = '1px #4ED4A9 solid';
            borderErrorSecondName.current.style.border = '1px #4ED4A9 solid';
            btnChangeColor.current.style.background = 'rgba(54, 59, 77, 0.08)';
            btnChangeColor.current.style.color = 'rgba(54, 59, 77, 0.35)';
            btnChangeColor.current.style.cursor = 'initial';
            setFirstName('')
            setLastName('')
            setSecondName('')
        }
    }

    useEffect(() => {
        const successTimeout = setTimeout(() => {
            if (activeSuccess === true) {
                setActiveSuccess(false)
                setErrorFields('')
                borderErrorFirstName.current.style.border = '1px rgba(54, 59, 77, 0.3) solid';
                borderErrorLastName.current.style.border = '1px rgba(54, 59, 77, 0.3) solid';
                borderErrorSecondName.current.style.border = '1px rgba(54, 59, 77, 0.3) solid';
            }
        }, 2000)
        return () => clearTimeout(successTimeout)
    }, [activeSuccess])

    return (
        <div className={'my-profile-page-personal-data__wrapper'}>
            <h3 className={'my-profile-page-personal-data__title'}>Личные данные</h3>
            <h3 className={'my-profile-page-personal-data__title-mobile'}>ФИО</h3>
            <div className={'my-profile-page-personal-data__form'}>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Фамилия</label>
                    <input
                        ref={borderErrorLastName}
                        type={"text"}
                        value={lastName}
                        onChange={e => lastNameHandler(e)}
                        placeholder={userLastName} />
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Имя</label>
                    <input
                        ref={borderErrorFirstName}
                        type={"text"}
                        value={firstName}
                        onChange={e => firstNameHandler(e)}
                        placeholder={userFirstName} />
                </div>
                <div className={'my-profile-page-personal-data__form-input'}>
                    <label>Отчество</label>
                    <input
                        ref={borderErrorSecondName}
                        type={"text"}
                        value={secondName}
                        onChange={e => secondNameHandler(e)}
                        placeholder={userSecondName} />
                </div>
                <div className={'my-profile-page-personal-data__form-input __my-profile-page-personal-date__hidden-e-mail'}>
                    <label>E-mail</label>
                    <input disabled={true} type={"email"} placeholder={userEmail} />
                </div>
                <span className={activeSuccess ? 'my-profile-page-personal-data__success-message' : 'my-profile-page-personal-data__error-message'}>{errorFields}</span>
            </div>
            <button disabled={activeBtn} ref={btnChangeColor} onClick={() => updateUserName()} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
        </div>
    )
}

export default MyProfilePagePersonalData;
