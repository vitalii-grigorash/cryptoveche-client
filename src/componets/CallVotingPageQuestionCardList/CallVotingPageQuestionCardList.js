import React, {useState, useReducer} from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import useShop from "../../contexts/CallVotingContext";



const CallVotingPageQuestionCardList = (props) => {

    const {
        questionName, chooseAnswer, selectValue, labelCheckbox
    } = props;

    // const {cards,addCard,removeCard} = useShop()
    const [isCheck, setIsCheck] = useState(false)





    function reducer(state, action) {
        switch (action.type) {
            case 'plus':
                return {
                    ...state,
                    count: state.count + 1
                };
            case 'minus':
                return {
                    ...state,
                    count: state.count - 1
                }
            default:
                return state;
        }
    }

        const [state, dispatch] = useReducer(reducer, {
            count: 0 });





        //
    // useEffect(() => {
    //     const cardIsCheck = cards.find((card) => card.id === titleName)
    //     if(cardIsCheck) {
    //         setIsCheck(true);
    //     }else {
    //         setIsCheck(false);
    //     }
    //
    // }, [cards, titleName])
    // //
    // const handleClick = () => {
    //     const card = {titleName, selectValue};
    //     if (selectValue === 0) {
    //         selectValue++;
    //     }
    // }

    return (
            <div className={'call-voting-page-question-card-list__wrapper'}>
                    <div className={'call-voting-page-question-card-list__title'}>
                        <h3>{questionName}</h3>
                        <div className={'call-voting-page-question-card-list__select-answer'}>
                            <span>{chooseAnswer}</span>
                            <span>Сейчас выбрано: {selectValue}</span>
                        </div>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'}/>
                    </div>
                    <div className={'call-voting-page-question-card-list__main-content'}>
                        {labelCheckbox}
                    </div>
                <CallVotingPageVoteButtonList/>
            </div>
    )
}
export default CallVotingPageQuestionCardList;