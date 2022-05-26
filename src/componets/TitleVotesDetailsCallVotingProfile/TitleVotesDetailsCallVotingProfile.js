import React from "react";
import './TitleVotesDetailsCallVotingProfile.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import row_link_back from '../../img/TitleVotesDetailsLinkRow.svg';
import {Link} from "react-router-dom";


const TitleVotesDetailsCallVotingProfile = ({firstLetter, secondLetter, titleName, mobileLetter, hiddenRowBack}) => {

    return (
            <div className={'title-for-votes-call-profile__wrapper'}>
                <div className={'title-for-votes-call-profile__page-info'}>
                    <div className={'page-info__info-and-row'}>
                        <span>{firstLetter}</span>
                        <img alt={'иконка стрелка'} src={votes_page_row_icon}/>
                        <span>{secondLetter}</span>
                    </div>
                    <div className={'page-info__link-back-row'}>
                        <span><Link to={'/main'}><img alt={'стрелка для возврата'} src={row_link_back} hidden={hiddenRowBack}/></Link></span>
                        <span>{mobileLetter}</span>
                    </div>
                </div>
                    <h1 className={'title-for-votes-call-profile__title'}>{titleName}</h1>
                </div>
    )
}

export default TitleVotesDetailsCallVotingProfile;