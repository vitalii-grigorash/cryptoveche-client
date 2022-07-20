import React from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = ({callVotingCheckProp, activeRadioCheck}) => {

    return (
        <>
            <td className={'call-voting-checkbox__wrapper'}>
                <label className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                    <input type="checkbox" value="yes"/>
                    <span className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'}/>{callVotingCheckProp}
                </label>
            </td>
        </>

    )
}

export default CallVotingCheckBox;