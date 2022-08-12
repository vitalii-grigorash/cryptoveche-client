import React, { useState } from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = (props) => {

    const {
        id,
        question,
        isListView,
        rowId,
        addAnswerToArray,
        removeAnswerFromArray
    } = props;

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    function onCheckboxClick() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
            removeAnswerFromArray(rowId);
        } else {
            setCheckboxChecked(true);
            addAnswerToArray(rowId, id);
        }
    }

    return (
        <div className={!isListView ? 'call-voting-checkbox__wrapper' : 'call-voting-checkbox__wrapper-view-list'}>
            <label className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                <input
                    type="checkbox"
                    name={rowId}
                    checked={isCheckboxChecked}
                    onChange={onCheckboxClick}
                />
                {!isListView ? (
                    <span className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'} />
                ) : (
                    <span className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__checkmark call-voting-checkbox__view-left' : 'call-voting-checkbox__checkmark call-voting-checkbox__view-left'} />
                )}
            </label>
        </div>
    )
}

export default CallVotingCheckBox;
