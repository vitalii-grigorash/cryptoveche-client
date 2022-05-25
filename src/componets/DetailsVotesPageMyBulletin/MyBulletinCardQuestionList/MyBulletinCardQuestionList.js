import React from "react";
import './MyBulletinCardQuestionList.css';
import MyBulletinCardList
    from "./MyBulletinCardList/MyBulletinCardList";


const MyBulletinCardQuestionList = ({nameQuestion}) => {

    return (
            <div className={'my-bulletin-card-question-list__wrapper'}>
                <h3 className={'my-bulletin-card-question-list__title'}>{nameQuestion}</h3>
                <div className={'my-bulletin-card-question-list__answer-checkbox'}>
                    <MyBulletinCardList checkboxLabel={'Да'} activeDisable={true} activeChecked={true} />
                    <MyBulletinCardList checkboxLabel={'Нет'} activeDisable={true}/>
                    <MyBulletinCardList checkboxLabel={'Дайте подумать'} activeDisable={true}/>
                </div>
            </div>
    )
}

export default MyBulletinCardQuestionList;