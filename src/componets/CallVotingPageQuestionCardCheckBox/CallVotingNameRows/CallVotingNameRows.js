import React from "react";
import './CallVotingNameRows.css';
import CallVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";
import callVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";

const CallVotingNameRows = ({checkBoxNameRow, callVotingCheckProp}) => {



    return (
                <div className={'call-voting-card-checkbox__list-answer'}>
                    <div className={'call-voting-card-checkbox__name-question'}>{checkBoxNameRow}</div>
                    <CallVotingCheckBox callVotingCheckProp={callVotingCheckProp}/>
                    <CallVotingCheckBox callVotingCheckProp={callVotingCheckProp}/>
                    <CallVotingCheckBox callVotingCheckProp={callVotingCheckProp}/>
                </div>
    )
}

export default CallVotingNameRows;