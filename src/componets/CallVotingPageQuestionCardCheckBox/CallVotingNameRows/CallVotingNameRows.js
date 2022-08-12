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
        isListView
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
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CallVotingNameRows;
