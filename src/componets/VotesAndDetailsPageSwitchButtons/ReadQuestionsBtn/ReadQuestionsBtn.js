import React from "react";
import './ReadQuestionsBtn.css';

const ReadQuestionsBtn = ({hidden}) => {

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Ознакомиться с вопросами</h2>
        </div>
    )
}

export default ReadQuestionsBtn;