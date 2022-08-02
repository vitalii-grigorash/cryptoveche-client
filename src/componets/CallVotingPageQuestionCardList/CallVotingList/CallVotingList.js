import React, {useContext, useState} from "react";
import './CallVotingList.css';
import {CallVotingListContext} from "../../../contexts/CallVotingListContext";



const CallVotingList = ({nameAnswer, onClickCheck, checkListId}) => {

    const setCount = useContext(CallVotingListContext)

    // console.log(Object.entries(checkCount).length)

    function onClickCheck () {
        console.log(checkListId)
        console.log(nameAnswer)
    }
    const [getIdAnswer, setGetIdAnswer] = useState({
        id: checkListId
    })

  // console.log(checkCount)

    return (
                <div className={'www'}>
                    <label className={'checkbox_container'}>
                        <input onClick={setCount.changeCountAnswer}  type="checkbox" name={checkListId}/>
                        <span className={'checkmark-row'}/>
                    </label>
                    <span className={'call-voting-list__name-answer'}>{nameAnswer}</span>
                </div>
    )
}
export default CallVotingList;