import React, {useRef} from "react";
import './CallVotingPage.css';
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
                    titleName={'Голосование по повестке'}/>
                 <h2 className={'call-voting-page__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h2>
                 <button className={'call-voting-page__details-btn'}>Детали голосования</button>
                     <DetailsVotesPageDaysEndRegStartVote/>
                     <CallVotingPageQuestionCard titleName={'1. Согласны ли вы с решением №576?'}/>
                     <CallVotingPageQuestionCard titleName={'2. Как должен происходить процесс выбора делегатов конференции?'}/>
                     <CallVotingPageQuestionCard titleName={'3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ. '}/>
                     <CallVotingPageQuestionCard titleName={'4. Понравилось ли Вам голосовать через КриптоВече?'}/>
             </div>
     )
 }

 export default CallVotingPage;