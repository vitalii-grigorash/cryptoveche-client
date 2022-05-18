import React from "react";
import './VotesPageTitleTimeZone.css';
import votes_active_page_icon_time from "../../img/VotesPageActiveVotes_time_icon.svg";

const VotesPageTitleTimeZone = ({titleVoteData, nameTimezone}) => {

    return (
        <div className={'active-votes__title'}>
            <h2>{titleVoteData}</h2>
            <h3>Ученый совет</h3>
            <div className={'active-votes__title-timezone'}>
                <img alt={'иконка часы'} src={votes_active_page_icon_time} className={'title-timezone__time-icon'}/><span>{nameTimezone}</span>
            </div>
        </div>
    )

}

export default VotesPageTitleTimeZone;