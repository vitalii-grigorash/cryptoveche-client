import React from "react";
import './CallVotingPageCheckboxColumns.css';
import CallVotingPageCheckboxRow from "../CallVotingPageCheckboxRow/CallVotingPageCheckboxRow";

const CallVotingPageCheckboxColumns = ({nameColumns}) => {

    return (

        <div className={'call-voting-page-check-columns__wrapper'}>
            <span>{nameColumns}</span>
            <div className={'call-voting-page-check-columns__checkbox'}>
                <CallVotingPageCheckboxRow/>
                <CallVotingPageCheckboxRow/>
                <CallVotingPageCheckboxRow/>
                <CallVotingPageCheckboxRow/>

            </div>
        </div>
    )

}

export default CallVotingPageCheckboxColumns;