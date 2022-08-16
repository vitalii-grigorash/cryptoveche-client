import React from "react";
import './CallVotingNameRows.css';
import CallVotingCheckBox from '../CallVotingCheckBox/CallVotingCheckBox';
import CallVotingNameColumns from '../CallVotingNameColumns/CallVotingNameColumns';

const CallVotingNameRows = (props) => {

    const {
        rowId,
        rowValue,
        question,
        columns,
        isListView,
        addAnswerToArray,
        removeAnswerFromArray,
        isBulletinVoted,
        answersArray
    } = props;

    return (
        <>
            {!isListView ? (
                <div className={'call-voting-name-rows__wrapper'}>
                    <div className={'call-voting-name-rows__name-row'}>
                        <p>{rowValue}</p>
                    </div>
                    {columns.map(column => (
                        (
                            <CallVotingCheckBox
                                key={column.id}
                                id={column.id}
                                question={question}
                                isListView={isListView}
                                rowId={rowId}
                                addAnswerToArray={addAnswerToArray}
                                removeAnswerFromArray={removeAnswerFromArray}
                                isBulletinVoted={isBulletinVoted}
                                answersArray={answersArray}
                            />
                        )
                    ))}
                </div>
            ) : (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '24px' }}>
                        <p>{rowValue}</p>
                        {columns.map(column => (
                            <CallVotingNameColumns
                                key={column.id}
                                columnValue={column.value}
                                question={question}
                                isListView={isListView}
                                column={column}
                                rowId={rowId}
                                addAnswerToArray={addAnswerToArray}
                                removeAnswerFromArray={removeAnswerFromArray}
                                isBulletinVoted={isBulletinVoted}
                                answersArray={answersArray}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CallVotingNameRows;
