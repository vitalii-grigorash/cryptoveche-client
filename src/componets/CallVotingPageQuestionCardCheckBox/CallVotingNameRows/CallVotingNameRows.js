import React, {useState} from "react";
import './CallVotingNameRows.css';
import CallVotingNameColumns from "../CallVotingNameColumns/CallVotingNameColumns";
import CallVotingCheckBox from "../CallVotingCheckBox/CallVotingCheckBox";


const CallVotingNameRows = ({nameRow, callVotingCheckProp, nameColumn}) => {


    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)

    return (
        <>
            {activeViewTableCheck &&
                <tr className={'call-voting-name-rows__wrapper'}>
                    <td className={'call-voting-name-rows__name-row'}>
                        {nameRow}
                    </td>
                    {callVotingCheckProp}
                </tr>
            }
            {activeViewListCheck &&
                <tr>
                    <td style={{display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '24px'}}>
                        {nameRow}
                        {nameColumn}
                    </td>
                </tr>
            }
        </>
    )
}

export default CallVotingNameRows;