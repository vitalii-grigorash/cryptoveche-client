import React from "react";
import './ReadQuestionsCardList.css';


const ReadQuestionsCardList = ({nameCardList}) => {

    return (
           <>
                <ul className={'question-block__list-questions'} type={"square"}>
                    <li><span>{nameCardList}</span></li>
                </ul>
           </>

    )
}

export default ReadQuestionsCardList;

