import React, {useEffect, useState} from "react";
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
import CallVotingList from "../CallVotingPageQuestionCardList/CallVotingList/CallVotingList";
import CallVotingNameColumns from "../CallVotingPageQuestionCardCheckBox/CallVotingNameColumns/CallVotingNameColumns";
import CallVotingNameRows from "../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows";
import CallVotingCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";




 const CallVotingPage = ({currentEventData}) => {

     const linkDetailsPage = useNavigate();
     const [activeRadioCheckbox, setActiveRadioCheckbox] = useState(false)
     const allQuestionsVote = currentEventData.questions
     const questionsTemplateRow = allQuestionsVote.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions')
     const questionsTemplateGrid = allQuestionsVote.filter(e => e.template === 'grid' || e.template === 'radio_grid')


     // const findRadioGrid = (questionsTemplateGrid) => {
     //     for (let key in questionsTemplateGrid) {
     //         if (questionsTemplateGrid.template === 'radio_grid') {
     //             return setActiveRadioCheckbox(true)
     //         }
     //     }
     // };

    console.log(currentEventData)

     return (
             <div className={'call-voting-page__wrapper'}>
               <TitleVotesDetailsCallVotingProfile
                    firstLetter={'КлиентКриптовече'}
                    secondLetter={'Голосование по повестке'}
                    titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                     <h2 className={'call-voting-page-title__title'}>{currentEventData.title}</h2>
                     <button className={'call-voting-page-title__details-btn'} onClick={() => linkDetailsPage('/details-vote')}>Детали голосования</button>
                     <span className={'call-voting-page-title__details-icon'} onClick={() => linkDetailsPage('/details-vote')}><img alt={'иконка'} src={mobile_icon_details_vote}/>ДЕТАЛИ ГОЛОСОВАНИЯ</span>
                 </div>
                     <DetailsVotesPageDaysEndRegStartVote/>
                 {
                     questionsTemplateRow.map((item => {
                         return (
                             <CallVotingPageQuestionCardList
                                 key={item.id}
                                 id={item.id}
                                 questionName={item.title}
                                 chooseAnswer={'Необходимо выбрать ровно 1'}
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
                                     id={item.id}
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
