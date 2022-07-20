import React from "react";
import './MyBulletinCardQuestionCheckBox.css';
// import CallVotingNameRows from "../../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows";
import MyBulletinCardCheckBox from "./MyBulletinCardCheckBox/MyBulletinCardCheckBox";


const MyBulletinCardQuestionCheckBox = ({ titleName, nameFirstColumn, nameSecondColumn, nameThirdColumn }) => {

    return (
        <div className={'my-bulletin-card-question-check__wrapper'}>
            <div className={'my-bulletin-card-question-check__title'}>
                <h3>{titleName}</h3></div>
            <div className={'my-bulletin-card-question-check__select-checkboxes-block'}>
                <div className={'my-bulletin-card-question-check__header-columns'}>
                    <span />
                    <span>{nameFirstColumn}</span>
                    <span>{nameSecondColumn}</span>
                    <span>{nameThirdColumn}</span>
                </div>
                <MyBulletinCardCheckBox checkBoxNameMyBulletin={'Только через КриптоВече'} activeChecked={true} activeDisable={true} />
                <MyBulletinCardCheckBox checkBoxNameMyBulletin={'На общем собрании'} />
                <MyBulletinCardCheckBox checkBoxNameMyBulletin={'Третий варентос'} activeChecked={true} activeDisable={true} />
                <MyBulletinCardCheckBox checkBoxNameMyBulletin={'Очень совсем уж динный четвертый чтобы стыдно было такие варианты давать блин'} />
            </div>
        </div>
    )
}

export default MyBulletinCardQuestionCheckBox;
