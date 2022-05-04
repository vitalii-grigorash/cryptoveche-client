import React from "react";
import './TitleVotesDetailsCallVotingProfile.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";

const TitleVotesDetailsCallVotingProfile = ({firstLetter, secondLetter, titleName}) => {


    return (
        <div className={'title-for-votes-call-profile__wrapper'}>
            <div className={'title-for-votes-call-profile__page-info'}>
                <span>{firstLetter}</span>
                <img alt={'иконка стрелка'} src={votes_page_row_icon}/>
                <span>{secondLetter}</span>
            </div>
            <h1 className={'title-for-votes-call-profile__title'}>{titleName}</h1>
        </div>
    )
}

export default TitleVotesDetailsCallVotingProfile;