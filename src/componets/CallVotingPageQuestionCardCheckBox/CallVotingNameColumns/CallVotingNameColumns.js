import React from "react";
import './CallVotingNameColumns.css';


const CallVotingNameColumns = ({nameColumn}) => {
    return (
        <>
            <th className={'call-voting-name-columns__wrapper'}>{nameColumn}</th>
        </>
        )
}
export default CallVotingNameColumns;