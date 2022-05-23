import React, {useRef} from "react";
import './CallVotingPage.css';
import mobile_icon_details_vote from '../../img/CallVotingMobileIcon.svg';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import DetailsVotesPageDaysEndRegStartVote
    from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import CallVotingPageQuestionCard from "../CallVotingPageQuestionCard/CallVotingPageQuestionCard";

 const CallVotingPage = () => {



     return (

             <div className={'call-voting-page__wrapper'}>
               <TitleVotesDetailsCallVotingProfile
                    firstLetter={'КлиентКриптовече'}
                    secondLetter={'Голосование по повестке'}
                    titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                    <h2 className={'call-voting-page-title__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h2>
                    <button className={'call-voting-page-title__details-btn'}>Детали голосования</button>
                     <span className={'call-voting-page-title__details-icon'}><img alt={'иконка'} src={mobile_icon_details_vote}/>ДЕТАЛИ ГОЛОСОВАНИЯ</span>
                 </div>
                     <DetailsVotesPageDaysEndRegStartVote/>
                     <CallVotingPageQuestionCard titleName={'1. Согласны ли вы с решением №576?'} chooseAnswer={'Выберите ровно 1'} answerSelected={'Выбрано: 0'}/>
                     <CallVotingPageQuestionCard titleName={'2. Как должен происходить процесс выбора делегатов конференции?'} chooseAnswer={'Выберите больше или ровно 2'} answerSelected={'Выбрано: 0'}/>
                     <CallVotingPageQuestionCard titleName={'3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ. '} chooseAnswer={'Голосование выражается оставлением (голосование “за”) или зачеркиванием (голосование “против”) ФИО кандидатуры. Оставляется не более одной кандидатуры. В противном случае бюллетень считается недействительным'} answerSelected={'Выбрано: 0'}/>
                     <CallVotingPageQuestionCard titleName={'4. Понравилось ли Вам голосовать через КриптоВече?'}/>
             </div>
     )
 }

 export default CallVotingPage;