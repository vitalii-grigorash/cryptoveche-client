import React from "react";
import './CallVotingPageCheckboxRow.css';


const CallVotingPageCheckboxRow = ({labelCheckbox}) => {


    return (

                <div>
                    <label className={'checkbox_container'}>
                        <input type="checkbox" value="yes"/>{labelCheckbox}
                        <span className={'checkmark-row'}/>
                    </label>
                </div>

    )
}

export default CallVotingPageCheckboxRow;