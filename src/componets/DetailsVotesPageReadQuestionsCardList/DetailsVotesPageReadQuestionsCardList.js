import React, { useState, useEffect } from "react";
import './DetailsVotesPageReadQuestionsCardList.css';
import MaterialsVoteQuestion from "../VotesStatusComponents/MaterialsVoteQuestion/MaterialsVoteQuestion";
import ReadQuestionsCardList from "../DetailsVotesPageReadQuestionsCardList/ReadQuestionsCardList/ReadQuestionsCardList";

const DetailsVotesPageReadQuestionsCardList = (props) => {

    const {
        question,
        isMyBulletinTabActive,
        results
    } = props;

    const [ruleText, setRuleText] = useState('');

    function simpleQuestion() {
        setRuleText('Необходимо выбрать ровно ' + question.rules.pick_eq);
    }

    function positionSingleQuestion() {
        setRuleText('Количество должностных позиций доступных для выбора ' + question.rules.pick_le);
    }

    function positionMultipleQuestion() {
        setRuleText('Количество кандидатов доступных для выбора ' + question.rules.pick_le);
    }

    function samePositionsQuestion() {
        setRuleText('Количество кандидатов доступных для выбора ' + question.rules.pick_le);
    }

    function arbitraryQuestionNoRules() {
        setRuleText('Необходимо выбрать один или несколько');
    }

    function arbitraryQuestionLessThan() {
        setRuleText('Необходимо выбрать меньше чем ' + question.rules.pick_lt);
    }

    function arbitraryQuestionMoreThan() {
        setRuleText('Необходимо выбрать больше чем ' + question.rules.pick_gt);
    }

    function arbitraryQuestionLessOrEqual() {
        setRuleText('Необходимо выбрать меньше или ровно ' + question.rules.pick_le);
    }

    function arbitraryQuestionMoreOrEqual() {
        setRuleText('Необходимо выбрать больше или ровно ' + question.rules.pick_ge);
    }

    function arbitraryQuestionFromTo() {
        setRuleText(`Необходимо выбрать от ${question.rules.pick_gt} до ${question.rules.pick_lt}`);
    }

    function arbitraryQuestionFromEqualToEqual() {
        setRuleText(`Необходимо выбрать от ${question.rules.pick_ge} (включительно) до ${question.rules.pick_le} (включительно)`);
    }

    function arbitraryQuestionFromEqualTo() {
        setRuleText(`Необходимо выбрать от ${question.rules.pick_ge} (включительно) до ${question.rules.pick_lt}`);
    }

    function arbitraryQuestionFromToEqual() {
        setRuleText(`Необходимо выбрать от ${question.rules.pick_gt} до ${question.rules.pick_le} (включительно)`);
    }

    function arbitraryQuestionFewRules() {
        if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromTo();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromEqualToEqual();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromEqualTo();
        } else if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionFromToEqual();
        }
    }

    function arbitraryQuestion() {
        if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionNoRules();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq !== -1
        ) {
            simpleQuestion();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt !== -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionLessThan();
        } else if (
            question.rules.pick_gt !== -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionMoreThan();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge === -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le !== -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionLessOrEqual();
        } else if (
            question.rules.pick_gt === -1 &&
            question.rules.pick_ge !== -1 &&
            question.rules.pick_lt === -1 &&
            question.rules.pick_le === -1 &&
            question.rules.pick_eq === -1
        ) {
            arbitraryQuestionMoreOrEqual();
        } else {
            arbitraryQuestionFewRules();
        }
    }

    useEffect(() => {
        if (question.template === 'ynq') {
            simpleQuestion();
        } else if (question.template === 'none') {
            arbitraryQuestion();
        } else if (question.template === 'position_single') {
            positionSingleQuestion();
        } else if (question.template === 'position_multiple') {
            positionMultipleQuestion();
        } else if (question.template === 'same_positions') {
            samePositionsQuestion();
        }
        // eslint-disable-next-line
    }, [question.template])

    return (
        <div className={'read-questions-card-list__list-question-block'}>
            <div className={'list-question-block__title'}>
                <h3>{question.title}</h3>
                {!isMyBulletinTabActive && (
                    <>
                        <h5>{ruleText}</h5>
                        <MaterialsVoteQuestion materialsVoteQuestion={'Материалы вопроса'} />
                    </>
                )}
            </div>
            {question.options.rows.map((row) => (
                <ReadQuestionsCardList
                    key={row.id}
                    id={row.id}
                    value={row.value}
                    isMyBulletinTabActive={isMyBulletinTabActive}
                    results={results}
                    question={question}
                />
            ))}
        </div>
    )
}

export default DetailsVotesPageReadQuestionsCardList;
