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
import CallVotingList from "../CallVotingPageQuestionCardList/CallVotingList/CallVotingList";
import CallVotingNameColumns from "../CallVotingPageQuestionCardCheckBox/CallVotingNameColumns/CallVotingNameColumns";
import CallVotingNameRows from "../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows";
import CallVotingCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";




 const CallVotingPage = () => {

     const { counter, cards } = useShop();
     const linkDetailsPage = useNavigate();
     const [activeRadioCheckbox, setActiveRadioCheckbox] = useState(false)
     const titleVote = callVotingEvent.map(item => item.title)
     const [allQuestionsVote] = callVotingEvent.map(item => item.questions)
     const questionsTemplateRow = allQuestionsVote.filter(e => e.template === 'ynq')
     const questionsTemplateGrid = allQuestionsVote.filter(e => e.template === 'grid')
     const getId = questionsTemplateRow.map(elem => elem.options.rows)

     // const countColumns = getId.find(el => el.id[2])
     //  const bun = Object.values(countColumns)



     console.log(getId)

     return (
             <div className={'call-voting-page__wrapper'}>
               <TitleVotesDetailsCallVotingProfile
                    firstLetter={'КлиентКриптовече'}
                    secondLetter={'Голосование по повестке'}
                    titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                     <h2 className={'call-voting-page-title__title'}>{titleVote}</h2>
                     <button className={'call-voting-page-title__details-btn'} onClick={() => linkDetailsPage('/details-vote')}>Детали голосования</button>
                     <span className={'call-voting-page-title__details-icon'} onClick={() => linkDetailsPage('/details-vote')}><img alt={'иконка'} src={mobile_icon_details_vote}/>ДЕТАЛИ ГОЛОСОВАНИЯ</span>
                 </div>
                     <DetailsVotesPageDaysEndRegStartVote/>
                 {
                     questionsTemplateRow.map((item => {
                         return (
                             <CallVotingPageQuestionCardList
                                 key={item.id}
                                 questionName={item.title}
                                 chooseAnswer={'Необходимо выбрать ровно 1'}
                                 selectValue={counter}
                                 listNameAnswers={item.options.rows.map(elem => {
                                     return <CallVotingList
                                         key={elem.id}
                                         checkListId={elem.id}
                                         nameAnswer={elem.value}
                                     />
                                 })}
                                 />
                         )
                     }))
                 }
                 {
                     questionsTemplateGrid.map((item => {
                         return (
                             <CallVotingPageQuestionCardCheckBox
                                     key={item.id}
                                     questionName={item.title}
                                     chooseAnswer={'Выберите один из вариантов ответа напротив каждого кандидата'}
                                     answerSelected={'Выбрано: 0'}
                                     columnsGrid={item.options.columns.map(el => {
                                         return <CallVotingNameColumns
                                         key={el.id}
                                         nameColumnAnswer={el.value}
                                         />
                                 })}
                                     rowsGrid={item.options.rows.map(el => {
                                         return <CallVotingNameRows
                                         key={el.id}
                                         nameRowAnswer={el.value}
                                         checkGridId={item.options.columns.map(item => {
                                             return (
                                                 <CallVotingCheckBox
                                                 key={item.id}
                                                 checkIdRow={el.id}
                                                 checkColumn={item.value}
                                                 checkRow={el.value}
                                                 activeRadioCheck={activeRadioCheckbox}/>
                                             )
                                         })}
                                         columnGrid={item.options.columns.map(el => {
                                             return <CallVotingNameColumns
                                             key={el.id}
                                             nameColumnAnswer={el.value}
                                             activeRadioCheck={activeRadioCheckbox}
                                             />
                                     })}
                                     />
                                 })}/>
                         )
                     }))
                 }
             </div>
     )
 }
export default CallVotingPage;