import React from "react";
import './ListQuestionsCheckbox.css';


const ListQuestionsCheckbox = ({checkBoxNameRow, typeCheck}) => {




    return (
            <div className={'select-checkboxes-block__list-question-checkbox'}>
                <span>{checkBoxNameRow}</span>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
                <input className={'list-question-checkbox'} type={typeCheck} disabled={true}/>
            </div>

    )
}

export default ListQuestionsCheckbox;