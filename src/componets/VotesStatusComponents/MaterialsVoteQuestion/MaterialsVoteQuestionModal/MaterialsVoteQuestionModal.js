import React from "react";
import './MaterialsVoteQuestionModal.css';
import load_doc_icon from '../../../../img/Materials_vote_modal_load_icon.svg';
 import show_doc from '../../../../img/Materials_vote_modal_show_doc_icon.svg';

const MaterialsVoteQuestionModal = () => {

    return (
            <div className={'materials-vote-question-modal__wrapper'}>
                <div>
                    <span>Document_1.pdf</span>
                    <div>
                        <img alt={'скачать материалы'} src={load_doc_icon}/>
                        <img alt={'показать документы'} src={show_doc}/>
                    </div>
                </div>
                <div>
                    <span>One_more_document_for_voting.doc</span>
                    <div>
                        <img alt={'скачать материалы'} src={load_doc_icon}/>
                        <img alt={'показать документы'} src={show_doc}/>
                    </div>
                </div>
                <a href={'#'} target={'_blank'}>https://collectui.com/challenges/dropdown</a>
            </div>
    )
}
export default MaterialsVoteQuestionModal;