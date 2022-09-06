import React from "react";
import './DetailsVotesPageReadQuestions.css';
import RegistrationButton from "../ButtonsComponets/RegistrationButton/RegistrationButton";
import DetailsVotesPageReadQuestionsCardList from "../DetailsVotesPageReadQuestionsCardList/DetailsVotesPageReadQuestionsCardList";
import DetailsVotesPageReadQuestionsCardCheckbox from "../DetailsVotesPageReadQuestionsCardCheckbox/DetailsVotesPageReadQuestionsCardCheckbox";

const DetailsVotesPageReadQuestions = (props) => {

    const {
        currentEventData,
        handleCurrentEvents,
        toggleEventRegistration,
        showEventResult,
        questionsTemplateRow,
        questionsTemplateGrid,
        isMyBulletinTabActive,
        results,
        isVoted
    } = props;

    return (
        <div className='details-votes-page-read-questions__main-content'>
            <h1 className='details-votes-page-read-questions__wrapper-title'>{currentEventData.title}</h1>
            {questionsTemplateRow.map((question => {
                return (
                    <DetailsVotesPageReadQuestionsCardList
                        key={question.id}
                        question={question}
                        isMyBulletinTabActive={isMyBulletinTabActive}
                        results={results}
                        materialsQuestion={question.materials}
                    />
                )
            }))}
            {questionsTemplateGrid.map((question => {
                return (
                    <DetailsVotesPageReadQuestionsCardCheckbox
                        key={question.id}
                        question={question}
                        isMyBulletinTabActive={isMyBulletinTabActive}
                        results={results}
                        materialsQuestion={question.materials}
                    />
                )
            }))
            }
            <RegistrationButton
                votesData={currentEventData}
                handleCurrentEvents={handleCurrentEvents}
                toggleEventRegistration={toggleEventRegistration}
                showEventResult={showEventResult}
                isVoted={isVoted}
            />
        </div>
    )
}

export default DetailsVotesPageReadQuestions;
