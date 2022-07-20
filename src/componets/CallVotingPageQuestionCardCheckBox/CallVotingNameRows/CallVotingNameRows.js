import React from "react";
import './CallVotingNameRows.css';


const CallVotingNameRows = ({nameRow, callVotingCheckProp}) => {



    return (
        <>
            <tr className={'call-voting-name-rows__wrapper'}>
                <td className={'call-voting-name-rows__name-row'}>
                    {nameRow}
                </td>
                    {callVotingCheckProp}
            </tr>
        </>
    )
}

export default CallVotingNameRows;