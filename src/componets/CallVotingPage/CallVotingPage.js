import React from "react";
import './CallVotingPage.css';
import mobile_icon_details_vote from '../../img/CallVotingMobileIcon.svg';
import DetailsVotesPageDaysEndRegStartVote
    from "../DetailsVotesPageDaysEndRegStartVote/DetailsVotesPageDaysEndRegStartVote";
import TitleVotesDetailsCallVotingProfile
    from "../TitleVotesDetailsCallVotingProfile/TitleVotesDetailsCallVotingProfile";
import CallVotingPageQuestionCardList from "../CallVotingPageQuestionCardList/CallVotingPageQuestionCardList";
import CallVotingPageQuestionCardCheckBox
    from "../CallVotingPageQuestionCardCheckBox/CallVotingPageQuestionCardCheckBox";
import {useNavigate} from "react-router-dom";
import {activeVotesData} from "../../activeVotesData";


 const CallVotingPage = (props) => {


     const linkDetailsPage = useNavigate();
     let count = 1;


     return (
             <div className={'call-voting-page__wrapper'}>
               <TitleVotesDetailsCallVotingProfile
                    firstLetter={'КлиентКриптовече'}
                    secondLetter={'Голосование по повестке'}
                    titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                     <h2 className={'call-voting-page-title__title'}>Выбор делегатов конференции в Ученый Совет СПбГУ</h2>
                     <button className={'call-voting-page-title__details-btn'} onClick={() => linkDetailsPage('/details-vote')}>Детали голосования</button>
                     <span className={'call-voting-page-title__details-icon'} onClick={() => linkDetailsPage('/details-vote')}><img alt={'иконка'} src={mobile_icon_details_vote}/>ДЕТАЛИ ГОЛОСОВАНИЯ</span>
                 </div>
                     <DetailsVotesPageDaysEndRegStartVote/>
                 {
                     activeVotesData.map((item => {
                         return (
                             <CallVotingPageQuestionCardList
                                 key={item.id}
                                 id={item.id}
                                 titleName={item.titleVoteData}
                                 chooseAnswer={'Необходимо выбрать ровно 1'}
                                 selectValue={count}/>
                         )
                     }))
                 }
                     {/*<CallVotingPageQuestionCardList titleName={'2. Как должен происходить процесс выбора делегатов конференции?'} chooseAnswer={'Необходимо выбрать ровно 1'}/>*/}
                     {/*<CallVotingPageQuestionCardList titleName={'3. Выберите кандидата на позицию делегата Ученого Совета СПбГУ. '} chooseAnswer={'Голосование выражается оставлением (голосование “за”) или зачеркиванием (голосование “против”) ФИО кандидатуры. Оставляется не более одной кандидатуры. В противном случае бюллетень считается недействительным'}/>*/}
                     <CallVotingPageQuestionCardCheckBox titleName={'4. Выберите кандидата на позицию делегата Ученого Совета СПбГУ.'} chooseAnswer={'Выберите один из вариантов ответа напротив каждого кандидата'} answerSelected={'Выбрано: 0'} nameFirstColumn={'Против'} nameSecondColumn={'Воздержаться'} nameThirdColumn={'За'}/>
                     <CallVotingPageQuestionCardCheckBox titleName={'5. Выберите лучшего композитора мира. '} chooseAnswer={'Выберите один из вариантов ответа напротив каждого кандидата'} answerSelected={'Выбрано: 0'} nameFirstColumn={'Против'} nameSecondColumn={'За'} nameThirdColumn={'Воздержаться'}/>
             </div>
     )
 }

 export default CallVotingPage;