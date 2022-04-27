import React from "react";
import './DetailsVotesPage.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import DetailsVotesPageDataTimeEndRegStartVote
    from "../DetailsVotesPageDateTimeEndRegStartVote/DetailsVotesPageDataTimeEndRegStartVote";
import DetailsVotesPageGeneralInformation
    from "../DetailsVotesPageGeneralInformation/DetailsVotesPageGeneralInformation";



const DetailsVotesPage = () => {



    return (
        <div className={'details-votes-page__wrapper'}>
            <div className={'details-votes-page__wrapper-page-info'}>
                <span>КлиентКриптовече</span>
                <img alt={'иконка стрелка'} src={votes_page_row_icon}/>
                <span>Детали голосования</span>
            </div>
                <h1 className={'details-votes-page__wrapper-title'}>Детали голосования</h1>
                <div className={'details-votes-page__main-content'}>
                    <DetailsVotesPageDataTimeEndRegStartVote/>
                    <DetailsVotesPageGeneralInformation/>
            </div>

        </div>
    )

}

export default DetailsVotesPage;