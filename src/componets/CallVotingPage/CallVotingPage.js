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
import CallVotingList from "../CallVotingPageQuestionCardList/CallVotingList/CallVotingList";
import CallVotingNameColumns from "../CallVotingPageQuestionCardCheckBox/CallVotingNameColumns/CallVotingNameColumns";
import CallVotingNameRows from "../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows";
import CallVotingCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";



 const CallVotingPage = ({currentEventData}) => {

     const linkDetailsPage = useNavigate();
     const allQuestionsVote = currentEventData.questions
     const questionsTemplateRow = allQuestionsVote.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions')
     const questionsTemplateGrid = allQuestionsVote
         .filter(e => e.template === 'grid' || e.template === 'radio_grid')
         .map(obj => {
             if(obj.template === 'radio_grid') {
                 return {...obj, activeRadioCheck: true}
             }
             return obj
         })

    // const que = questionsTemplateGrid.map(obj => {
    //     if(obj.template === 'radio_grid') {
    //         return {...obj, activeRadioCheck: true}
    //     }
    //     return obj;
    // })

     // useEffect(() => {
     //     for (let i = 0; i < questionsTemplateGrid.length; i++) {
     //         if (questionsTemplateGrid[i].template === 'radio_grid') {
     //            return questionsTemplateGrid.map(obj => ({...obj, Active: false}))
     //         }
     //     }
     // }, [])

     // useEffect(() => {
     //     for (let key in templateGrid) {
     //         if (templateGrid.template === 'radio_grid') {
     //            setActiveRadioCheckbox(true)
     //         }
     //     }
     // }, [templateGrid])

    console.log(questionsTemplateGrid)

     return (
                <div className={'call-voting-page__wrapper'}>
                 <TitleVotesDetailsCallVotingProfile
                     firstLetter={'КлиентКриптовече'}
                     secondLetter={'Голосование по повестке'}
                     titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                     <h2 className={'call-voting-page-title__title'}>{currentEventData.title}</h2>
                     <button className={'call-voting-page-title__details-btn'}
                             onClick={() => linkDetailsPage('/details-vote')}>Детали голосования
                     </button>
                     <span className={'call-voting-page-title__details-icon'}
                           onClick={() => linkDetailsPage('/details-vote')}><img alt={'иконка'} src={mobile_icon_details_vote}/>ДЕТАЛИ ГОЛОСОВАНИЯ</span>
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
                                         checkGridId={item.options.columns.map(elem => {
                                             return (
                                                 <CallVotingCheckBox
                                                     key={elem.id}
                                                     checkIdRow={elem.id}
                                                     checkColumn={elem.value}
                                                     checkRow={elem.value}
                                                     activeRadioCheck={item.activeRadioCheck}
                                                 />
                                             )
                                         })}
                                         columnGrid={item.options.columns.map(el => {
                                             return <CallVotingNameColumns
                                                 key={el.id}
                                                 nameColumnAnswer={el.value}
                                                 activeRadioCheck={el.activeRadioCheck}
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
