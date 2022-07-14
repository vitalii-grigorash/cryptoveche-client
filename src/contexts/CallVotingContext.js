import { createContext, useReducer } from "react";
import callVotingReducer, {initialState} from "../reducer/callVotingReducer";

const CallVotingContext = createContext(initialState)

export const CallVotingProvider = ({children}) => {
    const [state, dispath] = useReducer(callVotingReducer, initialState);

    const addCard = (card) => {
        const updateCard = state.cards.concat(card)
        updateCount(updateCard)

        dispath({
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

        dispath({
            type: "REMOVE_COUNT",
            payload: {
                cards: updateCard
            }
        })
    }
    const updateCount = (cards) => {
        let count = 0
        cards.forEach((card) => count += card.counter)

        dispath({
            type: "REMOVE_COUNT",
            payload: {
                count
            }
        });
    };
    return <CallVotingContext.Provider>{children}</CallVotingContext.Provider>
};