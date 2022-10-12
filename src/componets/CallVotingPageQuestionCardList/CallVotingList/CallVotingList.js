import React, { useEffect, useState } from "react";
import './CallVotingList.css';

const CallVotingList = (props) => {

    const {
        rowId,
        nameAnswer,
        addAnswerToArray,
        removeAnswerFromArray,
        questionColumns,
        isBulletinVoted
    } = props;

    const columnId = questionColumns[0].id;

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    useEffect(() => {
        if (isBulletinVoted) {
            setCheckboxChecked(false);
        }
    }, [isBulletinVoted])

    function onCheckboxClick() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
            removeAnswerFromArray(rowId);
        } else {
            setCheckboxChecked(true);
            addAnswerToArray(rowId, columnId);
        }
    }

    return (
        <div className='www'>
            {isBulletinVoted ? (
                <div className='call-voting-list__blue-square-container'>
                    <div className="call-voting-list__blue-square" />
                    <span className='call-voting-list__text'>{nameAnswer}</span>
                </div>
            ) : (
                <div className="checkbox__main-container">
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
            )}
        </div>
    )
}

export default CallVotingList;
