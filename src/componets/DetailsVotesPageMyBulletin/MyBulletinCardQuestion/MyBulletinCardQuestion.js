import React from "react";
import './MyBulletinCardQuestion.css';
import MyBulletinCardQuestionCheckboxLabel
    from "../MyBulletinCardQuestionCheckboxLabel/MyBulletinCardQuestionCheckboxLabel";


const MyBulletinCardQuestion = () => {

    return (
            <div className={'my-bulletin-card-question__wrapper'}>
                <h3 className={'my-bulletin-card-question__title'}>1. Согласны ли вы с решением №576?</h3>
                <div className={'my-bulletin-card-question__answer-checkbox'}>
                    <MyBulletinCardQuestionCheckboxLabel checkboxLabel={'Да'} activeDisable={true}/>
                    <MyBulletinCardQuestionCheckboxLabel checkboxLabel={'Нет'} activeDisable={true}/>
                    <MyBulletinCardQuestionCheckboxLabel checkboxLabel={'Дайте подумать'} activeChecked={true}/>
                </div>
            </div>
    )
}

export default MyBulletinCardQuestion;