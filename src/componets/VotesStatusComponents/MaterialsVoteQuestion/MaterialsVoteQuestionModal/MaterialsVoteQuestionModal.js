import React, {useEffect} from "react";
import './MaterialsVoteQuestionModal.css';
import MaterialsVoteQuestionModalDocuments
    from "./MaterialsVoteQuestionModalDocuments/MaterialsVoteQuestionModalDocuments";
import MaterialsVoteQuestionModalLinks from "./MaterialsVoteQuestionModalLinks/MaterialsVoteQuestionModalLinks";

const MaterialsVoteQuestionModal = ({active, setActive}) => {


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
                    <MaterialsVoteQuestionModalDocuments/>
                    <MaterialsVoteQuestionModalLinks/>
                </div>
            </div>
    )
}
export default MaterialsVoteQuestionModal;