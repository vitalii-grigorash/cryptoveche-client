import React, {useEffect, useRef, useState} from "react";
import './ActiveVoteBtn.css';
import {useToggleActVote} from "../../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";



const ActiveVoteBtn = ({hidden}) => {

    const toggleAct = useToggleActVote();
    const [styleBtn, setStyleBtn] = useState(true)



    useEffect(() => {
        const remoteBorder = () => {
            if (styleBtn === true) {
                setStyleBtn(false)
            }
        }
            document.addEventListener('click', remoteBorder);
            console.log('remote')
         return function () {
                document.removeEventListener('click', remoteBorder)
         }
    },[styleBtn]);

    const addBorder = () => {
        if (styleBtn === false) {
            setStyleBtn(true)
            console.log(styleBtn)
        }

    }


    //     const addBorder = () => {
    //         if (styleBtn === false) {
    //             setStyleBtn(true)
    //             console.log('add')
    //         }
    //     }
    //
    // useEffect(() => {
    //     const remoteBorder = () => {
    //         if (styleBtn === true) {
    //             setStyleBtn(false)
    //         }
    //         document.addEventListener('click', remoteBorder)
    //     }
    // }, [styleBtn]);

    return (
            <div>
                <h2 className={styleBtn ? 'active-votes-and-details-page-switch-buttons__button' : 'votes-and-details-page-switch-buttons__button'} onClick={() => {toggleAct(); addBorder();}} hidden={hidden}>Активные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
            </div>
    )
}

export default ActiveVoteBtn;