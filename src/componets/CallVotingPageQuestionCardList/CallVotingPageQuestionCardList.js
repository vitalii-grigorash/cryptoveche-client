import React, { useState, useEffect } from "react";
import './CallVotingPageQuestionCardList.css';
import CallVotingPageVoteButtonList from "../CallVotingPageVoteButtonList/CallVotingPageVoteButtonList";
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import CallVotingList from "../CallVotingPageQuestionCardList/CallVotingList/CallVotingList";
import * as Events from '../../Api/Events';
import successIcon from '../../img/votet-status-icon.svg';

const CallVotingPageQuestionCardList = (props) => {

    const {
        questionName,
        questionColumns,
        questionRows,
        question,
        eventId,
        requestHelper,
        isReVoting
    } = props;

    const [answersArray, setAnswersArray] = useState([]);
    const [rule, setRule] = useState('');
    const [ruleFrom, setRuleFrom] = useState('');
    const [ruleTo, setRuleTo] = useState('');
    const [ruleText, setRuleText] = useState('');
    const [selectedAnswersTextColor, setSelectedAnswersTextColor] = useState('');
    const [isButtonActive, setButtonActive] = useState(false);
    const [isBulletinVoted, setBulletinVoted] = useState(false);

    function simpleQuestion(answers) {
        setRule(question.rules.pick_eq);
        setRuleText('Необходимо выбрать ровно ' + question.rules.pick_eq);
        if (answers.length === 0) {
            setButtonActive(false);
            setSelectedAnswersTextColor('');
        } else if (answers.length === rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        } else if (answers.length > rule || answers.length < rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        }
    }

    function positionSingleQuestion(answers) {
        setRule(question.rules.pick_le);
        setRuleText('Количество должностных позиций доступных для выбора ' + question.rules.pick_le);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length === rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function positionMultipleQuestion(answers) {
        setRule(question.rules.pick_le);
        setRuleText('Количество кандидатов доступных для выбора ' + question.rules.pick_le);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length === rule) {
            setButtonActive(true);
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
        } else if (answers.length > rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        }
    }

    function samePositionsQuestion(answers) {
        setRule(question.rules.pick_le);
        setRuleText('Количество кандидатов доступных для выбора ' + question.rules.pick_le);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length <= rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        } else if (answers.length > rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        }
    }

    function arbitraryQuestionNoRules(answers) {
        setRule(0);
        setRuleText('Необходимо выбрать один или несколько');
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length > rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionLessThan(answers) {
        setRule(question.rules.pick_lt);
        setRuleText('Необходимо выбрать меньше чем ' + question.rules.pick_lt);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length < rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        } else if (answers.length >= rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        }
    }

    function arbitraryQuestionMoreThan(answers) {
        setRule(question.rules.pick_gt);
        setRuleText('Необходимо выбрать больше чем ' + question.rules.pick_gt);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length <= rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else if (answers.length > rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionLessOrEqual(answers) {
        setRule(question.rules.pick_le);
        setRuleText('Необходимо выбрать меньше или ровно ' + question.rules.pick_le);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(true);
        } else if (answers.length <= rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        } else if (answers.length > rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        }
    }

    function arbitraryQuestionMoreOrEqual(answers) {
        setRule(question.rules.pick_ge);
        setRuleText('Необходимо выбрать больше или ровно ' + question.rules.pick_ge);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length < rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else if (answers.length >= rule) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionFromTo(answers) {
        setRuleFrom(question.rules.pick_gt);
        setRuleTo(question.rules.pick_lt);
        setRuleText(`Необходимо выбрать от ${question.rules.pick_gt} до ${question.rules.pick_lt}`);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length <= ruleFrom || answers.length >= ruleTo) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionFromEqualToEqual(answers) {
        setRuleFrom(question.rules.pick_ge);
        setRuleTo(question.rules.pick_le);
        setRuleText(`Необходимо выбрать от ${question.rules.pick_ge} (включительно) до ${question.rules.pick_le} (включительно)`);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length < ruleFrom || answers.length > ruleTo) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionFromEqualTo(answers) {
        setRuleFrom(question.rules.pick_ge);
        setRuleTo(question.rules.pick_lt);
        setRuleText(`Необходимо выбрать от ${question.rules.pick_ge} (включительно) до ${question.rules.pick_lt}`);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length < ruleFrom || answers.length >= ruleTo) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionFromToEqual(answers) {
        setRuleFrom(question.rules.pick_gt);
        setRuleTo(question.rules.pick_le);
        setRuleText(`Необходимо выбрать от ${question.rules.pick_gt} до ${question.rules.pick_le} (включительно)`);
        if (answers.length === 0) {
            setSelectedAnswersTextColor('');
            setButtonActive(false);
        } else if (answers.length <= ruleFrom || answers.length > ruleTo) {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_red');
            setButtonActive(false);
        } else {
            setSelectedAnswersTextColor('call-voting-page-question-card-list__selected-answers_green');
            setButtonActive(true);
        }
    }

    function arbitraryQuestionFewRules(answers) {
        if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromTo(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromEqualToEqual(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromEqualTo(answers);
        } else if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromToEqual(answers);
        }
    }

    function arbitraryQuestion(answers) {
        if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionNoRules(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq !== -1
        ) {
            simpleQuestion(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionLessThan(answers);
        } else if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionMoreThan(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionLessOrEqual(answers);
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionMoreOrEqual(answers);
        } else {
            arbitraryQuestionFewRules(answers);
        }
    }

    useEffect(() => {
        if (question.template === 'ynq') {
            simpleQuestion(answersArray);
        } else if (question.template === 'none') {
            arbitraryQuestion(answersArray);
        } else if (question.template === 'position_single') {
            positionSingleQuestion(answersArray);
        } else if (question.template === 'position_multiple') {
            positionMultipleQuestion(answersArray);
        } else if (question.template === 'same_positions') {
            samePositionsQuestion(answersArray);
        }
        // eslint-disable-next-line
    }, [question.template, answersArray])

    function addAnswerToArray(rowId, columnId) {
        const dataToAdd = {
            id: rowId, // здесь мы отправляем id строк rows.id
            values: [
                columnId // здесь мы отправляем массив из id колонок columns.id
            ]
        }
        setAnswersArray([...answersArray, dataToAdd]);
    }

    function removeAnswerFromArray(rowId) {
        const filteredAnswers = answersArray.filter((answer => answer.id !== rowId));
        setAnswersArray(filteredAnswers);
    }

    function onReVoteButtonClick() {
        setBulletinVoted(false);
    }

    function sendVote() {
        const dataToSend = {
            for_user_id: "",
            question_id: question.id, // здесь мы отправляем id вопроса questions.id
            res: answersArray
        }
        const body = {
            eventId: eventId,
            eventArray: [
                dataToSend
            ]
        }
        requestHelper(Events.vote, body)
            .then((data) => {
                if (data.status === 'ok') {
                    setBulletinVoted(true);
                    setAnswersArray([]);
                }
            })
    }

    return (
        <div className={`call-voting-page-question-card-list__main ${isBulletinVoted && 'call-voting-page-question-card-list__main_voted'}`}>
            <div className='call-voting-page-question-card-list__wrapper'>
                <div className='call-voting-page-question-card-list__title'>
                    <h3>{questionName}</h3>
                    <div className='call-voting-page-question-card-list__select-answer'>
                        <span>{ruleText}</span>
                        {isBulletinVoted ? (
                            <div className="call-voting-page-question-card-list__success-container">
                                <img src={successIcon} className="call-voting-page-question-card-list__success-icon" alt="Иконка успешного голосования" />
                                <p className="call-voting-page-question-card-list__success-text">Вы проголосовали</p>
                            </div>
                        ) : (
                            <span className={`call-voting-page-question-card-list__selected-answers ${selectedAnswersTextColor}`}>
                                Сейчас выбрано: {answersArray.length}
                            </span>
                        )}
                    </div>
                    <MaterialsVoteQuestion materialsVoteQuestion='Материалы вопроса' />
                </div>
                <div className='call-voting-page-question-card-list__main-content'>
                    {questionRows.map(elem => {
                        return <CallVotingList
                            key={elem.id}
                            rowId={elem.id}
                            nameAnswer={elem.value}
                            addAnswerToArray={addAnswerToArray}
                            removeAnswerFromArray={removeAnswerFromArray}
                            questionColumns={questionColumns}
                            isBulletinVoted={isBulletinVoted}
                        />
                    })}
                </div>
                <CallVotingPageVoteButtonList
                    sendVote={sendVote}
                    isReVoting={isReVoting}
                    isButtonActive={isButtonActive}
                    isBulletinVoted={isBulletinVoted}
                    onReVoteClick={onReVoteButtonClick}
                />
            </div>
        </div>
    )
}

export default CallVotingPageQuestionCardList;
