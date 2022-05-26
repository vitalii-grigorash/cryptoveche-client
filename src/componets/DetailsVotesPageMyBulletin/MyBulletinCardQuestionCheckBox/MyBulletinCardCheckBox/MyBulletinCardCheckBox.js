import React from "react";
import './MyBulletinCardCheckBox.css';

const MyBulletinCardCheckBox = ({checkBoxNameMyBulletin, activeChecked, activeDisable}) => {

    return (
                <div className={'my-bulletin-card-checkbox__list-answer'}>
                    <div className={'my-bulletin-card-checkbox__name-question'}>{checkBoxNameMyBulletin}</div>
                    <label className={'my-bulletin-card-list__container'}>
                        <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>
                        <span className={'my-bulletin-card-list__checkmark'}/>
                    </label>
                    <label className={'my-bulletin-card-list__container'}>
                        <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>
                        <span className={'my-bulletin-card-list__checkmark'}/>
                    </label>
                    <label className={'my-bulletin-card-list__container'}>
                        <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>
                        <span className={'my-bulletin-card-list__checkmark'}/>
                    </label>
                </div>
    )
}

export default MyBulletinCardCheckBox;