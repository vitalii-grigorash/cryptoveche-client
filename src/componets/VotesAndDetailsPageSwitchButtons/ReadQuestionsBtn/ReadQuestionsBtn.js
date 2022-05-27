import React from "react";
import './ReadQuestionsBtn.css';
import {useNavigate} from "react-router-dom";

const ReadQuestionsBtn = ({hidden}) => {
    const linkReadQuestionPage = useNavigate();

    return (
            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={() => linkReadQuestionPage('/main/votes-page-read-questions')}>
                    <span className={'_read-questions-bnt'}>Ознакомиться с вопросами</span>
                    <span className={'_mobile-read-questions-bnt'}>Вопросы</span></h2>
            </div>
    )
}

export default ReadQuestionsBtn;