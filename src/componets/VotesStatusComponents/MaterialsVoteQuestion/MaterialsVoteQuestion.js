import React from "react";
import './MaterialsVoteQuestion.css';


const MaterialsVoteQuestion = ({materialsVoteQuestion}) => {



    return (
            <div className={'materials-vote-question__wrapper'}>
                <span>{materialsVoteQuestion}</span>
                <select>
                </select>
            </div>
    )

}

export default MaterialsVoteQuestion;