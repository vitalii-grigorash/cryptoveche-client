import React, { useEffect, useState } from "react";
import './VotesPageTitleTimeZone.css';
import votes_active_page_icon_time from "../../img/VotesPageActiveVotes_time_icon.svg";

const VotesPageTitleTimeZone = (props) => {

    const {
        voteData,
        utcOffset
    } = props;

    const [title, setTitle] = useState('');
    const [ownerTitle, setOwnerTitle] = useState('');

    useEffect(() => {
        if (voteData.title !== undefined) {
            setTitle(voteData.title);
        }
        if (voteData.owner.title !== undefined) {
            setOwnerTitle(voteData.owner.title);
        }
    }, [voteData]);

    return (
        <div className='active-votes__title'>
            <h2>{title}</h2>
            <h3>{ownerTitle}</h3>
            <div className='active-votes__title-timezone'>
                <img alt='иконка часы' src={votes_active_page_icon_time} className='title-timezone__time-icon' /><span>{utcOffset}</span>
            </div>
        </div>
    )
}

export default VotesPageTitleTimeZone;
