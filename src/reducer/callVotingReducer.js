export const initialState = {
    counter: 0,
    cards: []
}

const callVotingReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_COUNT":
            console.log("ADD_COUNT", payload);
            return {
                ...state,
                cards: payload.cards
            };
        case "REMOVE_COUNT":
            console.log("REMOVE_COUNT", payload);
            return {
                ...state,
                cards: payload.cards
            };
        case "UPDATE_COUNT":
            console.log("UPDATE_COUNT", payload);
            return {
                ...state,
                counter: payload.counter
            };
        default:
            throw new Error('ERROR')
    }
};

export default callVotingReducer;