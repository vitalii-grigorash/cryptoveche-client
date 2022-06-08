import React from "react";
import './ MyBulletinBtn.css';
import {useNavigate} from "react-router-dom";

const MyBulletinBtn = ({hidden}) => {

    const linkMyBulletin = useNavigate();

    return (

        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} onClick={() => linkMyBulletin('/main/votes-page-details-my-bulletin')} hidden={hidden}>Мой бюллетень</h2>
        </div>
    )
}

export default MyBulletinBtn;