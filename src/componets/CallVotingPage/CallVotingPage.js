import React, {useRef} from "react";
import './CallVotingPage.css';
import votes_page_row_icon from "../../img/VotesPageBlock_icon_row.svg";
import DetailsVotesPageDaysEndRegStartVote
    from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";

 const CallVotingPage = () => {





     return (

         <div className={'call-voting-page__wrapper'}>
           <TitleVotesDetailsCallVotingProfile
                firstLetter={'КлиентКриптовече'}
                secondLetter={'Голосование по повестке'}
                titleName={'Голосование по повестке'}/>
             <h2 className={'call-voting-page__wrapper-title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h2>
             <button className={'call-voting-page__'}>Детали голосования</button>
                <DetailsVotesPageDaysEndRegStartVote/>
             <div className={'call-voting-page__main-content'}>


             </div>
         </div>
     )
 }

 export default CallVotingPage;