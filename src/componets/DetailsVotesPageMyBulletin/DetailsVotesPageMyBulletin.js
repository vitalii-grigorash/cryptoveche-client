import React from "react";
import './DetailsVotesPageMyBulletin.css';
import DetailsVotesPageReadQuestionsCardList from "../DetailsVotesPageReadQuestionsCardList/DetailsVotesPageReadQuestionsCardList";
import DetailsVotesPageReadQuestionsCardCheckbox from "../DetailsVotesPageReadQuestionsCardCheckbox/DetailsVotesPageReadQuestionsCardCheckbox";

const DetailsVotesPageMyBulletin = (props) => {

    const {
        currentEventData,
        questionsTemplateRow,
        questionsTemplateGrid,
        isMyBulletinTabActove
    } = props;

    return (
        <div className={'details-votes-page-my-bulletin__main-content'}>
            <h1 className={'details-votes-page-my-bulletin__title'}>{currentEventData.title}</h1>
            {questionsTemplateRow.map((question => {
                return (
                    <DetailsVotesPageReadQuestionsCardList
                        key={question.id}
                        question={question}
                    />
                )
            }))}
            {questionsTemplateGrid.map((question => {
                return (
                    <DetailsVotesPageReadQuestionsCardCheckbox
                        key={question.id}
                        question={question}
                    />
                )
            }))
            }
        </div>
    )
}

export default DetailsVotesPageMyBulletin;
