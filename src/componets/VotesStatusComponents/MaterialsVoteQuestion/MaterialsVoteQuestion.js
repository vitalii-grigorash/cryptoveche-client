import React, {useState} from "react";
import './MaterialsVoteQuestion.css';
import MaterialsVoteQuestionModal from "./MaterialsVoteQuestionModal/MaterialsVoteQuestionModal";
import material_vote_row from '../../../img/Materials_vote_row.svg';




const MaterialsVoteQuestion = ({materialsVoteQuestion}) => {

    const [materialsModalActive, setMaterialsModalActive] = useState(false);


    return (
            <div className={'materials-vote-question__wrapper'}>
                <span>{materialsVoteQuestion}</span>
                    <img className="materials-vote-question-select-arrow" src={material_vote_row} alt="Стрелочка открытия меню" onClick={() => setMaterialsModalActive(!materialsModalActive)}/>
                <MaterialsVoteQuestionModal active={materialsModalActive} setActive={setMaterialsModalActive}/>
            </div>
    )
}

export default MaterialsVoteQuestion;