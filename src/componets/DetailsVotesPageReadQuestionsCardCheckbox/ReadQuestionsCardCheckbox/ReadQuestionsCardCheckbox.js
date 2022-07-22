import React from "react";
import './ReadQuestionsCardCheckbox.css';


const ReadQuestionsCardCheckbox = ({checkBoxReadQuestion, activeRadioCheck}) => {


    return (
            <>
                <td className={'read-question-checkbox__wrapper'}>
                    <label
                        className={activeRadioCheck ? 'read-question-checkbox-radio__container' : 'read-question-checkbox__container'}>
                        <input type="checkbox" value="yes"/>
                        <span
                            className={activeRadioCheck ? 'read-question-checkbox-radio__checkmark' : 'read-question-checkbox__checkmark'}/>{checkBoxReadQuestion}
                    </label>
                </td>
            </>
    )
}

export default ReadQuestionsCardCheckbox;