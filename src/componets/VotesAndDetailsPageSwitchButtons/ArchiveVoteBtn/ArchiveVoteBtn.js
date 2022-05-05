import React from "react";
import './ArchiveVoteBtn.css';

const ArchiveVoteBtn = ({hidden}) => {


    return (

            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Архивные голосования</h2>
            </div>

    )
}

export default ArchiveVoteBtn;