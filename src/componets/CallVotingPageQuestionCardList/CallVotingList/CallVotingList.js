import React from "react";
import './CallVotingList.css';


const CallVotingList = ({nameAnswer, activeCheck, onClickCheck, checkListId}) => {


    onClickCheck = function () {
        console.log(checkListId)
        console.log(nameAnswer)
    }

    return (
                <div>
                    <label className={'checkbox_container'}>
                        <input onClick={onClickCheck} type="checkbox" value="yes" defaultChecked={activeCheck} name={checkListId}/>{nameAnswer}
                        <span className={'checkmark-row'}/>
                    </label>
                </div>

    )
}
export default CallVotingList;