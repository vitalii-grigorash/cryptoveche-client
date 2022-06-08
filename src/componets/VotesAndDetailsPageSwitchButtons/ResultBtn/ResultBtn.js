import React from "react";
import './ResultBtn.css';
import {useNavigate} from "react-router-dom";

const ResultBtn = ({hidden}) => {

     const linkResultButton = useNavigate();

    return (
            <div>
                <h2 className={'votes-and-details-page-switch-buttons__button'} onClick={() => linkResultButton('/main/votes-page-details-result')} hidden={hidden}>Результат</h2>
            </div>
    )
}

export default ResultBtn;