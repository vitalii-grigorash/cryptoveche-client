import React, {useState} from "react";
import './ MyProfilePagePersonalData.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";



const MyProfilePagePersonalData = () => {

    const currentUser = React.useContext(CurrentUserContext);
                // console.log(currentUser)


     const [firstName, setFirstName] = useState('')
     const userId = currentUser.id


    const updateUser = () => {
         let item = {
             last_name: firstName
         }
         fetch(`https://client.cryptoveche.local:443/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item.last_name)
        })
             .then(res => res.json())
             .then(data => {
                 console.log('Success:', data);
             })
             .catch((error) => {
                 console.error('Error:', error);
             });
    }


    return (
            <div className={'my-profile-page-personal-data__wrapper'}>
                <h3 className={'my-profile-page-personal-data__title'}>Личные данные</h3>
                <h3 className={'my-profile-page-personal-data__title-mobile'}>ФИО</h3>
                <div className={'my-profile-page-personal-data__form'}>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Фамилия</label>
                        <input type={"text"} value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Имя</label>
                        <input type={"text"}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input'}>
                        <label>Отчетсво</label>
                        <input type={"text"}/>
                    </div>
                    <div className={'my-profile-page-personal-data__form-input __my-profile-page-personal-date__hidden-e-mail'}>
                        <label>E-mail</label>
                        <input type={"text"}/>
                    </div>
                </div>
                 <button onClick={() => {updateUser()}} className={'my-profile-page__save-change-button'}>Сохранить изменения</button>
            </div>
    )
}

export default MyProfilePagePersonalData;