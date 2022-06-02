import React from "react";
import './ArchiveVoteBtn.css';
import {useNavigate} from "react-router-dom";

const ArchiveVoteBtn = ({hidden}) => {



    return (
            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Архивные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
            </div>
    )
}

export default ArchiveVoteBtn;