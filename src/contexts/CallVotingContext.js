import {createContext, useContext, useReducer} from "react";
import callVotingReducer, {initialState} from "../reducer/callVotingReducer";

const CallVotingContext = createContext(initialState)

export const CallVotingProvider = ({children}) => {
    const [state, dispatch] = useReducer(callVotingReducer, initialState);

    const addCard = (card) => {
        const updateCard = state.cards.concat(card)
        updateCount(updateCard)

        dispatch({
            type: "ADD_COUNT",
            payload: {
                cards: updateCard
            }
        })
    }

    const removeCard = (card) => {
        const updateCard = state.cards.filter((currentCard) =>
            currentCard.name !== card.name)
        updateCount(updateCard)

        dispatch({
            type: "REMOVE_COUNT",
            payload: {
                cards: updateCard
            }
        })
    }
    const updateCount = (cards) => {
        let counter = 0
        cards.forEach((card) => counter += card.counter)

        dispatch({
            type: "REMOVE_COUNT",
            payload: {
                counter
            }
        });
    };
    const value = {
        counter: state.counter,
        cards: state.cards,
        addCard,
        removeCard
    };
    return <CallVotingContext.Provider value={value}>{children}</CallVotingContext.Provider>;
};

const useShop = () => {
    const context = useContext(CallVotingContext)

    if (context === undefined){
        throw new Error('useShop must be used')
    }
    return context
}

export default useShop