import React, {useEffect, useRef, useState} from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = ({activeVoteBtn,  activeRevoteBtn}) => {



    // let countSelectAnswer = currentSelectAnswer;
    const [enableVoting, setEnableVoting] = useState(false)
    const [enableRevoting, setEnableRevoting] = useState(true)
    const changeColorBtn = useRef(null)

    // const currentCount = React.useContext()



    return (
            <>
                {enableRevoting && (
                    <>
                        <button ref={changeColorBtn} className={activeVoteBtn ? 'call-voting-page-vote-button-list__button active' :'call-voting-page-vote-button-list__button'}>Проголосовать</button>
                        <button className={activeRevoteBtn ? 'call-voting-page-revote-button-list__button active' : 'call-voting-page-revote-button-list__button'}>Переголосовать</button>
                    </>
                )
                }
                {enableVoting && (
                    <>
                    <button ref={changeColorBtn} className={activeVoteBtn ? 'call-voting-page-vote-button-list__button active' :'call-voting-page-vote-button-list__button'}>Проголосовать</button>
                    </>
                )
                }
            </>
    )
}
export default CallVotingPageVoteButtonList;