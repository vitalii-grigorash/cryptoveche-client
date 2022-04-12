import React from "react";
import './RegistrationModal.css';
import {useHistory} from "react-router-dom";
import icon_checkmark from '../../../img/MyVotes_icon_checkmark.svg';


const RegistrationModal = ({active}) => {

    const linkMainPage = useHistory();

    return (
        <div className={active ? 'registration-modal active' : 'registration-modal'}>
            <div className={'registration-modal__content'}>
                <div className={'content__title'}>
                    <h3>Регистрация</h3>
                    <div className={'title__language'}><span>РУС</span><a href={'en'}>ENG</a></div>
                </div>
                <h4><img className={'title__checkmark'} alt={'зеленая галочка'} src={icon_checkmark}/>Вы успешно прошли регистрацию!</h4>
                <button type={'button'} onClick={() => { linkMainPage.push('/main')}}>На главную</button>
            </div>
        </div>
    )
}

export default RegistrationModal;
