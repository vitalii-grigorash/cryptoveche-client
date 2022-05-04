import React from "react";
import './CallVotingPageCheckboxAnswer.css';


const CallVotingPageCheckboxAnswer = ({labelCheckbox}) => {


    return (

                <div>
                    <label className={'checkbox_container'}>
                        <input type="checkbox" value="yes"/>{labelCheckbox}
                        <span className={'checkmark-checkbox-answer'}/>
                    </label>
                </div>

    )
}

export default CallVotingPageCheckboxAnswer;