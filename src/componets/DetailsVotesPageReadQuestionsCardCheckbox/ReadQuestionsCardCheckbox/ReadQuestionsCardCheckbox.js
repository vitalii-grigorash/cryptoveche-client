import React from "react";
import './ReadQuestionsCardCheckbox.css';


const ReadQuestionsCardCheckbox = ({checkBoxReadQuestion, activeRadioCheck}) => {


    return (
            <>
                <td className={'call-voting-checkbox__wrapper'}>
                    <label
                        className={activeRadioCheck ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                        <input type="checkbox" value="yes"/>
                        <span
                            className={activeRadioCheck ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'}/>{checkBoxReadQuestion}
                    </label>
                </td>
            </>
    )
}

export default ReadQuestionsCardCheckbox;