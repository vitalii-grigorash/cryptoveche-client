import React, {useContext, useState} from "react";

const CallVotingListContext = React.createContext();

export const useCallVotingList = () => {
    return useContext(CallVotingListContext)
}

// const CallVotingListCount = React.createContext();
//
// export const useCallVotingCount = () => {
//     return useContext(CallVotingListCount)
// }

export const CallVotingListProvider = ({ children }) => {

    const [countAnswer, setCountAnswer] = useState({
        count: 0
    })
    //
    // const setCount = () => {
    //     setCountAnswer(prev => prev + 1)
    // }
    function setCount() {
        if(countAnswer.count === 0) {
            setCountAnswer({...countAnswer, count: + 1})

        } else if(countAnswer.count > 1) {
            setCountAnswer({...countAnswer, count: - 1})

        } return countAnswer
    }
    return (
            <CallVotingListContext.Provider value={{
                countAnswer,
                setCount
            }}>
                 { children }
            </CallVotingListContext.Provider>
    )
}






