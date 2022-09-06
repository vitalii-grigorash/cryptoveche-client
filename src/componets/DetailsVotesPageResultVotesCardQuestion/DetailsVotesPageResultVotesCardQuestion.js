import React, { useEffect, useState } from "react";
import './DetailsVotesPageResultVotesCardQuestion.css';
import DetailsVotesPageResultQuestionRow from '../DetailsVotesPageResultQuestionRow/DetailsVotesPageResultQuestionRow';
import DetailsVotesPageResultQuestionGrid from '../DetailsVotesPageResultQuestionGrid/DetailsVotesPageResultQuestionGrid';

const DetailsVotesPageResultVotesCardQuestion = (props) => {

    const {
        currentEventData
    } = props;

    const [questionsTemplateRow, setQuestionsTemplateRow] = useState([]);
    const [questionsTemplateGrid, setQuestionsTemplateGrid] = useState([]);

    function templateRow(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'ynq' || e.template === 'none' || e.template === 'position_single' || e.template === 'position_multiple' || e.template === 'same_positions');
        setQuestionsTemplateRow(filteredQuestions);
    }

    function templateGrid(questions) {
        const filteredQuestions = questions.filter(e => e.template === 'grid' || e.template === 'radio_grid');
        setQuestionsTemplateGrid(filteredQuestions);
    }

    useEffect(() => {
        if (currentEventData.results.questions.length !== 0) {
            templateRow(currentEventData.results.questions);
            templateGrid(currentEventData.results.questions);
        }
    }, [currentEventData.results.questions]);

    return (
        <div className='details-votes-page-result-votes-card__wrapper'>
            <div className='details-votes-page-result-votes-card__title'>
                <h1 className='details-votes-page-result-votes__title'>{currentEventData.title}</h1>
            </div>
            {questionsTemplateRow.length !== 0 && (
                <>
                    {questionsTemplateRow.map((question) => (
                        <DetailsVotesPageResultQuestionRow
                            key={question.id}
                            question={question}
                            currentEventData={currentEventData}
                        />
                    ))}
                </>
            )}
            {questionsTemplateGrid.length !== 0 && (
                <>
                    {questionsTemplateGrid.map((question) => (
                        <DetailsVotesPageResultQuestionGrid
                            key={question.id}
                            question={question}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default DetailsVotesPageResultVotesCardQuestion;
