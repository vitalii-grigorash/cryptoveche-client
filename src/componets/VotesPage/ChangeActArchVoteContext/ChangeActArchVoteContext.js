import React, {useContext, useState} from "react";

const ChangeActArchVoteContext = React.createContext()
const ToggleArchVote = React.createContext()
const ToggleActVote = React.createContext()

export const useActArchVoteContext = () => {
    return useContext(ChangeActArchVoteContext)
}

export const useToggleArchVote = () => {
    return useContext(ToggleArchVote)
}

export const useToggleActVote = () => {
    return useContext(ToggleActVote)
}
export const ChangeActArchVoteProvider = ({children}) => {

    const [hide, setHide] = useState(false)

    const toggleArch = () => setHide(true)
    const toggleAct = () => setHide(false)

    return (
        <ChangeActArchVoteContext.Provider value={hide}>
            <ToggleArchVote.Provider value={toggleArch}>
                <ToggleActVote.Provider value={toggleAct}>
                    { children }
                </ToggleActVote.Provider>
            </ToggleArchVote.Provider>
        </ChangeActArchVoteContext.Provider>
    )
}
