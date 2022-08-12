import React from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = (props) => {

    const {
        id,
        question,
        isListView,
        rowId
    } = props;

    function onGetIdCheck() {
        console.log(`id строки ${rowId}`);
        console.log(`id столбца ${id}`);
    }

    return (
        <div className={!isListView ? 'call-voting-checkbox__wrapper' : 'call-voting-checkbox__wrapper-view-list'}>
            <label className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                <input onClick={onGetIdCheck} type="checkbox" />
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
