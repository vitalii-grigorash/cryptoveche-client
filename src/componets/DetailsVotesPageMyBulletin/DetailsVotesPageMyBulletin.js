import React from "react";
import './DetailsVotesPageMyBulletin.css';
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import VotesAndDetailsPageSwitchButtons from "../VotesAndDetailsPageSwitchButtons/VotesAndDetailsPageSwitchButtons";
import MyBulletinCardQuestionList from "./MyBulletinCardQuestionList/MyBulletinCardQuestionList";
import MyBulletinCardQuestionCheckBox from "./MyBulletinCardQuestionCheckBox/MyBulletinCardQuestionCheckBox";


const DetailsVotesPageMyBulletin = () => {

    return (
            <div className={'details-votes-page-my-bulletin__wrapper'}>
                <TitleVotesDetailsCallVotingProfile firstLetter={'КлиентКриптовече'} secondLetter={'Детали голосования'} titleName={'Детали голосования'} mobileLetter={'Назад к списку голосований'}/>
                <div className={'details-votes-page-my-bulletin__main-content'}>
                    <VotesAndDetailsPageSwitchButtons hiddenActiveBtn={true} hiddenArchiveBtn={true}/>
                    <h1 className={'details-votes-page-my-bulletin__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h1>
                    <MyBulletinCardQuestionList nameQuestion={'1. Согласны ли вы с решением №576?'}/>
                    <MyBulletinCardQuestionList nameQuestion={'2. Как должен происходить процесс выбора делегатов конференции?'}/>
                    <MyBulletinCardQuestionList nameQuestion={'3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.'}/>
                    <MyBulletinCardQuestionCheckBox titleName={'4. Выберите кандидата на позицию делегата Ученого Совета СПбГУ. '} nameFirstColumn={'Против'} nameSecondColumn={'За'} nameThirdColumn={'Воздержаться'}/>
                <button className={'details-votes-page-my-bulletin__revote-button'}>Переголосовать</button>
                </div>
            </div>
    )

}
export default DetailsVotesPageMyBulletin;