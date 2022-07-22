import React from "react";
import './MyBulletinCardCheckBox.css';

const MyBulletinCardCheckBox = ({myBulletinCheckProp, activeChecked, activeDisable}) => {

    return (
                <>
                    <td className={'call-voting-checkbox__wrapper'}>
                        <label className={'my-bulletin-card-list__container'}>
                            <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>{myBulletinCheckProp}
                            <span className={'my-bulletin-card-list__checkmark'}/>
                        </label>
                    </td>
                </>
    )
}

export default MyBulletinCardCheckBox;