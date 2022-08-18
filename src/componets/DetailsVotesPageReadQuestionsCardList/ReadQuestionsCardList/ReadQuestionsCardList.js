import React from "react";
import './ReadQuestionsCardList.css';

const ReadQuestionsCardList = (props) => {

    const {
        value
    } = props;

    return (
        <>
            <ul className='card-list__list-answer' type="square">
                <li><span>{value}</span></li>
            </ul>
        </>
    )
}

export default ReadQuestionsCardList;
