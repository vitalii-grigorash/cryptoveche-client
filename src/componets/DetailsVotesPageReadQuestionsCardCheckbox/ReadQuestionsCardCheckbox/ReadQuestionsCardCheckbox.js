import React from "react";
import './ReadQuestionsCardCheckbox.css';


const ReadQuestionsCardCheckbox = ({checkBoxNameRow, typeCheck}) => {


    return (
            <div className={'card-checkbox__list-answer'}>
                <div className={'list-answer__name-question'}>{checkBoxNameRow}</div>
                <input className={'list-answer-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-answer-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-answer-checkbox'} type={typeCheck} disabled={true}/>
            </div>
    )
}

export default ReadQuestionsCardCheckbox;