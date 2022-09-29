import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import checkboxIcon from '../../../img/checkbox-icon.svg';
import checkboxActive from '../../../img/checkbox-active.svg';
import radioIcon from '../../../img/radio-icon.svg';
import radioActive from '../../../img/radio-active.svg';
import './CallVotingCheckBox.css';

const CallVotingCheckBox = (props) => {

    const {
        id,
        question,
        isListView,
        rowId,
        addAnswerToArray,
        removeAnswerFromArray,
        isBulletinVoted,
        answersArray,
        isMyBulletinTabActive,
        results,
        ballots,
        currentEventData
    } = props;

    const { pathname } = useLocation();

    const currentUser = React.useContext(CurrentUserContext);

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
    const [isCheckBoxActive, setCheckBoxActive] = useState(false);

    useEffect(() => {
        if (currentEventData.type !== "secret") {
            if (results.length !== 0) {
                const currentResult = results.find(result => result.id === question.id);
                if (currentResult.users.length !== 0) {
                    const userResult = currentResult.users.find(user => user.id === currentUser.id);
                    if (userResult.answers.length !== 0) {
                        const result = userResult.answers.find(result => result.id === rowId);
                        if (result !== undefined) {
                            const value = result.values.find(value => value === id);
                            if (value !== undefined) {
                                if (value === id) {
                                    setCheckBoxActive(true);
                                }
                            }
                        }
                    }
                } else {
                    setCheckBoxActive(false);
                }
            }
        } else {
            if (ballots !== undefined) {
                if (ballots.length !== 0) {
                    const currentBulletin = ballots.find(ballot => ballot.bulletinId === question.bulletinId);
                    if (currentBulletin !== undefined) {
                        const currentQuestion = currentBulletin.questions.find(bulletin => bulletin.question_id === question.id);
                        if (currentQuestion !== undefined) {
                            const result = currentQuestion.res.find(result => result.id === rowId);
                            if (result !== undefined) {
                                const value = result.values.find(value => value === id);
                                if (value !== undefined) {
                                    if (value === id) {
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
    }, [results, question.id, currentUser.id, id, rowId])

    useEffect(() => {
        if (isBulletinVoted) {
            setCheckboxChecked(false);
        } else {
            if (question.template === 'radio_grid') {
                const obj = answersArray.find(obj => obj.id === rowId);
                if (obj !== undefined) {
                    if (obj.values[0] === id) {
                        setCheckboxChecked(true);
                    } else {
                        setCheckboxChecked(false);
                    }
                }
            }
        }
    }, [isBulletinVoted, answersArray, question.template, rowId, id])

    function onCheckboxClick() {
        if (isCheckboxChecked) {
            setCheckboxChecked(false);
            removeAnswerFromArray(rowId, id);
        } else {
            setCheckboxChecked(true);
            addAnswerToArray(rowId, id);
        }
    }

    function onRadioClick() {
        if (isCheckboxChecked) {
            removeAnswerFromArray(rowId, id);
            setCheckboxChecked(false);
        } else {
            addAnswerToArray(rowId, id);
        }
    }

    return (
        <div className={!isListView ? 'call-voting-checkbox__wrapper' : 'call-voting-checkbox__wrapper-view-list'}>
            <label className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__container' : 'call-voting-checkbox__container'}>
                {pathname === '/details-vote' ? (
                    <>
                        {!isMyBulletinTabActive ? (
                            <img
                                src={question.template === 'radio_grid' ? radioIcon : checkboxIcon}
                                alt="Иконка чекбокса"
                                className={!isListView ? 'call-voting-checkbox__icons' : 'call-voting-checkbox__icons call-voting-checkbox__icons_left'}
                            />
                        ) : (
                            <>
                                {isCheckBoxActive ? (
                                    <img
                                        src={question.template === 'radio_grid' ? radioActive : checkboxActive}
                                        alt="Иконка чекбокса"
                                        className={!isListView ? 'call-voting-checkbox__icons' : 'call-voting-checkbox__icons call-voting-checkbox__icons_left'}
                                    />
                                ) : (
                                    <img
                                        src={question.template === 'radio_grid' ? radioIcon : checkboxIcon}
                                        alt="Иконка чекбокса"
                                        className={!isListView ? 'call-voting-checkbox__icons' : 'call-voting-checkbox__icons call-voting-checkbox__icons_left'}
                                    />
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {!isBulletinVoted && (
                            <>
                                {question.template === 'radio_grid' ? (
                                    <input
                                        type="checkbox"
                                        name={rowId}
                                        checked={isCheckboxChecked}
                                        onChange={onRadioClick}
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        name={rowId}
                                        checked={isCheckboxChecked}
                                        onChange={onCheckboxClick}
                                    />
                                )}
                            </>
                        )}
                        {isBulletinVoted ? (
                            <img
                                src={question.template === 'radio_grid' ? radioIcon : checkboxIcon}
                                alt="Иконка чекбокса"
                                className={!isListView ? 'call-voting-checkbox__icons' : 'call-voting-checkbox__icons call-voting-checkbox__icons_left'}
                            />
                        ) : (
                            <>
                                {!isListView ? (
                                    <span className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__checkmark' : 'call-voting-checkbox__checkmark'} />
                                ) : (
                                    <span className={question.template === 'radio_grid' ? 'call-voting-checkbox-radio__checkmark call-voting-checkbox__view-left' : 'call-voting-checkbox__checkmark call-voting-checkbox__view-left'} />
                                )}
                            </>
                        )}
                    </>
                )}
            </label>
        </div>
    )
}

export default CallVotingCheckBox;
