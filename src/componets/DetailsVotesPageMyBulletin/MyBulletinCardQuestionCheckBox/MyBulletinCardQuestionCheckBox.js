import React from "react";
import './MyBulletinCardQuestionCheckBox.css';
// import CallVotingNameRows from "../../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows";
import MyBulletinCardCheckBox from "./MyBulletinCardCheckBox/MyBulletinCardCheckBox";


const MyBulletinCardQuestionCheckBox = ({questionName, nameColumnBulletin, nameRowBulletin}) => {

    return (
        <div className={'my-bulletin-card-question-check__wrapper'}>
            <div className={'my-bulletin-card-question-check__title'}>
                <h3>{questionName}</h3></div>
            <div className={'my-bulletin-card-question-check__select-checkboxes-block'}>
                <table>
                    <thead>
                    <tr className={'select-checkboxes-block__name-columns'}>
                        <th className={'name-columns__width-column'}></th>
                        {nameColumnBulletin}
                    </tr>
                    </thead>
                    <tbody>
                        {nameRowBulletin}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBulletinCardQuestionCheckBox;
