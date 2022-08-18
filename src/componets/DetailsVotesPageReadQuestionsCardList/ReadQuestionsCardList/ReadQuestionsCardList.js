import React from "react";
import './ReadQuestionsCardList.css';
import checkboxDisabled from '../../../img/checkbox-icon.svg';
import checkboxActive from '../../../img/checkbox-active.svg';

const ReadQuestionsCardList = (props) => {

    const {
        value,
        isMyBulletinTabActive
    } = props;

    return (
        <>
            {!isMyBulletinTabActive ? (
                <ul className='card-list__list-answer' type="square">
                    <li><span>{value}</span></li>
                </ul>
            ) : (
                <div className="card-list__checkbox-container">
                    <img
                        src={checkboxDisabled}
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
