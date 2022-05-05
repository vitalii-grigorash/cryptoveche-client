import React from "react";
import './GeneraInfoBtn.css';


const GeneraInfoBtn = ({hidden}) => {

    return (
        <div>
            <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Общая информация</h2>
        </div>
    )
}

export default GeneraInfoBtn;