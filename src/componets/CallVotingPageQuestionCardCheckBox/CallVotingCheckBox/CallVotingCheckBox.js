import React from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = ({callVotingCheckProp}) => {

    return (
        <>
            <label className={'call-voting-checkbox__container'}>
                <input type="checkbox" value="yes"/>
                <span className={'call-voting-checkbox__checkmark'}/>{callVotingCheckProp}
            </label>
        </>

    )
}

export default CallVotingCheckBox;