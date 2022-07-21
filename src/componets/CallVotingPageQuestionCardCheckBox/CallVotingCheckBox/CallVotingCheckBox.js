import React, {useState} from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = ({callVotingCheckProp, activeRadioCheck}) => {

    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)

    return (

            <>
                {activeViewTableCheck &&
                    <td className={'call-voting-checkbox__wrapper'}>
                        <label
                            className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span
                                className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'}/>{callVotingCheckProp}
                        </label>
                    </td>
                }
                {activeViewListCheck &&
                    <span className={'call-voting-checkbox__wrapper-view-list'}>
                        <label className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark call-voting-checkbox__view-left' : 'call-voting-checkbox__checkmark call-voting-checkbox__view-left'}/>{callVotingCheckProp}
                        </label>
                    </span>
                }
            </>

    )
}

export default CallVotingCheckBox;