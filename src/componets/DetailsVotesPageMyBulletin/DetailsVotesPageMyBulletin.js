import React from "react";
import './DetailsVotesPageMyBulletin.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import MyBulletinCardQuestion from "./MyBulletinCardQuestion/MyBulletinCardQuestion";


const DetailsVotesPageMyBulletin = () => {

    return (
            <div className={'details-votes-page-my-bulletin__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'КлиентКриптовече'} secondLetter={'Детали голосования'} titleName={'Детали голосования'}/>
                <div className={'details-votes-page-my-bulletin__main-content'}>
                    <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true}/>
                    <h1 className={'details-votes-page-my-bulletin__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                    <MyBulletinCardQuestion/>
                    <MyBulletinCardQuestion/>
                    <MyBulletinCardQuestion/>
                    <MyBulletinCardQuestion/>
                    
                </div>
            </div>
    )

}
export default DetailsVotesPageMyBulletin;