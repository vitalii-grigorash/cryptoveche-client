import React, {useState} from "react";
import './CallVotingNameColumns.css';
import callVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";
import CallVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";


const CallVotingNameColumns = ({nameColumn, activeRadioCheck}) => {

    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)

    return (
        <>
            {activeViewTableCheck &&
                <th className={'call-voting-name-columns__wrapper'}>{nameColumn}</th>
            }
            {activeViewListCheck &&
                <span className={'call-voting-name-columns__wrapper-active-view-list'}><CallVotingCheckBox activeRadioCheck={activeRadioCheck}/>{nameColumn}</span>
            }
        </>
        )
}
export default CallVotingNameColumns;