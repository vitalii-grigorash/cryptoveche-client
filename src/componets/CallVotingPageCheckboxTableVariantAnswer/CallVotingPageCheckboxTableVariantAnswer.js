import React from "react";
import './CallVotingPageCheckboxTableVariantAnswer.css';

const CallVotingPageCheckboxTableVariantAnswer = ({variantName}) => {


    return (

        <div className={'call-voting-page-check-table-variant__wrapper'}>
            <span>{variantName}</span>
        </div>
    )
}

export default CallVotingPageCheckboxTableVariantAnswer;