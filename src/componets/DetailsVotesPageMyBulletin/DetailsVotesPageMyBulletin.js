import React, {useState} from "react";
import './DetailsVotesPageMyBulletin.css';
import MyBulletinCardQuestionList from "./MyBulletinCardQuestionList/MyBulletinCardQuestionList";
import MyBulletinCardQuestionCheckBox from "./MyBulletinCardQuestionCheckBox/MyBulletinCardQuestionCheckBox";
import {callVotingEvent} from "../../testCallVotingEvent";
import CallVotingCheckBox from "../CallVotingPageQuestionCardCheckBox/CallVotingCheckBox/CallVotingCheckBox";
import MyBulletinCardCheckBox from "./MyBulletinCardQuestionCheckBox/MyBulletinCardCheckBox/MyBulletinCardCheckBox";
import MyBulletinCardList from "./MyBulletinCardQuestionList/MyBulletinCardList/MyBulletinCardList";
import MyBulletinCardNameRows from "./MyBulletinCardQuestionCheckBox/MyBulletinCardNameRows/MyBulletinCardNameRows";
import MyBulletinCardNameColumns
    from "./MyBulletinCardQuestionCheckBox/MyBulletinCardNameColumns/MyBulletinCardNameColumns";

const DetailsVotesPageMyBulletin = () => {




    const titleVote = callVotingEvent.map(item => item.title)
    const [allQuestionsVote] = callVotingEvent.map(item => item.questions)
    const questionsTemplateRowBullutin = allQuestionsVote.filter(e => e.template === 'ynq')
    const questionsTemplateGridBullutin = allQuestionsVote.filter(e => e.template === 'grid')
    const [activeRadioCheckbox, setActiveRadioCheckbox] = useState(false)
    const [activeCheckedCheckbox, setActiveCheckedCheckbox] = useState(false)

    const ver = []
    ver.push(<MyBulletinCardCheckBox activeRadioCheck={activeRadioCheckbox}/>, <MyBulletinCardCheckBox activeRadioCheck={activeRadioCheckbox}/>, <MyBulletinCardCheckBox activeRadioCheck={activeRadioCheckbox}/>)


    return (
            <div className={'details-votes-page-my-bulletin__main-content'}>
                <h1 className={'details-votes-page-my-bulletin__title'}>{titleVote}</h1>
                {
                    questionsTemplateRowBullutin.map((item => {
                        return (
                            <MyBulletinCardQuestionList
                                key={item.id}
                                nameQuestion={item.title}
                                checkboxLabelBulletin={item.options.rows.map(el => {
                                    return (
                                        <MyBulletinCardList
                                            key={el.id}
                                            checkboxLabelBulletin={el.value}
                                            activeChecked={activeCheckedCheckbox}
                                        />
                                    )
                                })}/>
                        )
                    }))
                }
                {
                    questionsTemplateGridBullutin.map((item => {
                        return (
                            <MyBulletinCardQuestionCheckBox
                                key={item.id}
                                questionName={item.title}
                                nameColumnBulletin={item.options.columns.map(el => {
                                    return (
                                        <MyBulletinCardNameColumns
                                        key={el.id}
                                        nameColumnBulletin={el.value}/>
                                    )
                                })}
                                nameRowBulletin={item.options.rows.map(el => {
                                    return (
                                        <MyBulletinCardNameRows
                                        key={el.id}
                                        nameRowBulletin={el.value}
                                        myBulletinCheckProp={ver}/>
                                    )
                                })}
                                />)

                    }))
                }

                <button className={'details-votes-page-my-bulletin__revote-button'}>Переголосовать</button>
            </div>

    )
}

export default DetailsVotesPageMyBulletin;
