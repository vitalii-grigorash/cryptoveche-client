import React, {useState} from "react";
import './MaterialsVoteQuestion.css';
import MaterialsVoteQuestionModal from "./MaterialsVoteQuestionModal/MaterialsVoteQuestionModal";



const MaterialsVoteQuestion = ({materialsVoteQuestion}) => {

    const [materialsModalActive, setMaterialsModalActive] = useState(false);


    return (
            <div className={'materials-vote-question__wrapper'}>
                <span>{materialsVoteQuestion}</span>
                <div className={'materials-vote-question__select'} onClick={() => setMaterialsModalActive(!materialsModalActive)}>
                    <select>
                    </select>
                </div>
                <MaterialsVoteQuestionModal active={materialsModalActive} setActive={setMaterialsModalActive}/>
            </div>
    )
}

export default MaterialsVoteQuestion;