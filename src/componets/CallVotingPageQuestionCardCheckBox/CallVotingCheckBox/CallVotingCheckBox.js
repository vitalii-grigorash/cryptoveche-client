import React, {useState} from "react";
import './CallVotingCheckBox.css';

const CallVotingCheckBox = ({onGetIdCheck, activeRadioCheck, checkColumn, checkIdRow, checkRow}) => {

    const [activeViewTableCheck, setActiveViewTableCheck] = useState(true)
    const [activeViewListCheck, setActiveViewListCheck] = useState(false)

    onGetIdCheck = function () {
        console.log(checkIdRow)
        console.log(checkColumn)
        console.log(checkRow)
    }

    return (

            <>
                {activeViewTableCheck &&
                    <td className={'call-voting-checkbox__wrapper'}>
                        <label
                            className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                            <input onClick={onGetIdCheck} type="checkbox" value={checkRow} name={checkColumn} id={checkIdRow}/>
                            <span
                                className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'}/>
                        </label>
                    </td>
                }
                {activeViewListCheck &&
                    <span className={'call-voting-checkbox__wrapper-view-list'}>
                        <label className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                            <input type="checkbox" value="yes"/>
                            <span className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark call-voting-checkbox__view-left' : 'call-voting-checkbox__checkmark call-voting-checkbox__view-left'}/>
                        </label>
                    </span>
                }
            </>

    )
}

export default CallVotingCheckBox;