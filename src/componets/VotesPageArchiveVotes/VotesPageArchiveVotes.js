import React from "react";
import './VotesPageArchiveVotes.css';
import VotePageBtnResults from "../VotesStatusComponents/VotePageBtnResults/VotePageBtnResults";
import {useActArchVoteContext} from "../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";


const VotesPageArchiveVotes = () => {

    const hide = useActArchVoteContext()

    if (!hide) return null

    return (
            <div className={'votes-page-archive-votes__wrapper'}>
                <VotePageBtnResults/>
            </div>
    )
}

export default VotesPageArchiveVotes;