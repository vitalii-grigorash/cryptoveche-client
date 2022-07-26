import React, {useState} from "react";
import './CallVotingNameRows.css';



const CallVotingNameRows = ({nameRowAnswer, nameColumn, checkGridId}) => {


    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)

    return (
        <>
            {activeViewTableCheck &&
                <tr className={'call-voting-name-rows__wrapper'}>
                    <td className={'call-voting-name-rows__name-row'}>
                        {nameRowAnswer}
                    </td>
                    {checkGridId}
                </tr>
            }
            {activeViewListCheck &&
                <tr>
                    <td style={{display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '24px'}}>
                        {nameRowAnswer}
                        {nameColumn}
                    </td>
                </tr>
            }
        </>
    )
}

export default CallVotingNameRows;