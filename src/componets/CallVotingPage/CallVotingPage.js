import React, {useState} from "react";
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
import {callVotingEvent} from "../../testCallVotingEvent";
import useShop from "../../contexts/CallVotingContext";


 const CallVotingPage = () => {

     const { counter, cards } = useShop();
     const linkDetailsPage = useNavigate();
     const [questionsCard] = callVotingEvent.map(item => item.questions)
     const [answerCard] = questionsCard.map(item => item.options.rows)
     // const qer = answerCard.map(item => item.rows)

     // const [arr, setArr] = useState(qer)
     //
     // const addArr = obj => {
     //     setArr(current => [...current, obj])
     // };
     //
     // // answerCard.map(x => console.log(x.rows))
     // const xer = Object.values(qer).map(x => console.log(x))
 //
   console.log(answerCard)


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
                     questionsCard.map((item => {
                         return (
                             <CallVotingPageQuestionCardList
                                 key={item.id}
                                 id={item.id}
                                 titleName={item.title}
                                 chooseAnswer={'Необходимо выбрать ровно 1'}
                                 selectValue={counter}
                                 labelCheckbox={item.options.rows.map(el => el.value)}
                                 />
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