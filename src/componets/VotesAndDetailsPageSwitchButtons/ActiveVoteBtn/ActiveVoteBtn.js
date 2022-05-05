import React from "react";
import './ActiveVoteBtn.css';


const ActiveVoteBtn = ({hidden}) => {

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Активные голосования</h2>
        </div>
    )
}

export default ActiveVoteBtn;