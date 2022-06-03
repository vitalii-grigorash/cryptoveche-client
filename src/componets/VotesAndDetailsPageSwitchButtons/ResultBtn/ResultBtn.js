import React from "react";
import './ResultBtn.css';

const ResultBtn = ({hidden}) => {

    return (
            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} hidden={hidden}>Результат</h2>
            </div>
    )
}

export default ResultBtn;