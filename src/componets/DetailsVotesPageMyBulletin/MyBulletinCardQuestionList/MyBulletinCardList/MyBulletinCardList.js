import React from "react";
import './MyBulletinCardList.css';

const MyBulletinCardList = ({checkboxLabel, activeChecked, activeDisable}) => {

    return (
             <div className={'my-bulletin-card-list__wrapper'}>
                <label className={'my-bulletin-card-list__container'}>
                    <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>{checkboxLabel}
                    <span className={'my-bulletin-card-list__checkmark'}/>
                </label>
             </div>

    )
}
export default MyBulletinCardList;