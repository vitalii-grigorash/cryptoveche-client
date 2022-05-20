import React from "react";
import './ReadQuestionsCardCheckbox.css';


const ReadQuestionsCardCheckbox = ({checkBoxNameRow, typeCheck}) => {



    return (
            <div className={'select-checkboxes-block__list-question-checkbox'}>
                <div className={'list-question-checkbox__name-question'}>{checkBoxNameRow}</div>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
            </div>

    )
}

export default ReadQuestionsCardCheckbox;