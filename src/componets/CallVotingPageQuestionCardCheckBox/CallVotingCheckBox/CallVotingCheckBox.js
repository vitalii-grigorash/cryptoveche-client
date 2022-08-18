import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import checkboxIcon from '../../../img/checkbox-icon.svg';
import radioIcon from '../../../img/radio-icon.svg';
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
        answersArray
    } = props;

    const { pathname } = useLocation();

    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

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
                    <img
                        src={question.template === 'radio_grid' ? radioIcon : checkboxIcon}
                        alt="Иконка чекбокса"
                        className={!isListView ? 'call-voting-checkbox__icons' : 'call-voting-checkbox__icons call-voting-checkbox__icons_left'}
                    />
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
