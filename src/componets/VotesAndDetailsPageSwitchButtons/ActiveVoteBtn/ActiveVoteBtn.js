import React, {useEffect, useRef, useState} from "react";
import './ActiveVoteBtn.css';
import {useToggleActVote} from "../../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";





const ActiveVoteBtn = ({hidden}) => {

    const toggleAct = useToggleActVote();
    const fixedBorderRef = useRef(null);


        // btn.addEventListener('click', (e) => {
        //     console.log('fff');
        // });

    // useEffect(() => {
    //           const changeBorder = fixedBorderRef;
    //
    //         function clickHand () {
    //             changeBorder.current.className = ('active-votes-and-details-page-switch-buttons__button')
    //         }
    //         changeBorder.current.addEventListener('click', clickHand)
    //          return function () {
    //              document.removeEventListener('click', clickHand);
    //              changeBorder.current.className = ('votes-and-details-page-switch-buttons__button')
    //         }
    //     });


    return (
            <div>
                <h2 ref={fixedBorderRef} className={'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={toggleAct}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
            </div>
    )
}

export default ActiveVoteBtn;