import React from "react";
import './CallVotingList.css';


const CallVotingList = ({labelCheckbox}) => {


    return (
                <div>
                    <label className={'checkbox_container'}>
                        <input type="checkbox" value="yes" />{labelCheckbox}
                        <span className={'checkmark-row'}/>
                    </label>
                </div>

    )
}

export default CallVotingList;