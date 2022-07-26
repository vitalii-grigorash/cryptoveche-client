import React from "react";
import './MyBulletinCardQuestionList.css';
import MyBulletinCardList
    from "./MyBulletinCardList/MyBulletinCardList";


const MyBulletinCardQuestionList = ({nameQuestion, checkboxLabelBulletin}) => {



    return (
            <div className={'my-bulletin-card-question-list__wrapper'}>
                <h3 className={'my-bulletin-card-question-list__title'}>{nameQuestion}</h3>
                <div className={'my-bulletin-card-question-list__answer-checkbox'}>
                    {checkboxLabelBulletin}
                </div>
            </div>
    )
}

export default MyBulletinCardQuestionList;