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
        question
    } = props;

    const currentUser = React.useContext(CurrentUserContext);

    const [isCheckBoxActive, setCheckBoxActive] = useState(false);

    console.log(results);

    useEffect(() => {
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
    }, [results, question.id, currentUser.id, id])

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
