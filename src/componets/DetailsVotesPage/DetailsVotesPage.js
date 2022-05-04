import React from "react";
import './DetailsVotesPage.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import DetailsVotesPageDaysEndRegStartVote from '.././DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote';
import DetailsVotesPageGeneralInformation
    from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";



const DetailsVotesPage = () => {



    return (
        <div className={'details-votes-page__wrapper'}>
            <TitleVotesDetailsCallVotingProfile
                firstLetter={'КлиентКриптовече'}
                secondLetter={'Детали голосования'}
                titleName={'Детали голосования'}/>
                <div className={'details-votes-page__main-content'}>
                    <DetailsVotesPageDaysEndRegStartVote/>
                    <DetailsVotesPageGeneralInformation/>
            </div>

        </div>
    )

}

export default DetailsVotesPage;