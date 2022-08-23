import React, {useEffect, useState} from "react";
import './MaterialsVoteQuestionModal.css';
import MaterialsVoteQuestionModalDocuments
    from "./MaterialsVoteQuestionModalDocuments/MaterialsVoteQuestionModalDocuments";
import MaterialsVoteQuestionModalLinks from "./MaterialsVoteQuestionModalLinks/MaterialsVoteQuestionModalLinks";

const MaterialsVoteQuestionModal = (props) => {

    const {
            active,
            setActive,
            currentMaterialsVote,
            currentMaterialsQuestion
        } = props;

    const [typeDocument, setTypeDocument] = useState([])
    const [typeLink, setTypeLink] = useState([])

    function getTypeDocumentMaterialsVote(type) {
        const filteredCurrentMaterialsVoteDocument = type.filter(elem => elem.type === 'doc');
        setTypeDocument(filteredCurrentMaterialsVoteDocument);
    }

    function getTypeLinkMaterialsVote(type) {
        const filteredCurrentMaterialsVoteLink = type.filter(elem => elem.type === 'link');
        setTypeLink(filteredCurrentMaterialsVoteLink);
    }

    function getTypeDocumentMaterialsQuestion(type) {
        const filteredCurrentMaterialsQuestionDocument = type.filter(elem => elem.type === 'doc');
        setTypeDocument(filteredCurrentMaterialsQuestionDocument);
    }

    function getTypeLinkMaterialsQuestion(type) {
        const filteredCurrentMaterialsQuestionDocument = type.filter(elem => elem.type === 'link');
        setTypeLink(filteredCurrentMaterialsQuestionDocument);
    }

    useEffect(() => {
        if(currentMaterialsVote){
            getTypeDocumentMaterialsVote(currentMaterialsVote)
            getTypeLinkMaterialsVote(currentMaterialsVote)
        } else {
            if(currentMaterialsQuestion) {
                getTypeDocumentMaterialsQuestion(currentMaterialsQuestion)
                getTypeLinkMaterialsQuestion(currentMaterialsQuestion)
        }
        }
    }, [currentMaterialsVote, currentMaterialsQuestion])

    useOnClickOutsideMaterialsVoteModal(active, () => setActive(false));

    function useOnClickOutsideMaterialsVoteModal(active, handler) {
        useEffect(() => {
            const listener = (e) => {
                if (!active) {
                    return;
                }
                handler(e);
            };
            document.addEventListener('click', listener);
            return function () {
                document.removeEventListener('click', listener);
            };
        }, [active, handler])
    }

    return (
            <div className={active ? 'materials-vote-question-modal__wrapper active' : 'materials-vote-question-modal__wrapper'}>
                <div className={active ? 'materials-vote-question-modal__content active' : 'materials-vote-question-modal__content'} onClick={e => e.stopPropagation()}>
                    {typeDocument.map(item => {
                        return (
                            <MaterialsVoteQuestionModalDocuments
                                key={item.value}
                                nameDocument={item.title}
                                valueDocument={item.value}/>
                        )
                        })
                    }
                    {typeLink.map(el => {
                        return (
                            <MaterialsVoteQuestionModalLinks
                                key={el.value}
                                nameLink={el.value}/>
                        )
                    })
                    }
                </div>
            </div>
    )
}
export default MaterialsVoteQuestionModal;