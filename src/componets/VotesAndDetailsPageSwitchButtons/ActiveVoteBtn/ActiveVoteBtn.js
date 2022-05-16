import React from "react";
import './ActiveVoteBtn.css';


const ActiveVoteBtn = ({hidden}) => {

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
        </div>
    )
}

export default ActiveVoteBtn;