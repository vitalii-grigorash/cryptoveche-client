import React, {useEffect, useRef, useState} from "react";
import './ArchiveVoteBtn.css';
import {useToggleArchVote} from "../../VotesPage/ChangeActArchVoteContext/ChangeActArchVoteContext";



const ArchiveVoteBtn = ({hidden}) => {

    const toggleArch = useToggleArchVote()
    const [styleBtnArchive, setStyleBtnArchive] = useState(false)

    useEffect(() => {
        const remoteBorder = () => {
            if (styleBtnArchive === true) {
                setStyleBtnArchive(false)
            }
        }
        document.addEventListener('click', remoteBorder);
        console.log('remote')
        return function () {
            document.removeEventListener('click', remoteBorder)
        }
    },[styleBtnArchive]);

    const addBorder = () => {
        if (styleBtnArchive === false) {
            setStyleBtnArchive(true)
            console.log(styleBtnArchive)
        }

    }


    return (
                <div>
                    <h2 className={styleBtnArchive ? 'active-votes-and-details-page-switch-buttons__button' : 'votes-and-details-page-switch-buttons__button'} hidden={hidden} onClick={() =>{toggleArch(); addBorder();}}>Архивные <span className={'_active-vote-bnt _mobile-active-vote-bnt'}>голосования</span></h2>
                </div>
    )
}

export default ArchiveVoteBtn;