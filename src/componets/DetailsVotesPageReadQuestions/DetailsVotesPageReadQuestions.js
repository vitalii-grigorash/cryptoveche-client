import React, {useState} from "react";
import './DetailsVotesPageReadQuestions.css';
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import DetailsVotesPageReadQuestionsCardList from "../DetailsVotesPageReadQuestionsCardList/DetailsVotesPageReadQuestionsCardList";
import DetailsVotesPageReadQuestionsCardCheckbox
    from "../DetailsVotesPageReadQuestionsCardCheckbox/DetailsVotesPageReadQuestionsCardCheckbox";
import {callVotingEvent} from "../../testCallVotingEvent";
import CallVotingCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";
import ReadQuestionsCardList
    from "../DetailsVotesPageReadQuestionsCardList/ReadQuestionsCardList/ReadQuestionsCardList";
import ReadQuestionsCardCheckbox
    from "../DetailsVotesPageReadQuestionsCardCheckbox/ReadQuestionsCardCheckbox/ReadQuestionsCardCheckbox";
import ReadQuestionsCardNameRows
    from "../DetailsVotesPageReadQuestionsCardCheckbox/ReadQuestionsCardNameRows/ReadQuestionsCardNameRows";
import ReadQuestionsCardNameColumns
    from "../DetailsVotesPageReadQuestionsCardCheckbox/ReadQuestionsCardNameColumns/ReadQuestionsCardNameColumns";





const DetailsVotesPageReadQuestions = () => {

    const nameVoteTitle = callVotingEvent.map(item => item.title)
    const [readQuestionsVote] = callVotingEvent.map(item => item.questions)

    const questionsTemplateRow = readQuestionsVote.filter(function (e) {
        return e.template === 'ynq'
    });
    const questionsTemplateGrid = readQuestionsVote.filter(function (e) {
        return e.template === 'grid'
    });


    const [activeRadioCheckbox, setActiveRadioCheckbox] = useState(false)


    const ver = []
    ver.push(<CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>, <CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>, <CallVotingCheckBox activeRadioCheck={activeRadioCheckbox}/>)



    return (
              <div className={'details-votes-page-read-questions__main-content'}>
                    <h1 className={'details-votes-page-read-questions__wrapper-title'}>{nameVoteTitle}</h1>
                  {
                      questionsTemplateRow.map((item => {
                          return (
                              <DetailsVotesPageReadQuestionsCardList
                                  key={item.id}
                                  nameQuestionCard={item.title}
                                  nameSelectAnswerQuestion={'Выберите ровно 1'}
                                  nameCardList={item.options.rows.map(el => {
                                      return (
                                          <ReadQuestionsCardList
                                            key={el.id}
                                            nameCardList={el.value}
                                          />
                                      )
                                  })}
                              />
                          )
                      }))
                  }
                  {questionsTemplateGrid.map((item => {
                      return (
                          <DetailsVotesPageReadQuestionsCardCheckbox
                              key={item.id}
                              nameQuestionCard={item.title}
                              nameSelectAnswerQuestion={'Выберите один из вариантов ответа напротив каждого кандидата'}
                              nameQuestionColumn={item.options.columns.map(el => {
                                  return (
                                      <ReadQuestionsCardNameColumns
                                      key={el.id}
                                      nameQuestionColumn={el.value}/>
                                  )
                              })}
                              nameQuestionRow={item.options.rows.map(el => {
                                  return (
                                      <ReadQuestionsCardNameRows
                                      key={el.id}
                                      nameQuestionRow={el.value}
                                      checkBoxReadQuestion={React.Children.toArray(ver)}/>
                                  )
                              })}
                              />
                      )
                      }))
                  }
                <RegistrationButton/>
            </div>
    )
}

export default DetailsVotesPageReadQuestions;