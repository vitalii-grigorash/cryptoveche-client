import React from "react";
import './CallVotingList.css';


const CallVotingList = ({labelCheckbox, activeCheck}) => {


    return (
                <div>
                    <label className={'checkbox_container'}>
                        <input type="checkbox" value="yes" checked={activeCheck}/>{labelCheckbox}
                        <span className={'checkmark-row'}/>
                    </label>
                </div>

    )
}

export default CallVotingList;