import React from "react";
import './MaterialsVoteQuestionModal.css';
import load_doc_icon from '../../../../img/Materials_vote_modal_load_icon.svg';
 import show_doc from '../../../../img/Materials_vote_modal_show_doc_icon.svg';

const MaterialsVoteQuestionModal = ({active, setActive}) => {

    return (
            <div className={active ? 'materials-vote-question-modal__wrapper active' : 'materials-vote-question-modal__wrapper'}>
                <div className={active ? 'materials-vote-question-modal__content active' : 'materials-vote-question-modal__content'} onClick={e => e.stopPropagation()}>
                    <div className={'materials-vote-question-modal__document-icons'}>
                        <span>Document_1.pdf</span>
                        <div className={'document-icons__icons-block'}>
                            <img alt={'показать документы'} src={show_doc}/>
                            <img alt={'скачать материалы'} src={load_doc_icon}/>
                        </div>
                    </div>
                    <div className={'materials-vote-question-modal__document-icons'}>
                        <span>One_more_document_for_voting.doc</span>
                        <div className={'document-icons__icons-block'}>
                            <img alt={'показать документы'} src={show_doc}/>
                            <img alt={'скачать материалы'} src={load_doc_icon}/>
                        </div>
                    </div>
                        <a href={'https://collectui.com/'} target={'_blank'} rel={'noopener noreferrer nofollow'}>https://collectui.com/challenges/dropdown</a>
                    </div>
            </div>
    )
}
export default MaterialsVoteQuestionModal;