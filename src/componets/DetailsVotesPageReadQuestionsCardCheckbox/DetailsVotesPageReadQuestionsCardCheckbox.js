import React, { useState, useEffect } from "react";
import './DetailsVotesPageReadQuestionsCardCheckbox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingNameRows from '../CallVotingPageQuestionCardCheckBox/CallVotingNameRows/CallVotingNameRows';

const DetailsVotesPageReadQuestionsCardCheckbox = (props) => {

    const {
        question
    } = props;

    const [isListView, setListView] = useState(false);
    const answersArray = [];
    const isBulletinVoted = false;

    useEffect(() => {
        if (question.options.columns.length > 4) {
            setListView(true);
        }
    }, [question.options.columns.length])

    return (
        <div className={'read-questions-card-checkbox__checkbox-question-block'}>
            <div className={'checkbox-question-block__title'}>
                <h3>{question.title}</h3>
                <h5>
                    Выберите один из вариантов ответа напротив каждого кандидата
                    {question.is_required_grid_rows && (
                        <p>Все строки обязательны для заполнения</p>
                    )}
                </h5>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'} />
            </div>
            {!isListView ? (
                <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                    <div className={'select-checkboxes-block__name-columns'}>
                        <div className={'name-columns__width-column'} />
                        {question.options.columns.map(el => (
                            <p key={el.id} className={'call-voting-name-columns__wrapper'}>{el.value}</p>
                        ))}
                    </div>
                    <div>
                        {question.options.rows.map(row => (
                            <CallVotingNameRows
                                key={row.id}
                                rowId={row.id}
                                rowValue={row.value}
                                question={question}
                                columns={question.options.columns}
                                isListView={isListView}
                                isBulletinVoted={isBulletinVoted}
                                answersArray={answersArray}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    {question.options.rows.map(row => (
                        <CallVotingNameRows
                            key={row.id}
                            rowId={row.id}
                            rowValue={row.value}
                            question={question}
                            columns={question.options.columns}
                            isListView={isListView}
                            isBulletinVoted={isBulletinVoted}
                            answersArray={answersArray}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default DetailsVotesPageReadQuestionsCardCheckbox;
