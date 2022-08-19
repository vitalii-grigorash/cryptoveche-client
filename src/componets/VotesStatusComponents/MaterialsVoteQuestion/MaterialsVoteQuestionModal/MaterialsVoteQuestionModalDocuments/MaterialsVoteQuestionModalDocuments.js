import React from "react";
import './MaterialsVoteQuestionModalDocuments.css';
import show_doc from "../../../../../img/Materials_vote_modal_show_doc_icon.svg";
import load_doc_icon from "../../../../../img/Materials_vote_modal_load_icon.svg";


const MaterialsVoteQuestionModalDocuments = () => {

    return (
            <div className={'materials-vote-question-modal__document-icons'}>
                <span>Documentd</span>
                <div className={'document-icons__icons-block'}>
                    <img alt={'показать документы'} src={show_doc}/>
                    <img alt={'скачать материалы'} src={load_doc_icon}/>
                </div>
            </div>
        )
}
export default MaterialsVoteQuestionModalDocuments;