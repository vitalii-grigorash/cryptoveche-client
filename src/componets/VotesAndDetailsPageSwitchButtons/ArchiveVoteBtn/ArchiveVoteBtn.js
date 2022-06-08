import React, {useEffect, useRef} from "react";
import './ArchiveVoteBtn.css';
import {useToggleArchVote} from "../../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";



const ArchiveVoteBtn = ({hidden}) => {

    const toggleArch = useToggleArchVote()


    return (
                <div>
                    <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={toggleArch}>Архивные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
                </div>
    )
}

export default ArchiveVoteBtn;