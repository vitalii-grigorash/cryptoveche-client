import React from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = ({checkBoxNameRow}) => {

    return (
                <div className={'call-voting-card-checkbox__list-answer'}>
                    <div className={'call-voting-card-checkbox__name-question'}>{checkBoxNameRow}</div>
                        <label className={'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span className={'call-voting-checkbox__checkmark'}/>
                        </label>
                        <label className={'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span className={'call-voting-checkbox__checkmark'}/>
                        </label>
                        <label className={'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span className={'call-voting-checkbox__checkmark'}/>
                        </label>
                </div>
    )
}

export default CallVotingCheckBox;