import React from "react";
import './CallVotingNameColumns.css';
import CallVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";

const CallVotingNameColumns = (props) => {

    const {
        columnValue,
        question,
        isListView,
        column,
        rowId,
        addAnswerToArray,
        removeAnswerFromArray,
        isBulletinVoted,
        answersArray,
        isMyBulletinTabActive
    } = props;

    return (
        <div className={'call-voting-name-columns__wrapper-active-view-list'}>
            <CallVotingCheckBox
                id={column.id}
                question={question}
                isListView={isListView}
                rowId={rowId}
                addAnswerToArray={addAnswerToArray}
                removeAnswerFromArray={removeAnswerFromArray}
                isBulletinVoted={isBulletinVoted}
                answersArray={answersArray}
                isMyBulletinTabActive={isMyBulletinTabActive}
            />
            <p>{columnValue}</p>
        </div>
    )
}

export default CallVotingNameColumns;
