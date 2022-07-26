import React from "react";
import './MyBulletinCardList.css';

const MyBulletinCardList = ({checkboxLabelBulletin, activeChecked, activeDisable}) => {

    return (
             <div className={'my-bulletin-card-list__wrapper'}>
                <label className={'my-bulletin-card-list__container'}>
                    <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>{checkboxLabelBulletin}
                    <span className={'my-bulletin-card-list__checkmark'}/>
                </label>
             </div>

    )
}
export default MyBulletinCardList;