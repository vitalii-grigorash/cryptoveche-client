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


     const [allQuestionsVote] = callVotingEvent.map(item => item.questions)
     const questionsTemplateRow = allQuestionsVote.filter(function (e) {
         return e.template === 'ynq'
     });
     const questionsTemplateGrid = allQuestionsVote.filter(function (e) {
         return e.template === 'grid'
     });




     const ver = []
     ver.push(<CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>, <CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>, <CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>)


     return (
             <div className={'call-voting-page__wrapper'}>
               <TitleVotesDetailsCallVotingProfile
                    firstLetter={'КлиентКриптовече'}
                    secondLetter={'Голосование по повестке'}
                    titleName={'Голосование по повестке'} mobileLetter={'Назад на главную'}/>
                 <div className={'call-voting-page__title'}>
                     <h2 className={'call-voting-page-title__title'}>{callVotingEvent.map(item => item.title)}</h2>
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
                                 labelCheckbox={item.options.rows.map(elem => {
                                     return <CallVotingList
                                         key={elem.id}
                                         labelCheckbox={elem.value}
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
                                 nameColumn={item.options.columns.map(el => {
                                     return <CallVotingNameColumns
                                     key={el.id}
                                     nameColumn={el.value}
                                     />
                                 })}
                                 nameRow={item.options.rows.map(el => {
                                     return <CallVotingNameRows
                                     key={el.id}
                                     nameRow={el.value}
                                     callVotingCheckProp={React.Children.toArray(ver)}
                                     nameColumn={item.options.columns.map(el => {
                                         return <CallVotingNameColumns
                                         key={el.id}
                                         nameColumn={el.value}
                                         activeRadioCheck={activeRadioCheckbox}/>
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