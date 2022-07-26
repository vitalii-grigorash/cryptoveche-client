import React from "react";
import './CallVotingList.css';


const CallVotingList = ({labelCheckbox, activeCheck, onClickCheck}) => {



    return (
                <div>
                    <label className={'checkbox_container'}>
                        <input onClick={onClickCheck} type="checkbox" value="yes" defaultChecked={activeCheck}/>{labelCheckbox}
                        <span className={'checkmark-row'}/>
                    </label>
                </div>

    )
}

export default CallVotingList;