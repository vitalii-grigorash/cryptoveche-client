import React from "react";
import './ReadQuestionsBtn.css';

const ReadQuestionsBtn = ({hidden}) => {

    return (
            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>
                    <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                    <span className={'_mobile-read-questions-bnt'}>Вопросы</span></h2>
            </div>
    )
}

export default ReadQuestionsBtn;