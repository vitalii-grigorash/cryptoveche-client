import React from "react";
import './CallVotingPageCheckboxTable.css';
import CallVotingPageCheckboxTableVariantAnswer
    from "../CallVotingPageCheckboxTableVariantAnswer/CallVotingPageCheckboxTableVariantAnswer";
import CallVotingPageCheckboxColumns from "../CallVotingPageCheckboxColumns/CallVotingPageCheckboxColumns";

const CallVotingPageCheckboxTable = () => {

    return (
        <div className={'call-voting-page-check-table__wrapper'}>

            <div className={'call-voting-page-check-table__name-variants'}>
                <CallVotingPageCheckboxTableVariantAnswer variantName={'Вариант один какой-то'}/>
                <CallVotingPageCheckboxTableVariantAnswer variantName={'А вот и второй'}/>
                <CallVotingPageCheckboxTableVariantAnswer variantName={'Некий третий варик'}/>
                <CallVotingPageCheckboxTableVariantAnswer variantName={'Довольно длинный четвертый'}/>
            </div>
            <div className={'call-voting-page-check-table__columns-checkbox'}>
                <CallVotingPageCheckboxColumns nameColumns={'Против'}/>
                <CallVotingPageCheckboxColumns nameColumns={'Воздержаться'}/>
                <CallVotingPageCheckboxColumns nameColumns={'За'}/>


            </div>
        </div>
    )
}

export default CallVotingPageCheckboxTable;