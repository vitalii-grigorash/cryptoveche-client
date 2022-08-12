import React, { useEffect, useState } from "react";
import './CallVotingPageQuestionCardCheckBox.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingPageVoteButtonCheckBox from "../CallVotingPageVoteButtonCheckBox/CallVotingPageVoteButtonCheckBox";
import CallVotingNameRows from './CallVotingNameRows/CallVotingNameRows';

const CallVotingPageQuestionCardCheckBox = (props) => {

    const {
        uestionTitle,
        columns,
        rows,
        question
    } = props;

    const [isListView, setListView] = useState(false);

    useEffect(() => {
        if (columns.length > 4) {
            setListView(true);
        }
    }, [columns.length])

    return (
        <div className={'call-voting-page-question-card-check__wrapper'}>
            <div className={'call-voting-page-question-card-check__title'}>
                <h3>{uestionTitle}</h3>
                <div className={'call-voting-page-question-card-check__select-answer'}>
                    <span>
                        Выберите один из вариантов ответа напротив каждого кандидата
                        {question.is_required_grid_rows && (
                            <p>Все строки обязательны для заполнения</p>
                        )}
                    </span>
                    <span>Выбрано: 0</span></div>
                <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'} />
            </div>
            {!isListView ? (
                <div className={'call-voting-page-question-card-check__select-checkboxes-block'}>
                    <div className={'select-checkboxes-block__name-columns'}>
                        <div className={'name-columns__width-column'} />
                        {columns.map(el => (
                            <p key={el.id} className={'call-voting-name-columns__wrapper'}>{el.value}</p>
                        ))}
                    </div>
                    <div>
                        {rows.map(row => (
                            <CallVotingNameRows
                                key={row.id}
                                rowId={row.id}
                                rowValue={row.value}
                                question={question}
                                columns={question.options.columns}
                                isListView={isListView}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    {rows.map(row => (
                        <CallVotingNameRows
                            key={row.id}
                            rowId={row.id}
                            rowValue={row.value}
                            question={question}
                            columns={question.options.columns}
                            isListView={isListView}
                        />
                    ))}
                </div>
            )}
            <CallVotingPageVoteButtonCheckBox />
        </div>
    )
}

export default CallVotingPageQuestionCardCheckBox;
