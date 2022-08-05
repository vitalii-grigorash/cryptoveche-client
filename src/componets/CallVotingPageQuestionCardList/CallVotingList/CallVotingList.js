import React, { useState } from "react";
import './CallVotingList.css';

const CallVotingList = (props) => {

    const {
        rowId,
        nameAnswer,
        addAnswerToArray,
        removeAnswerFromArray,
        questionColumns
    } = props;

    const columnId = questionColumns[0].id

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    function onCheckboxClick() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
            removeAnswerFromArray(rowId);
        } else {
            setCheckboxChecked(true);
            console.log(rowId);
            addAnswerToArray(rowId, columnId);
        }
    }

    return (
        <div className='www'>
            <label className='checkbox_container'>
                <input
                    type="checkbox"
                    name={rowId}
                    checked={isCheckboxChecked}
                    onChange={onCheckboxClick}
                />
                <span className='checkmark-row' />
            </label>
            <span className='call-voting-list__name-answer'>{nameAnswer}</span>
        </div>
    )
}

export default CallVotingList;
