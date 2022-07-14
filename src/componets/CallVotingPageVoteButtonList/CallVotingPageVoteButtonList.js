import React, {useEffect, useRef, useState} from "react";
import './CallVotingPageVoteButtonList.css';

const CallVotingPageVoteButtonList = (props) => {
    const {
        currentSelectAnswer,
        active
    } = props;

    // let countSelectAnswer = currentSelectAnswer;
    const [enableRevoting, setEnableRevoting] = useState(true)
    const [disableRevoting, setDisbleRevoting] = useState(false)
    const changeColorBtn = useRef(null)

    // useEffect(() => {
    //     console.log(countSelectAnswer)
    //
    // }, [countSelectAnswer])






    return (
            <>
                {enableRevoting && (
                    <>
                        <button ref={changeColorBtn} className={active ? 'call-voting-page-vote-button-list__button active' :'call-voting-page-vote-button-list__button'}>Проголосовать</button>
                        <button className={active ? 'call-voting-page-revote-button-list__button active' : 'call-voting-page-revote-button-list__button'}>Переголосовать</button>
                    </>
                )
                }
                {disableRevoting && (
                    <>
                    <button ref={changeColorBtn} className={active ? 'call-voting-page-vote-button-list__button active' :'call-voting-page-vote-button-list__button'}>Проголосовать</button>
                    </>
                )
                }
            </>
    )
}
export default CallVotingPageVoteButtonList;