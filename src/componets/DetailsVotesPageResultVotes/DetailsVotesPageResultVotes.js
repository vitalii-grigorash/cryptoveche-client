import React from "react";
import './DetailsVotesPageResultVotes.css';
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import DetailsVotesPageResultVotesCardQuestion
    from "../DetailsVotesPageResultVotesCardQuestion/DetailsVotesPageResultVotesCardQuestion";
import DetailsVotesPageResultVotesWaitingResults
    from "../DetailsVotesPageResultVotesWaitingResults/DetailsVotesPageResultVotesWaitingResults";

const DetailsVotesPageResultVotes = () => {

    return (

        <div className={'details-votes-page-result-votes__wrapper'}>
            <TitleVotesDetailsCallVotingProfile firstLetter={'КлиентКриптовече'} secondLetter={'Детали голосования'} titleName={'Детали голосования'}/>
            <div className={'details-votes-page-result-votes__main-content'}>
                <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true}/>
                <h1 className={'details-votes-page-result-votes__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                <DetailsVotesPageResultVotesCardQuestion/>
                {/*<DetailsVotesPageResultVotesWaitingResults/>*/}
            </div>
        </div>
    )

}

export default DetailsVotesPageResultVotes;