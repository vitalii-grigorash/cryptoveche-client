import React, {useState} from "react";
import './MaterialsVoteQuestion.css';
import MaterialsVoteQuestionModal from "./MaterialsVoteQuestionModal/MaterialsVoteQuestionModal";
import material_vote_row from '../../../img/Materials_vote_row.svg';
import {useLocation} from "react-router-dom";


const MaterialsVoteQuestion = ({materialsVoteQuestion}) => {

    const [materialsModalActive, setMaterialsModalActive] = useState(false);
    const { pathname } = useLocation();

    return (
            <div onClick={() => setMaterialsModalActive(!materialsModalActive)} className={'materials-vote-question__wrapper'}>
                <span>{pathname === '/' || '/votes-page' ? 'Материалы голосования': 'Материалы вопроса'}</span>
                    <img className="materials-vote-question-select-arrow" src={material_vote_row} alt="Стрелочка открытия меню"/>
                <MaterialsVoteQuestionModal active={materialsModalActive} setActive={setMaterialsModalActive}/>
            </div>
    )
}
export default MaterialsVoteQuestion;