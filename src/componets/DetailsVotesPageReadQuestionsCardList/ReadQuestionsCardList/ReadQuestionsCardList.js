import React, { useEffect, useState } from "react";
import './ReadQuestionsCardList.css';
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import checkboxDisabled from '../../../img/checkbox-icon.svg';
import checkboxActive from '../../../img/checkbox-active.svg';

const ReadQuestionsCardList = (props) => {

    const {
        id,
        value,
        isMyBulletinTabActive,
        results,
        question,
        ballots,
        currentEventData
    } = props;

    const currentUser = React.useContext(CurrentUserContext);

    const [isCheckBoxActive, setCheckBoxActive] = useState(false);

    useEffect(() => {
        if (currentEventData.type !== "secret") {
            if (results.length !== 0) {
                const currentResult = results.find(result => result.id === question.id);
                if (currentResult.users.length !== 0) {
                    const userResult = currentResult.users.find(user => user.id === currentUser.id);
                    const result = userResult.answers.find(result => result.id === id);
                    if (result !== undefined) {
                        if (result.id === id) {
                            setCheckBoxActive(true);
                        }
                    }
                } else {
                    setCheckBoxActive(false);
                }
            }
        } else {
            if (ballots !== undefined) {
                if (ballots.length !== 0) {
                    const currentResult = ballots.find(ballot => ballot.bulletinId === question.bulletinId);
                    if (currentResult !== undefined) {
                        if (currentResult.questions.length !== 0) {
                            const currentQuestion = currentResult.questions.find(result => result.question_id === question.id);
                            if (currentQuestion.res !== 0) {
                                const result = currentQuestion.res.find(result => result.id === id);
                                if (result !== undefined) {
                                    if (result.id === id) {
                                        setCheckBoxActive(true);
                                    }
                                }
                            }
                        }
                    } else {
                        setCheckBoxActive(false);
                    }
                }
            }
        }
    }, [results, question.id, currentUser.id, id, ballots, currentEventData.type, question.bulletinId])

    return (
        <>
            {!isMyBulletinTabActive ? (
                <ul className='card-list__list-answer' type="square">
                    <li><span>{value}</span></li>
                </ul>
            ) : (
                <div className="card-list__checkbox-container">
                    <img
                        src={!isCheckBoxActive ? checkboxDisabled : checkboxActive}
                        alt="Иконка чекбокса"
                        className="card-list__checkbox-icon"
                    />
                    <span className="card-list__checkbox-value">{value}</span>
                </div>
            )}
        </>
    )
}

export default ReadQuestionsCardList;
