import React from "react";
import './ReadQuestionsCardList.css';


const ReadQuestionsCardList = ({nameCardList}) => {

    return (
           <>
                <ul className={'card-list__list-answer'} type={"square"}>
                    <li><span>{nameCardList}</span></li>
                </ul>
           </>

    )
}

export default ReadQuestionsCardList;

