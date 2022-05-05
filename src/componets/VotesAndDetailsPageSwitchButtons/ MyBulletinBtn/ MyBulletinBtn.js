import React from "react";
import './ MyBulletinBtn.css';

const MyBulletinBtn = ({hidden}) => {

    return (

        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Мой бюллетень</h2>
        </div>
    )
}

export default MyBulletinBtn;