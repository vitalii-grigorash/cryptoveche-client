import React from "react";
import './MyBulletinCardQuestionCheckboxLabel.css';

const MyBulletinCardQuestionCheckboxLabel = ({checkboxLabel, activeChecked, activeDisable}) => {

    return (
         <div className={'my-bulletin-card-question-check__wrapper'}>
            <label className={'checkbox_container'}>
                <input type="checkbox" value="yes" defaultChecked={activeChecked} disabled={activeDisable}/>{checkboxLabel}
                <span className={'checkmark'}/>
            </label>
         </div>
    )
}

export default MyBulletinCardQuestionCheckboxLabel;